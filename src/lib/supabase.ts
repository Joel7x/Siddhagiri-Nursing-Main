import { createClient } from '@supabase/supabase-js';

// Debug: Log environment variables
console.log('Environment variables:');
console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? 'Present' : 'Missing');

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

console.log('Using Supabase URL:', supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types
export interface AdmissionForm {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  gender: string;
  course: string;
  tenth_percentage: number;
  twelfth_percentage: number;
  neet_score?: number;
  address: string;
  emergency_contact_name: string;
  emergency_contact_phone: string;
  motivation: string;
  created_at?: string;
}

export interface ContactForm {
  id?: string;
  name: string;
  email: string;
  phone: string;
  department?: string;
  message: string;
  created_at?: string;
}