const LinksList = [
  { href: "#", title: "All Departments" },
  { href: "#", title: "Store Directory" },
  { href: "#", title: "Careers" },
  { href: "#", title: "Our Company" },
  { href: "#", title: "Sell on Walmart.com" },
  { href: "#", title: "Help" },
  { href: "#", title: "Product Recalls" },
  { href: "#", title: "Accessibility" },
  { href: "#", title: "Tax Exempt Program" },
  { href: "#", title: "Get the Walmart App" },
  { href: "/auth", title: "Sign-up for Email" },
  { href: "#", title: "Safety Data Sheet" },
  { href: "#", title: "Terms of Use" },
  { href: "#", title: "Privacy & Security" },
  { href: "#", title: "California Supply Chain Act" },
  { href: "#", title: "Your Privacy Choices" },
  { href: "#", title: "Notice at Collection" },
  { href: "#", title: "NV Privacy Notice" },
  { href: "#", title: "WA Privacy Notice" },
  { href: "#", title: "Request My Personal Information" },
  { href: "#", title: "Brand Shop Directory" },
  { href: "#", title: "Pharmacy" },
  { href: "#", title: "Walmart Business" },
  { href: "#", title: "#IYWYK" },
];

function BottomFooter() {
  return (
    <>
      <div className="bg-[#004f9a] p-3 text-center ">
        <div className="text-white flex-wrap items-center mx-60 text-sm">
          {LinksList.slice(0, 10).map((link, index) => (
            <a key={index} href={link.href} className="mr-5 hover:underline">
              {link.title}
            </a>
          ))}
        </div>
        <div className="text-white py-1 flex justify-center text-sm">
          {LinksList.slice(10, 18).map((link, index) => (
            <a key={index} href={link.href} className="mr-6 hover:underline">
              {link.title}
            </a>
          ))}
        </div>
        <div className="text-white flex justify-center text-sm">
          {LinksList.slice(18, 24).map((link, index) => (
            <a key={index} href={link.href} className="mr-6  hover:underline">
              {link.title}
            </a>
          ))}
        </div>
        <div className="text-white flex justify-center text-xs mt-9 pb-4">
          <span>© 2024 Walmart. All Rights Reserved.</span>
        </div>
      </div>
    </>
  );
}

export default BottomFooter;
