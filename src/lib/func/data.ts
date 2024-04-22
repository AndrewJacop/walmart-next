// //get Ads Data
// export const getAdsData = async () => {
//   const res = await fetch("http://localhost:3000/api/ads", {
//     cache: "no-cache",
//   });
//   const data = await res.json();
//   // console.log(data);
//   const adList: Ad[] = [];
//   data.map((ad: any) => {
//     const newAd: Ad = {
//       id: ad["id"],
//       title: ad.title,
//       href: ad.href,
//       imgLink: ad.imgLink,
//       query: ad.query,
//     };
//     adList.push(newAd);
//   });
//   return adList;
// };

// export const getAdsDataId = async (id: string) => {
//   const res = await fetch(`http://localhost:3000/api/ads/${id}`, {
//     cache: "no-store",
//   });
//   const data = await res.json();
//   // console.log(data);
//   // const adList: Ad[] = [];
//   // data.map((ad: any) => {
//   //   const newAd: Ad = {
//   //     id: ad["id"],
//   //     title: ad.title,
//   //     href: ad.href,
//   //     imgLink: ad.imgLink,
//   //     query: ad.query,
//   //   };
//   //   adList.push(newAd);
//   // });
//   // return adList;
//   return data;
// };

//get data of products from api
// export async function getProductData() {
//   const res = await fetch("http://localhost:3000/api/products?limit=200", {
//     cache: "no-store",
//   });
//   const data = await res.json();
//   const productsList: Product[] = [];
//   data.map((prd: any) => {
//     const newproduct: Product = {
//       id: prd.id,
//       brand: prd.brand,
//       colors: prd.colors,
//       discount: prd.discount,
//       images: prd.images,
//       isBestSeller: prd.isBestSeller,
//       isGiftable: prd.isGiftable,
//       originalPrice: prd.originalPrice,
//       quantity: prd.quantity,
//       returnPolicy: prd.returnPolicy,
//       seller: prd.seller,
//       subCatergory: prd.subCategory,
//       title: prd.title,
//     };
//     productsList.push(newproduct);
//   });
//   return productsList;
// }

//get products details by id
// export async function productDetails(id: string) {
//   const res = await fetch(`http://localhost:3000/api/products/details/${id}`);
//   const prdDetails = await res.json();
//   return prdDetails;
// }

//get single product reviews
// export async function getReviews(prdDetails: ProductDetial) {
//   const revs = prdDetails["reviews"];
//   const reviewsList: Review[] = [];

//   // Use Promise.all() to wait for all promises to resolve
//   await Promise.all(
//     revs.map(async (rev) => {
//       const res = await fetch(`http://localhost:3000/api/review/${rev}`);
//       const reviews = await res.json();
//       reviewsList.push(reviews);
//     })
//   );

//   return reviewsList;
// }

//get data of categories from API
// export async function getCategoryData() {
//   const res = await fetch("http://localhost:3000/api/categories");
//   const data = await res.json();
//   const CategoriesList: Category[] = [];
//   data.map((category: any) => {
//     const newCategory: Category = {
//       id: category.id,
//       barLink: category.barLink,
//       title: category.title,
//       imgLink: category.imgLink,
//       subCategories: category.subCategories,
//     };
//     CategoriesList.push(newCategory);
//   });
//   return CategoriesList;
// }

//get data of sub-categories from API
// export const getSubCatData = async () => {
//   const res = await fetch("http://localhost:3000/api/sub-categories");
//   const data = await res.json();
//   const subCatList: SubCategory[] = [];
//   data.map((sub: any) => {
//     const newSubCat: SubCategory = {
//       id: sub.id,
//       title: sub.title,
//       imgLink: sub.imgLink,
//       queries: sub.queries,
//     };
//     subCatList.push(newSubCat);
//   });
//   return subCatList;
// };

// export const getUsers = async () => {
//   const res = await fetch(`http://localhost:3000/api/users`, {
//     cache: "force-cache",
//   });
//   const data = await res.json();
//   const usersData: User[] = [];
//   data.map((user: any) => {
//     const newUser: User = {
//       id: user.id,
//       firstName: user.firstName,
//       lastName: user.lastName,
//       avatar: user.avatar,
//       email: user.email,
//       address: user.address,
//       isAdmin: user.isAdmin,
//       password: user.password,
//       paymentMethod: user.paymentMethod,
//       phoneNumber: user.phoneNumber,
//       userListsIds: user.phoneNumber,
//       isSeller: user.isSeller,
//       cart: [],
//     };
//     usersData.push(newUser);
//   });
//   return usersData;
// };
