import  React from "react";

type CategoryProps = {
  categoryData: Category;
};

/**
 * @brief Category Card
 *
 * this component is a small category card with img and category name
 * @param categoryData {id , title  ,imgLink ,.}
 */export function CategoryCard(cat: CategoryProps) {
  const myCat = cat.categoryData;
  return (
    <div className="flex flex-col items-center  p-1 mx-auto ">
          <img src={myCat.imgLink} alt="category img" />
          <p className="text-center font-sans text-xs">{myCat.title}</p>
    </div>
  );
}
