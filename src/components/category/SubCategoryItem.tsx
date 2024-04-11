
type SubCatItemProps = {
  subCatData: SubCategory;
};
/**
 * @brief Category Accordion
 *
 * this component is a Category Accordion dropdown used in the side bar
 * @param adData string : the ad data {id,title,imgLink,href,query}
 */

export default function SubCategoryItem(subCat: SubCatItemProps) {
  const subCategory = subCat.subCatData;
  return (
    <div className="cursor-pointer py-4 w-full items-center flex">
      <img
        className="max-w-full self-center w-12 h-12"
        src={subCategory.imgLink}
      />
      <span className="text-base text-left ml-4 w-[90%] font-bold">
        {subCategory.title}
      </span>
    </div>
  );
}
