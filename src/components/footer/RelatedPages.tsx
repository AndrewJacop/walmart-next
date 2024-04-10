import Link from "next/link";

const RelatedLinks = (props: { linkName: string; urlLink: string }) => {
  const { linkName, urlLink } = props;
  return (
    <>
      <Link href={urlLink} className="underline pr-72 text-sm pt-10">
        {linkName}
      </Link>
    </>
  );
};

function RelatedPage() {
  return (
    <div className="ml-10 w-11/12 related">
      <h1 className="text-2xl font-bold">Related pages</h1>
      <div className="pt-7">
        <RelatedLinks linkName={"Shop by Brand"} urlLink={"#"} />
        <RelatedLinks linkName={"All Food"} urlLink={"#"} />
        <RelatedLinks linkName={"New Food Items"} urlLink={"#"} />
      </div>
      <div className="pt-5">
        <RelatedLinks linkName={"Seasonal Grocery"} urlLink={"#"} />
        <RelatedLinks linkName={"Food & Grocery"} urlLink={"#"} />
      </div>
    </div>
  );
}

export default RelatedPage;
