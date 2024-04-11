"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";


const explore = {
  title: "Explore more on Walmart.com",
  links: [
    "Straight Talk Phones",
    "Blackstone Griddles",
    "Microwaves",
    "Futons",
    "TV Stands",
    "Bookcases",
    "Keurig Coffee Makers",
    "Queen Mattresses",
    "Nespresso Pods & Capsules",
    "Crock-Pot",
    "Cereal & Granola",
    "Twin Mattresses",
    "Sleeper Sofas",
    "Couch Covers",
    "Tire Chains",
    "Electric Fireplace TV Stands",
    "75 Inch TVs",
    "Heating Pads",
    "Baby Cribs",
    "Twin Beds",
  ],
};
const departments = [
    {
      id: "1",
      title: "Deals & Featured Shops",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-ff3b/k2-_2ba5e02c-9e11-4158-a223-577b3bce351b.v1.jpg?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All Deals",
        "Clearance",
        "Flash Deals",
        "Best Sellers",
        "Easter",
        "Baby Days",
        "Spring Outdoor Refresh",
        "Walmart Style",
        "Brand Shop Directory",
        "Black & Unllmited",
        "Adaptive at Walmart",
        "Supporting Veterans",
        "W+",
      ],
    },
    {
      id: "2",
      title: "Grocery",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-9019/k2-_306ba182-5ce1-4c45-8a47-4cda610427c8.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop all Grocery",
        "EBT/SNAP eligible food",
        "Exclusively online",
        "Everyday meals",
        "Recipes",
        "Fresh Produce",
        "Meat & Seafood",
        "Deli",
        "Dairy & Eggs",
        "Bread & Bakery",
        "Frozen",
        "Pantry",
        "Breakfast & Cereal",
        "Bake Center",
        "Cookies",
        "Snacks",
        "Candy",
        "Beverages",
        "Alcohol",
        "Organic Foods",
        "Gluten Free Foods",
        "Food Gifts & Flowers Shop",
        "Deals",
      ],
    },
    {
      id: "3",
      title: "Home, Furniture & Appliances",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-7275/k2-_6d6fe6a6-3c46-40e9-b276-2e5a23fee280.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "Furniture",
        "Mattresses & Accessories",
        "Kitchen & Dining",
        "Storage & Organization",
        "Luggage & Travel",
        "Appliances",
        "Kitchen Appliances",
        "Decor",
        "Bedding",
        "Bath",
        "Deals",
      ],
    },
    {
      id: "4",
      title: "Clothing, Shoes & Accessories",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-fe24/k2-_6c0f3a2d-9224-4310-b328-65fb2251e2db.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "New Arrivals",
        "Editors' Picks",
        "Now Trending",
        "Easter Outfits",
        "Women's Spring Trends",
        "Women",
        "Women's Plus",
        "Men",
        "Young Adult",
        "Kids",
        "Baby & Toddler",
        "Shoes",
        "Jewelry & Watches",
        "Bags & Accessories",
        "Deals",
      ],
    },
    {
      id: "5",
      title: "Electronics",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-c984/k2-_3ffe24a3-76b9-4c57-8c4d-6c716d5ba9f5.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "TV & Video",
        "Home Audio & Theater",
        "Smart Home",
        "Tablets & Accessories",
        "Computers",
        "Cell Phones",
        "Wearable Tech",
        "Cameras, Camcorders & Drones",
        "Photo Services",
        "Portable Audio",
        "Auto Electronics",
        "Video Games",
        "Deals",
      ],
    },
    {
      id: "6",
      title: "Video Games",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-1465/k2-_c6cd8b02-25bf-4ea8-bc4e-bf1f10e1e950.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop all",
        "Xbox",
        "PlayStation",
        "Nintendo",
        "Video Game Accessories",
        "Virtual Reality",
        "Deals",
      ],
    },
    {
      id: "7",
      title: "Patio & Garden",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-6689/k2-_6e2e35b2-6af8-4d3e-9d5e-2f0aee3a7761.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "Patio Furniture",
        "Patio Sets",
        "Conversation Sets",
        "Outdoor Cooking",
        "Gas Grills",
        "Charcoal",
        "Outdoor Decor",
        "Outdoor Rugs",
        "Outdoor Cushions",
        "Outdoor Power Equipment",
        "Lawn Mowers",
        "Lawn Care",
        "Bird Seed",
        "Pool Chemicals",
        "Garden Center",
        "Soil",
        "Mulch",
        "Live Plants",
        "Deals",
      ],
    },
    {
      id: "8",
      title: "Baby",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-59fe/k2-_5ab34a24-62b8-4abf-b7e6-468d9c269a24.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "Nursery",
        "Car Seats",
        "Strollers",
        "Gear & Activity",
        "Diapers & Wipes",
        "Feeding & Nursing",
        "Baby & Toddler Toys",
        "Bath & Potty",
        "Baby Health & Safety",
        "Baby Clothing",
        "Toddler Clothing",
        "Toddlers' Room",
      ],
    },
    {
      id: "9",
      title: "Toys",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-cc39/k2-_695de395-d5b3-445c-b545-1168187408bd.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "Action Figures",
        "Dolls & Dollhouses",
        "Learning Toys",
        "Arts & Crafts",
        "Games & Puzzles",
        "Collectibles",
        "Cars, Drones & RC",
        "LEGO & Building Sets",
        "Pretend Play",
        "Outdoor Toys",
        "Kids Bikes",
        "Ride-on Toys",
        "Deals",
      ],
    },
    {
      id: "10",
      title: "Pharmacy, Health & Wellness",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-6840/k2-_aab5f742-8357-4f46-99f5-ea605748fc2a.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop all Health",
        "Shop All Wellness",
        "Pharmacy",
        "COVID-19 Testing Kits",
        "Vitamins & Supplements",
        "Pain Relievers",
        "Allergy, Sinus & Asthma",
        "Cough, Cold & Flu",
        "Weight Management",
        "Protein & Performance Nutrition",
        "Shop All Wellness",
        "Diabetes Management",
        "Medicine Cabinet",
        "Home Health Care",
        "Digestive Health",
        "Women’s Health",
        "Deals",
      ],
    },
    {
      id: "11",
      title: "Beauty",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-66d3/k2-_c3071476-68e0-40a5-95f4-d27e1325b0e9.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "Viral Beauty Picks",
        "New Arrivals",
        "Suncare & Tanning",
        " Beauty Box",
        "Walmart Start",
        "BeautySpaceNK",
        "Cury Hair & More Store",
        "Shop All Premium Beauty",
        "Makeup",
        "Skincare",
        "Hair Care",
        "Fragrance",
        "Nail Care",
        "Beauty Tech & Tools",
        "Bath & Body",
        "Men's Grooming",
        "Deals",
      ],
    },
    {
      id: "12",
      title: "Personal Care",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-50e6/k2-_ecdff460-8dff-49ba-8c97-bc65f7614a1b.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "Multipacks",
        "Bath & Body",
        "Oral Care",
        "Incontinence",
        "Shaving",
        "Men's Grooming",
        "Sunscreen",
        "Self Tanners",
        "Deals",
      ],
    },
    {
      id: "13",
      title: "Auto & Tires",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-a416/k2-_1f018c0e-9181-4286-9716-79fc9fc830c8.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "Tires",
        "Batteries & Accessories",
        "Auto Care Center",
        "Oils and Fluids",
        "Replacement Auto Parts",
        "Auto Electronics",
        "Exterior Car Parts & Accessories",
        "Interior Accessories",
        "Automotive Tools & Equipment",
        "Auto Detailing & Car Care",
        "Wheels and Rims",
        "Truck Parts & Accessories",
        "RV Parts & Accessories",
        "OEM Parts",
        "Motorcycle Parts & Accessories",
        "Vehicles",
        "Automotive Apparel",
        "Car Safety & Car Security",
        "Deals",
      ],
    },
    {
      id: "14",
      title: "Sports & Outdoors",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-21f3/k2-_db4fcda3-61af-4c3a-88af-e356be12a8b7.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "Sports",
        "Basketball",
        "Football",
        "Golf",
        "Pickleball",
        "Soccer",
        "Fitness",
        "Outdoor Sports",
        "Bikes",
        "Boats & Marine",
        "Camping",
        "Fishing",
        "Hunting",
        "Sports Shooting",
        "Outdoor Toys",
        "Trampolines",
        "Swing Sets",
        "Swimming Pools & Spas",
        "Deals",
      ],
    },
    {
      id: "15",
      title: "Pets",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-449c/k2-_2fea89d3-2032-4e58-91ef-37d67440244a.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "Dog Supplies",
        "Cat Supplies",
        "Fish Supplies",
        "Small Animal Supplies",
        "Reptile Supplies",
        "Bird Supplies",
        "Horse Supplies",
        "Farm Animal Supplies",
        "Deals",
      ],
    },
    {
      id: "16",
      title: "Home Improvement",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-c596/k2-_f731f80f-7517-4d64-8ff7-ea347af55b71.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "Heaters",
        "Humidifiers",
        "Air Quality",
        "Water Purification",
        "Tools",
        "Fasteners",
        "Building Materials",
        "Fans",
        "Wallpaper & Wall Coverings",
        "Kitchen Renovation",
        "Bathroom Renovation",
        "Shower Heads",
        "Toilet Seats & Lids",
        "Paint",
        "Flooring",
        "Light Bulbs",
        "Light Fixtures",
        "Garage Storage",
        "Personal Protective Equipment",
        "Wallpaper & Wall Coverings",
        "Adhesives & Glues",
        "Dehumidifiers",
        "Air Conditioners",
        "Deals",
      ],
    },
    {
      id: "17",
      title: "Household Essentials",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-36b0/k2-_2cb4042b-b10b-4972-be86-5bf73fcc7fda.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "Food Prep Essentials",
        "As Seen on TV",
        "Pest Control",
        "Laundry Room",
        "Kitchen",
        "Bathroom",
        "Cleaning Supplies",
        "Paper & Plastic",
        "Air Fresheners",
        "Batteries",
        "Light Bulbs",
        "The Mindful Living Shop",
        "Deals",
      ],
    },
    {
      id: "18",
      title: "Seasonal & Celebrations",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-efc0/k2-_c250cd28-7d28-4bc0-ac5a-343d3f751ebb.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "Easter Baskets",
        "Easter Decor",
        "Easter Eggs",
        "Easter Grass",
        "Easter Indoor Decor",
        "Easter Outdoor Decor",
        "Easter Prefilled Baskets",
        "Easter Prefilled Eggs",
        "Easter Squishmallows",
        "Easter Stuffed Animals",
        "Baby Shower",
        "Balloons",
        "Balloon Arches",
        "Balloons by Color",
        "Birthday Party Supplies",
        "Gender Reveal",
        "Helium Tanks",
        "Themed Party Supplies",
      ],
    },
    {
      id: "19",
      title: "School & Office Supplies",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-22ef/k2-_2e3984db-e432-439a-b9af-d2b6425d1191.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "School Supplies",
        "Teacher’s Classroom Shop",
        "Bulk Teaching Supplies",
        "School Arts and Crafts",
        "Shipping & Moving",
        "Safes & Lockboxes",
        "Walmart for Business",
        "Pens",
        "Notebooks & Pads",
        "Calendars & Planners",
        "Markers & Highlighters",
        "Paper",
        "Pencils & Pencil Sharpeners",
        "Deals",
      ],
    },
    {
      id: "20",
      title: "Arts, Crafts, Sewing & Party Supplies",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-efc0/k2-_c250cd28-7d28-4bc0-ac5a-343d3f751ebb.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "Sewing Machines & Accessories",
        "Die Cutting",
        "Fabric",
        "Arts & Crafts Furniture and Storage",
        "Craft Supplies",
        "Art Supplies",
        "Knitting & Crochet",
        "Arts & Crafts for Kids",
        "Beading & Jewelry Making",
        "Fabric & Apparel Crafting",
        "Artificial Plants and Flowers",
        "Party Supplies",
        "Gift Wrap",
        "Deals",
      ],
    },
    {
      id: "21",
      title: "Movies & TV",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-32e1/k2-_96bbe7ff-9df2-4aaa-907a-7ee3932fb25e.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "4K Ultra HD Movies",
        "Blu-ray Movies",
        "DVD Movies",
        "4K Ultra HD TV Shows",
        "Blu-ray TV Shows",
        "DVD TV Shows",
        "Deals",
      ],
    },
    {
      id: "22",
      title: "Music & Vinyl",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-ce08/k2-_e2d6665c-0ff9-4cfc-a548-7a1e26a6a754.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop All",
        "Turntables",
        "Musical instruments",
        "Rap & hip-hop",
        "Rock",
        "Pop",
        "Country",
        "Classical",
        "Deals",
      ],
    },
    {
      id: "23",
      title: "Books",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-9fc8/k2-_30344bb2-2a6b-4f13-8532-dc42cfa47a23.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Shop all books",
        "Kobo eReaders",
        "eBooks",
        "Children's books",
        "Textbooks",
        "Teen & Young Adult books",
        "Magazines",
        "Biographies & Memoires",
        "Literature & Fiction",
        "Comics & Graphic Novels",
        "Arts & Entertainment",
        "Cookbooks, Food, & Wine",
        "Deals",
      ],
    },
    {
      id: "24",
      title: "Gift Cards",
      imgLink:
        "https://i5.walmartimages.com/dfw/4ff9c6c9-e0f2/k2-_4ff84ecd-9f8e-4be3-acf5-cf4355c9bd72.v1.png?odnHeight=140&odnWidth=140&odnBg=FFFFFF",
      categories: [
        "Gift Cards",
        "Gaming Gift Cards",
        "Restaurant Gift Cards",
        "Retail Gift Cards",
        "Prepaid Gift Cards",
        "Entertainment Gift Cards",
        "Travel Gift Cards",
        "Prepaid Minutes Gift Cards",
        "Lifestyle Gift Cards",
        "Plastic Gift Cards",
        "eGift Cards",
      ],
    },
  ];

  
 type DepartmentProps={
    depatmentData:Department[];
 }
export default function DepartmentCard(department:DepartmentProps) {
    const departments=department.depatmentData
  return (
    <div>
      <h1 className="flex  container mt-10 font-bold text-2xl">
        Browse Departments
      </h1>

      <div className="container mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 ">
        {departments.map((dep) => (
          <Card
            key={dep.id}
            className=" flex flex-row w-full h-full shadow-lg "
          >
            <CardHeader className="flex flex-col">
              <CardTitle className="py-2">{dep.title}</CardTitle>
              <CardDescription>
                {dep.categories.map((c) => (
                  <a className="flex cursor-pointer  hover:underline" key={c.id}>
                    {c.title}
                  </a>
                ))}
              </CardDescription>
            </CardHeader>
            <div>
              {" "}
              <img src={dep.imgLink} alt="" />
            </div>
          </Card>
        ))}
      </div>
      <div className="flex flex-col  container mt-5 ">
        <h1 className="text-base font-bold">{explore.title}</h1>
        <div className="pt-5 pb-20">
          {explore.links.map((link) => (
            <a className="mr-3.5 text-xs underline " key={link} href="#">
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );

}
