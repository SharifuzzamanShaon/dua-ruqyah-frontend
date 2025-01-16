import React from 'react'

const ItemCard = ({item}) => {
  return (
    <div className="w-full  mt-6">
      <div className="max-w-4xl mx-auto p-6 border border-gray-300 shadow-lg rounded-lg text-black">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-10 h-10 bg-green-500 flex items-center justify-center rounded-full">
            <i className="fas fa-quran text-black"></i>
          </div>
          <h1 className="text-lg font-bold text-green-600">
            {item.dua_name_en}
          </h1>
        </div>

        <p className="text-base mb-4">
          The Prophet (<span className="font-serif">ﷺ</span>) said, "There are two
          expressions which are very easy for the tongue to say, but they are
          very heavy in the balance and are very dear to The Beneficent
          (Allah). And those are -
        </p>

        <div className="text-center mb-6">
          <p className="text-2xl font-bold text-black">
            {item.dua_arabic}
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg italic font-semibold">
            Transliteration: SubhaanAllahi wa bihamdihi,
            Subhaanal-laahil-'Adheem
          </p>
        </div>

        <div className="mb-4">
          <p className="text-base">
            <span className="font-semibold">Translation:</span> {item.transliteration_en}
          </p>
        </div>

        <div>
          <p className="text-sm text-green-600 font-semibold">Reference:</p>
          <p className="text-sm">{item.refference_en}</p>
        </div>

        <div className="flex justify-start mt-6">
          <button className="w-10 h-10 bg-green-500 flex items-center justify-center rounded-full">
            <i className="fas fa-play text-white"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemCard