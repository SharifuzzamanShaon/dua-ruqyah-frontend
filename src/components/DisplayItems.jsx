import React, { useEffect, useRef, useState } from "react";
import ItemCard from "./ItemCard";

const DisplayItems = ({ duas, navigate }) => {
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const itemRefs = useRef([]);

  // Simulate loading behavior (remove if unnecessary in your actual setup)
  useEffect(() => {
    if (duas?.length) {
      setIsLoading(false); // Set loading to false once data is available
    }
  }, [duas]);

  // Scroll to the item when navigate changes
  useEffect(() => {
    if (navigate >= 0 && navigate < itemRefs.current.length) {
      itemRefs.current[navigate].scrollIntoView({
        behavior: "smooth",
        block: "start", // Adjust as needed
      });
    }
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="spinner-container">
        {/* Replace with your preferred spinner */}
        <div className="spinner"></div>
        <p className="text-black">Loading...</p>
      </div>
    );
  }

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
