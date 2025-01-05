import { query } from '@/lib/db';

export async function POST(request) {
  try {
    const data = await request.json();
    console.log('Received data:', data);

    if (!data.customerName || !data.phoneNumber || !data.email) {
      throw new Error('Missing required fields: customerName, phoneNumber, or email');
    }

    const customerTable = 'customers';

    console.log('Ensuring customer table exists...');
    await query(`
      CREATE TABLE IF NOT EXISTS ${customerTable} (
        id SERIAL PRIMARY KEY,
        customerName VARCHAR(255),
        phoneNumber VARCHAR(10),
        email VARCHAR(255),
        whatsappNumber VARCHAR(10),
        address TEXT,
        aadharNumber VARCHAR(12),
        panNumber VARCHAR(10),
        bankAccountNumber VARCHAR(15),
        bankAccountName VARCHAR(255),
        ifscCode VARCHAR(11),
        schemeName VARCHAR(255),
        investmentAmount DECIMAL(10, 2),
        paymentMethod VARCHAR(50),
        submittedDocuments BYTEA,
        nominee1 JSONB,
        nominee2 JSONB,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
    console.log('Customer table verified or created.');

    console.log('Inserting data into customer table...');
    await query(
      `
      INSERT INTO ${customerTable} (
        customerName, phoneNumber, email, whatsappNumber, address, aadharNumber, panNumber, 
        bankAccountNumber, bankAccountName, ifscCode, schemeName, investmentAmount, paymentMethod, 
        submittedDocuments, nominee1, nominee2
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)
      `,
      [
        data.customerName, data.phoneNumber, data.email, data.whatsappNumber, data.address,
        data.aadharNumber, data.panNumber, data.bankAccountNumber, data.bankAccountName,
        data.ifscCode, data.schemeName, data.investmentAmount, data.paymentMethod,
        data.submittedDocuments || null, JSON.stringify(data.nominee1 || {}),
        JSON.stringify(data.nominee2 || {}),
      ]
    );

    console.log('Data inserted successfully.');
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('API error:', error.message);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
