import { query } from '@/lib/db';

export async function GET(request) {
  try {
    // Test a simple query
    const result = await query('SELECT NOW() AS current_time');
    return new Response(JSON.stringify({ success: true, data: result }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
