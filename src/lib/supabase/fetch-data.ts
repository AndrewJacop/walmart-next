import { createClient } from "@/lib/supabase/client";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

// Search
export async function getSearchReaults(query: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select()
    .like("title", `%${query}%`)
    .limit(10)
    .order("title");
  if (error) console.log(error);
  return data as Product[];
}

// Ads
export async function getAdsData() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("billboards")
    .select()
    .order("id");
  if (error) console.log(error);
  return data as Ad[];
}

// Users
export async function checkUserEmail(email: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("email", email);
  if (error) {
    console.log(error);
    return null;
  }
  return data[0] as User;
}

export async function addNewUser(newUser: User) {
  const supabase = await createClient();
  const { error } = await supabase.from("users").insert(newUser);
  if (error) console.log(error);
}

export async function getUserByUid(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("users").select().eq("id", id);
  if (error) console.log(error);
  if (data) return data[0] as User;
}
