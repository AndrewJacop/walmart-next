import DepartmentCard from "@/components/category/DepartmentCard";

import { createClient } from "@/lib/supabase/client";

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

async function getDepartments() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("departments")
    .select()
    .order("id");

  return data as Department[];
}

async function getCtegoryData() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("categories")
    .select()
    .order("id");

  return data as Category[];
}
export default async function Departments() {
  const depList = await getDepartments();
  return (
    <div className="mx-32">
      <h1 className="flex  container  mb-3 font-bold text-2xl">
        Browse Departments
      </h1>
      <hr />

      <div className="container mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 ">
        {depList.map((department) => (
          <DepartmentCard key={department.id} depatmentData={department} />
        ))}
      </div>
      <div className="flex flex-col  container mt-5 ">
        <h1 className="text-base font-bold">{explore.title}</h1>
        <div className="pt-5 pb-20">
          {explore.links.map((link,indx) => (
            <a className="mr-3.5 text-xs underline " key={indx} href="#">
              {link}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
