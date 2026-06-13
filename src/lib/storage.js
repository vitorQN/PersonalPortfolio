import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY
)


export function getImageUrl(filePath) {
  const { data } = supabase.storage.from("Portfolio").getPublicUrl(filePath);

  console.log(data.publicUrl);

  return data.publicUrl;
}