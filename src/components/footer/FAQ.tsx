import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqList = [
  {
    question: "What are the most popular clothing items?",
    answ: "Some of the most popular styles of clothing are: Jeans: A versatile and timeless wardrobe staple, jeans come in various styles, cuts, and washes. They can be dressed up or down for different occasions.",
  },

  {
    question: "What is Walmart's policy for returning clothing?",
    answ: "Just like nearly everything we sell, you can return clothing you've purchased from Walmart as long as the return meets certain criteria. We strive to make returns and exchanges easy for you. Start a return on your Walmart app, at Walmart.com.",
  },

  {
    question: "What styles of clothing are popular this season?",
    answ: "These types of clothing are always in style, no matter the season. Casual: Comfortable, everyday clothing like jeans, T-shirts, hoodies and sneakers Business casual: A mix of professional and casual attire, often including dress pants or skirts, button-down shirts and blouses Formal.",
  },
];

/**
 * @breif FAQ
 * this components is just an accordion on the bottom of the screens
 */
function FAQ() {
  return (
    <div className="flex flex-col mx-8 my-1">
      <div>
        <h1 className="font-bold text-2xl text-gray-700">FAQ</h1>
      </div>
      <Accordion type="single" collapsible>
        {faqList.map((faq, index) => (
          <AccordionItem value="item-1" key={index}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answ}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default FAQ;
