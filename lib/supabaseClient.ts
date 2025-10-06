import { createClient } from '@supabase/supabase-js';

// ====================================================================================
// !! IMPORTANT !!
// YOU MUST REPLACE THESE VALUES WITH YOUR OWN SUPABASE PROJECT URL AND ANON KEY
// Find them in your Supabase Dashboard: Settings > API
// ====================================================================================
const supabaseUrl = 'https://rktrokfxswduwwzvdsnn.supabase.co'; // <-- REPLACE THIS
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrdHJva2Z4c3dkdXd3enZkc25uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk3Mzg0NzMsImV4cCI6MjA3NTMxNDQ3M30.MZFwtGJ2y8zK9GC3Xxxa8h1gcB8rhqynWLnBiZfWPU4'; // <-- REPLACE THIS

if (!supabaseUrl || !supabaseAnonKey) {
    console.error("Supabase URL or anon key is missing. Please check `lib/supabaseClient.ts`.");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);