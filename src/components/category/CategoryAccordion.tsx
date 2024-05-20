import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import SubCategoryItem from "@/components/category/SubCategoryItem";
import { getCategoriesData, getSubCategoriesData } from "@/lib/supabase/fetch-data";

type AccordionProps = {
  categoryData: Category;
};
/**
 * @brief Category Accordion
 *
 * this component is a Category Accordion dropdown used in the side bar
 * @param categoryData string : the ad data {id,title,imgLink,href,query}
 */

export default async function CategoryAccordion(cat: AccordionProps) {
  const category = cat.categoryData;
  const subCat = await getSubCategoriesData();
  const categories= await getCategoriesData()
  let subList: number[] = [];
  const subCategoriesIndexes: number[] = [];

  // subCat.map((sub) => subList.push(sub.id));

  // for (let i = 0; i < category.subCategories.length; i++) {
  //   const num = category.subCategories[i];
  //   const list2Index = subList.indexOf(num);
  //   if (list2Index !== -1) {
  //     subCategoriesIndexes.push(list2Index);
  //   }
  // }

  return (
    <>
    <h1 className="text-xl py-6 pr-4 font-bold  leading-5 border-b-1">
        Categories
      </h1>
    {categories.map((cat,indx)=>(

    <div key={indx}>
      
          <Accordion  type="single" collapsible>
            <AccordionItem value={`item-${indx+1}`}>
              <AccordionTrigger>
                <SubCategoryItem subCatData={cat} />
              </AccordionTrigger>
              <AccordionContent >

        {cat.subCategories.slice(0,5).map((itm, indx) => {
        const subcategories = subCat.filter((sub) => sub.id === itm);

        return subcategories.map((sub,idx) => (
                    <div key={idx}><a  className="no-underline text-sm hover:underline" href={`/departments/${cat.id}/${sub.id}`}>{sub.title}</a><br /></div>

                ))
                
              })}
              <Link href={'#'} className="text-sm underline hover:no-underline ">Show All</Link>
                  </AccordionContent>
            
            </AccordionItem>
          </Accordion>
        
      
      
    </div>
  ))}
  </>
  );
}
