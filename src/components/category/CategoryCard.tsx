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
      <Image src={myCat.imgLink} alt="category img" width={120} height={120} />
      <p className="text-center font-sans text-sm py-1">{myCat.title}</p>
    </div>
  );
}
