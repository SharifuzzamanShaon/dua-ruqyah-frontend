import Image from "next/image";
import React, { useState, useRef } from "react";
import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";

const ItemCard = ({ item }) => {
  const [isPlaying, setIsPlaying] = useState(false); // State to track play/pause
  const audioRef = useRef(null); // Reference to the audio element

  const handleToggle = () => {
    if (isPlaying) {
      audioRef.current.pause(); // Pause the audio
    } else {
      audioRef.current.play(); // Play the audio
    }
    setIsPlaying(!isPlaying); // Toggle the play/pause state
  };

  return (
    <div className="w-full mt-6">
      <div className="max-w-4xl mx-auto p-6 border border-gray-300 shadow-lg rounded-lg text-black">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full">
            <Image
              src="/icons/duacard.svg"
              width={30}
              height={30}
              alt="dua"
            />
          </div>
          <h1 className="text-lg font-bold text-green-600">
            {item.dua_name_en}
          </h1>
        </div>

        <p className="text-base mb-4">
          {item.top_en}
        </p>

        <div className="text-center mb-6">
          <p className="text-2xl font-bold text-black">{item.dua_arabic}</p>
        </div>

        <div className="mb-4">
          <p className="text-lg italic font-semibold">
            Transliteration: SubhaanAllahi wa bihamdihi,
            Subhaanal-laahil-'Adheem
          </p>
        </div>

        <div className="mb-4">
          <p className="text-base">
            <span className="font-semibold">Translation:</span>{" "}
            {item.transliteration_en}
          </p>
        </div>

        <div>
          <p className="text-sm text-green-600 font-semibold">Reference:</p>
          <p className="text-sm">{item.refference_en}</p>
        </div>

        <div className="flex justify-start mt-6">
          <button
            className="w-10 h-10 bg-green-500 flex items-center justify-center rounded-full"
            onClick={handleToggle}
          >
            {isPlaying ? (
              <IoMdPause className="text-white" />
            ) : (
              <IoMdPlay className="text-white" />
            )}
          </button>
          {/* Audio element */}
          <audio ref={audioRef} src="http://www.ihadis.com/duaaudiofinal/29.mp3" />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
