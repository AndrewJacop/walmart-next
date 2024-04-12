import Link from "next/link";

const linksList = [
  { href: "#", title: "Shop by Brand" },
  { href: "#", title: "All Food" },
  { href: "#", title: "New Food Items" },
  { href: "#", title: "Seasonal Grocery" },
  { href: "#", title: "Food & Grocery" },
  { href: "#", title: "Fresh Produce" },
  { href: "#", title: "Carrots" },
  { href: "#", title: "Potatoes" },
  { href: "#", title: "Organic Produce" },
  { href: "#", title: "Squash & Eggplant" },
  { href: "#", title: "Spring Produce" },
];
/**
 * @breif Related Pages
 * this components has group of links on the bottom of the screens
 */
function RelatedPage() {
  return (
    <div className="ml-10 w-11/12 ">
      <h1 className="text-2xl font-bold text-gray-800">Related pages</h1>
      <div className=" pt-7 grid grid-cols-3">
        {linksList.map((link, index) => (
          <Link
            key={index}
            className="underline py-2 hover:no-underline"
            href={link.href}>
            {link.title}{" "}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RelatedPage;
