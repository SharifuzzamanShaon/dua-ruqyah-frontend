import React, { useEffect, useRef } from "react";
import ItemCard from "./ItemCard";

const DisplayItems = ({ duas, navigate }) => {
  const itemRefs = useRef([]);

  // Scroll to the item when navigate changes
  useEffect(() => {
    if (navigate >= 0 && navigate < itemRefs.current.length) {
      itemRefs.current[navigate].scrollIntoView({
        behavior: "smooth",
        block: "start", // You can change it to "center" or "end" depending on the scroll behavior you want
      });
    }
  }, [navigate]);

  return (
    <>
      {duas?.map((item, index) => (
        <div
          key={index}
          ref={(el) => (itemRefs.current[index] = el)} // Store ref for each item
        >
          <ItemCard item={item} />
        </div>
      ))}
    </>
  );
};

export default DisplayItems;
