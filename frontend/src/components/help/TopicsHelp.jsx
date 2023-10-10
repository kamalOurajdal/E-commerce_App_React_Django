import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

function TopicsHelp() {
  const QA = [
    {
      title: "How do I place an order??",
      desc: `To place an order, follow these steps:
      Browse our products and select the items you want.
      Add the items to your shopping cart.
      Review your cart and click Checkout.
      Enter your shipping and payment information.
      Review your order one last time and click Place Order.`,
    },
    {
      title: "Can I track the status of my order?",
      desc: `Yes, you can track your order's status. 
      Once your order is shipped, you will receive a 
      tracking number via email. You can use this tracking 
      number on our website or the shipping carrier's website 
      to check the status of your delivery.`,
    },
    {
      title: "What is your return policy?",
      desc: `Our return policy allows you to return items
       within 30 days of purchase, provided they are in their 
       original condition and packaging. To initiate a return,
        visit your account's "Order History" and follow the 
        instructions. Please review our detailed return policy 
        on our website for more information.`,
    },
    {
      title: "How can I contact your customer support team?",
      desc: `You can reach our customer support team through several methods:
      Email: kan9alasuport@gmail.com
      Phone: 0501020304`,
    },
    {
      title: " Can I cancel or modify an order after it has been placed?",
      desc: `We process orders quickly, but if you need to cancel 
      or modify an order, please contact us immediately.
      We'll assist you in making the necessary changes 
      if the order hasn't been shipped.`,
    },
    {
      title: "How do I change my shipping address after placing an order?",
      desc: `If you need to change your shipping address after 
      placing an order, please contact our customer support 
      team as soon as possible. We will do our best to update
       the address before the order ships.`,
    },
  ];

  const [open, setOpen] = useState(false);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  return (
    
    <section className="w-full  pb-20 lg:pt-10  ">
      <div className="bg-[#f6f9fc] rounded-lg px-4 lg:px-10 py-5">
        <div className="flex justify-between mb-4">
          <h1 className="font-bold text-lg">Topics</h1>
          <p className="text-gray-400">
            More topics <i className="fa-solid fa-caret-right"></i>
          </p>
        </div>
        <div className="  grid lg:grid-cols-2 gap-4">
          {QA.map((item, index) => (
            <AccordionItem
              key={index}
              open={index === open}
              title={item.title}
              desc={item.desc}
              toggle={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopicsHelp;
