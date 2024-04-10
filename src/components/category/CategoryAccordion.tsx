import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SubCategoryItem from "./SubCategoryItem";
import Link from "next/link";
import { getSubCatData } from "@/lib/func/data";

type AccordionProps = {
  categoryData: Category;
};
/**
 * @brief Category Accordion
 *
 * this component is a Category Accordion dropdown used in the side bar
 * @param adData string : the ad data {id,title,imgLink,href,query}
 */

export default async function CategoryAccordion(cat: AccordionProps) {
  const category = cat.categoryData;
  const subCat = await getSubCatData();
  let subList: string[] = [];
  const subCategoriesIndexes: [] = [];

  subCat.map((sub) => subList.push(sub.id));

  for (let i = 0; i < category.subCategories.length; i++) {
    const num = category.subCategories[i];
    const list2Index = subList.indexOf(num);
    if (list2Index !== -1) {
      subCategoriesIndexes.push(list2Index);
    }
  }

  return (
    <>
      <h1 className="text-xl py-6 pr-4 font-bold pl-6 leading-5 border-b-1">
        {category.title}
      </h1>
      {subCategoriesIndexes.map((indx, idx) => {
        return (
          <Accordion key={idx} type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <SubCategoryItem subCatData={subCat[indx]} />
              </AccordionTrigger>
              {subCat[indx].queries.map((q, idx) => {
                return (
                  <AccordionContent key={idx}>
                    <Link href={q.query}>{q.title}</Link>
                  </AccordionContent>
                );
              })}
            </AccordionItem>
          </Accordion>
        );
      })}
    </>
  );
}
