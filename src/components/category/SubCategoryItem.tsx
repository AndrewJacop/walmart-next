
type SubCatItemProps = {
  subCatData: Category;
};
/**
 * @brief SubCategory Accordion
 *
 * this component is a subCategory item appear on side bar of categries 
 * has its img and name
 * @param subCatData use here {title,imgLink}
 */

export default function SubCategoryItem(subCat: SubCatItemProps) {
  const subCategory = subCat.subCatData;
  return (
    <div className="cursor-pointer py-4 w-full items-center flex">
      <img
        alt="sub cat item image"
        className="max-w-full rounded-full self-center w-10 h-10"
        src={subCategory.imgLink}
       
      />
      <span className="text-base text-left ml-4 w-[90%] font-bold">
        {subCategory.title}
      </span>
    </div>
  );
}
