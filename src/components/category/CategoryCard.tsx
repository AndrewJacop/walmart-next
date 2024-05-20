import Image from "next/image";

type CategoryProps = {
  categoryData: Category;
};

/**
 * @brief Category Card
 *
 * this component is a small category card with img and category name
 * @param categoryData {id , title  ,imgLink ,.}
 */ export function CategoryCard(cat: CategoryProps) {
  const myCat = cat.categoryData;
  return (
    <div className="flex flex-col items-center p-1 mx-auto">
      <img
        src={myCat.imgLink}
        alt="category img"
        className="rounded-full h-24 w-24"
       
      />
      <a href={`/departments/${myCat.id}`} className="text-center font-sans text-xs py-1 overflow-hidden truncate w-24 ">
        {myCat.title}
      </a>
    </div>
  );
}
