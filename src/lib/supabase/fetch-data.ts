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



export async function addCartItem(newCart: Cart) {
    const supabase = await createClient();
    const { error } = await supabase

    .from('users')
    .update({'cart': [newCart]})
    .eq('id',newCart.userId)
    .select()
    if (error) console.log(error);
}


export async function getUserByUid(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("users").select().eq("id", id);
  if (error) console.log(error);
  if (data) return data[0] as User;
}

// Categories
export async function getCategoriesData(){
  const supabase=await createClient();
  const {data,error}=await supabase
  .from("categories")
  .select()
  .order("id");
  if (error) console.log(error)
  return data as Category[];
}

// SubCategories
export async function getSubCategoriesData(){
  const supabase= await createClient()
  const {data,error}=await supabase
  .from("subcategories")
  .select()
  .order("id")
  if(error) console.log(error)
  return data as SubCategory[];
}

// Products
export async function getProductsData(){
  const supabase= await createClient()
  const {data,error}=await supabase
  .from("products")
  .select()
  .order("id")
  if(error) console.log(error)
  return data as Product[];
}
