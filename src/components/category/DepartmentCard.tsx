import Image from "next/image";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

type DepartmentProps = {
  depatmentData: Department[];
};

export default function DepartmentCard(department: DepartmentProps) {
  const departments = department.depatmentData;
  return (
    <div>
      <h1 className="flex  container mt-10 font-bold text-2xl">
        Browse Departments
      </h1>

      <div className="container mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 ">
        {departments.map((dep) => (
          <Card
            key={dep.id}
            className=" flex flex-row w-full h-full shadow-lg ">
            <CardHeader className="flex flex-col">
              <CardTitle className="py-2">{dep.title}</CardTitle>
              <CardDescription>
                {dep.categories.map((c) => (
                  <a
                    className="flex cursor-pointer  hover:underline"
                    key={c.id}>
                    {c.title}
                  </a>
                ))}
              </CardDescription>
            </CardHeader>
            <div>
              {" "}
              <Image
                src={dep.imgLink}
                alt="department card"
                height={140}
                width={140}
              />
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
