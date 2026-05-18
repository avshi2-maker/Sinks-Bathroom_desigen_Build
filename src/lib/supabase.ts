import { createClient } from "@supabase/supabase-js";

/**
 * Supabase client — shared with Sinks_ART CRM database.
 *
 * Reads from sink_media, marble_samples, dealers (public-safe data).
 * Writes ONLY to leads table (campaign form submissions).
 */

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase env vars. Check .env.local has NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY."
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
