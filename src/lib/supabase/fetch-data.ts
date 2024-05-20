import { createClient } from "@/lib/supabase/client";

export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";


export type Filter = {
  query?: string;
  priceMin?: number;
  priceMax?: number;
  isBestSeller: boolean;
  isGiftable: boolean;
  onlyAvailabe: boolean;
  returnIdxList: number[];
  pageIdx: number;
};
// Search
export async function getSearchReaults(query: string) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("products")
    .select()
    .like("title", `%${query}%`)
    .limit(10)
    .order("title");
  if (error) console.log("##fetchdata->getSearchReaults##", error);
  return data as Product[];
}

// Ads
export async function getAdsData() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("billboards")
    .select()
    .order("id");
  if (error) console.log("##fetchdata->getAdsData##", error);
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
    console.log("##fetchdata->checkUserEmail##", error);
    return null;
  }
  return data[0] as User;
}

export async function addNewUser(newUser: User) {
  const supabase = await createClient();
  const { error } = await supabase.from("users").insert(newUser);
  if (error) console.log("##fetchdata->addNewUser##", error);
}

export async function addNewOrder(newOrder: Order[]) {
  const supabase = await createClient();
  const { error } = await supabase.from("orders").insert(newOrder);
  if (error) console.log("##fetchdata->addNewOrder##", error);
}

export async function addCartItem(newCart: CartItem[], userId: string) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("users")
    .update({ cart: newCart })
    .eq("id", userId);
  if (error) console.log("##fetchdata->addCartItem##", error);
}

export async function getUserByUid(id: string) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("users").select().eq("id", id);
  if (error) console.log("##fetchdata->getUserByUid##", error);
  if (data) return data[0] as User;
}

// Categories
export async function getCategoriesData() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("categories")
    .select()
    .order("id");
  if (error) console.log("##fetchdata->getCategoriesData##", error);
  return data as Category[];
}

// SubCategories
export async function getSubCategoriesData() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("subcategories")
    .select()
    .order("id");
  if (error) console.log("##fetchdata->getSubCategoriesData##", error);
  return data as SubCategory[];
}

// Products
export async function getProductsData() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("products").select().order("id");
  if (error) console.log("##fetchdata->getProductsData##", error);
  return data as Product[];
}

// Filter

export async function getFilteredProductsData(filter: Filter) {
  const supabase = await createClient();

  const pageSize = 100;

  const start = (filter.pageIdx - 1) * pageSize;
  const end = start + pageSize - 1;

  const { data: productsData, error } = await supabase
    .from("products")
    .select("*")
    .like("title", filter.query ? `%${filter.query}%` : "%%")
    .is("isBestSeller", filter.isBestSeller)
    .is("isGiftable", filter.isGiftable)
    .gt("quantity", filter.onlyAvailabe ? 0 : -1)
    .in("returnPolicy", filter.returnIdxList)
    .order("id", { ascending: true })
    .gte("originalPrice", filter.priceMin ?? 0)
    .lte("originalPrice", filter.priceMax ?? 10000)
    .range(start, end)
    .returns<Product[]>();

  if (error) console.log("##fetchdata->getProductsData##", error);
  return productsData;
}

// Orders
export async function getOrdersData() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("orders")
    .select()
    .order("id", { ascending: false })
    .returns<Order[]>();
  if (error) console.log("##fetchdata->getOrdersData##", error);
  return data;
}

export async function getDepartmentData() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("departments")
    .select()
    .order("id", { ascending: false })
    .returns<Department[]>();
  if (error) console.log("##fetchdata->getOrdersData##", error);
  return data;
}

export function getOrderId() {
  var number = 0;
  getOrdersData()
    .then((data) => {
      if (data) {
        number = data[0].id + 1;
      }
    })
    .catch((error) => {
      console.log("##fetchdata->getOrderId##", error);
    });
  return number;
}

export async function getReviewsData() {
  const supabase = await createClient();
  const { data, error } = await supabase.from("reviews").select().order("id");
  if (error) console.log("##fetchdata->getReviewsData##", error);
  return data as Review[];
}

export async function getReviewById(id: number) {
  const supabase = await createClient();
  const { data, error } = await supabase.from("reviews").select().eq("id", id);
  if (error) console.log("##fetchdata->getReviewById##", error);
  if (data) return data[0] as Review;
}

export async function addNewReview(newreview: Review) {
  const supabase = await createClient();
  const { error } = await supabase.from("reviews").insert(newreview);
  if (error) console.log("##fetchdata->addNewReview##", error);
}

export async function addNewProductReview(
  newReviews: number[],
  productId: string
) {
  const supabase = await createClient();
  const { error } = await supabase
    .from("products")
    .update({ reviews: newReviews })
    .eq("id", productId);
  if (error) console.log("##fetchdata->addNewProductReview##", error);
}
