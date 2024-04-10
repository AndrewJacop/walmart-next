import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

export default async function DepartmentCard() {
  const depList = await getDepartments();

  return (
    <div>
      <h1 className="flex  container mt-10 font-bold text-2xl">
        Browse Departments
      </h1>

      <div className="flex items-center justify-center container">
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 ">
          {depList.map((dep) => (
            <div key={dep.id}>
              <Card className=" flex flex-row w-full h-full shadow-lg ">
                <CardHeader className="flex flex-col">
                  <CardTitle className="py-2">{dep.title}</CardTitle>
                  <CardDescription>
                    <span>
                      {dep.queries.map((c) => (
                        <a
                          className="flex cursor-pointer  hover:underline"
                          key={c.query}>
                          {c.title}
                        </a>
                      ))}
                    </span>
                  </CardDescription>
                </CardHeader>
                <div>
                  {" "}
                  <img src={dep.imgLink} alt="" />
                </div>
              </Card>
            </div>
          ))}
        </div>
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
  // "className="flex items-center justify-center min-h-screen container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-white gap-5""
  // return (
  //     <Card className=" flex flex-row w-96 ">
  //         <CardHeader className="flex flex-col">
  //             <CardTitle className="py-2">
  //                 {departmentGrocery.title}
  //             </CardTitle>
  //             <CardDescription>
  //                 <div>
  //                     {departmentGrocery.categories.map((c) => (
  //                         <div
  //                             className="cursor-pointer"
  //                             key={departmentGrocery.id}
  //                         >
  //                             {c}
  //                         </div>
  //                     ))}
  //                 </div>
  //             </CardDescription>
  //         </CardHeader>
  //         <div>
  //             {" "}
  //             <img src={departmentGrocery.icon} alt="" />
  //         </div>
  //     </Card>
  // );
}
