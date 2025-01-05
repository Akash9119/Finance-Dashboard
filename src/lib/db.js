import mysql from 'mysql2/promise';

// Create a connection pool
const pool = mysql.createPool({
  host: '127.0.0.1',    // Your MySQL server host
  port: 9009,           // Specify the custom port
  user: 'admin',         // Your MySQL username
  password: 'Akash@2019', // Your MySQL password
  database: 'my_database', // Your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;
