import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Supabase URL o Anon Key no están definidos en las variables de entorno. Por favor, revisa tu archivo .env.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);