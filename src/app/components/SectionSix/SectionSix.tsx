"use client";
import { useState } from "react";
import { reviews } from "./reviewsData";
import { motion } from "framer-motion";

export default function SectionSix() {
  const [currentRiviewIndex, setCurrentReviewIndex] = useState(0);

  const handleNextReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevReview = () => {
    setCurrentReviewIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  //   data
  const currentReviewData = reviews[currentRiviewIndex];

  return (
    <section id="client-reviews">
      <div className="flex justify-center mt-8">
        <img src="/images/SectionFour/divider.png" alt="divider" />
      </div>

      <div className="flex justify-center text-4xl font-sendFlowers">
        <p>Client Reviews</p>
      </div>

      <div className="flex justify-center gap-5 mt-8">
        <img
          src={currentReviewData.imageLeft}
          alt="Image Description"
          className="rounded hidden lg:block w-1/4"
        ></img>

        <div className="w-4/5 lg:w-1/3 bg-customGray rounded p-10">
          <img src="/images/arrows/quote.svg" className="h-10 mb-3"></img>

          <p className="text-white font-ligt h-32 lg:h-24">
            {currentReviewData.text}
          </p>

          <div className="flex items-center mt-40 sm:mt-14">
            <img
              className="w-20 rounded-full h-18"
              src={currentReviewData.image}
            />
            <p className="text-white ml-3">{currentReviewData.name}</p>
          </div>

          <div className="flex mt-4 items-center">
            <svg width="70%" height="2" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="0"
                y1="1"
                x2="100%"
                y2="1"
                stroke="white"
                stroke-width="2"
              />
            </svg>

            {/* Left arrow */}
            <motion.img
              src="/images/arrows/left-arrow.svg"
              className="h-10 ml-5 cursor-pointer"
              onClick={handlePrevReview}
              whileHover={{ scale: 1.2, rotate: 0 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              alt="Previous Review"
            />

            {/* Right arrow */}
            <motion.img
              src="/images/arrows/right-arrow.svg"
              className="h-10 ml-3 cursor-pointer"
              onClick={handleNextReview}
              whileHover={{ scale: 1.2, rotate: 0 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300 }}
              alt="Next Review"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
