import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const supabaseUrl = "https://kxhqfwlfendphhwurhcg.supabase.co";
const supabaseKey = "sb_publishable_CBVEIcLFuscGmMksil5gWQ_vpXUFLOm";

export const supabase = createClient(supabaseUrl, supabaseKey);