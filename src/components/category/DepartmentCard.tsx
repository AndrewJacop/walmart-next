import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


type DepartmentProps = {
  depatmentData: Department;
};
export default function DepartmentCard(dep: DepartmentProps) {
  const department = dep.depatmentData;
  return (
    <div>
      <Card
        key={department.id}
        className=" flex flex-row w-full h-full shadow-lg "
      >
        <CardHeader className="flex flex-col">
          <CardTitle className="py-2">{department.title}</CardTitle>
          <CardDescription>
            <span>
              {department.queries.map((c) => (
                <a
                  className="flex cursor-pointer py-2 hover:underline"
                  key={c.query}
                >
                  {c.title}
                </a>
              ))}
            </span>
          </CardDescription>
        </CardHeader>
        <div>
          {" "}
          <img src={department.imgLink} alt="department img" className="mt-5" />
        </div>
      </Card>
    </div>
  );
}
