import { useState } from "react";

const AnimatedSlider = () => {
  const sliders = [
    {
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "House 1",
      des: "White and brown concrete building.",
    },
    {
      img: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "House 2",
      des: "Brown and white wooden house near green trees.",
    },
    {
      img: "https://images.unsplash.com/photo-1600585153490-76fb20a32601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "House 3",
      des: "Lighted house beside a tree.",
    },
    {
      img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "House 4",
      des: "Black and white concrete building.",
    },
  ];

  const [currentSlider, setCurrentSlider] = useState(0);

  const prevSlide = () => {
    setCurrentSlider((prev) => (prev === 0 ? sliders.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlider((prev) => (prev === sliders.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Main Banner */}
      <div
        className="w-full h-full bg-cover bg-center duration-500 transform"
        style={{
          backgroundImage: `url(${sliders[currentSlider].img})`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Text Content */}
        <div className="absolute bottom-8 left-8 text-white z-10">
          <h1 className="text-3xl font-bold">{sliders[currentSlider].title}</h1>
          <p className="text-lg mt-2">{sliders[currentSlider].des}</p>
        </div>

        {/* Navigation Arrows at Bottom */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
          <button
            onClick={prevSlide}
            className="bg-white/30 p-3 rounded-full hover:bg-white/50 transition ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="bg-white/30 p-3 rounded-full hover:bg-white/50 transition ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Thumbnails */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex gap-6 z-10">
          {sliders.map((slider, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlider(index)}
              className={`w-24 h-24 bg-cover bg-center rounded-lg cursor-pointer transition-transform ${
                currentSlider === index
                  ? "ring-4 ring-blue-500 transform scale-110"
                  : ""
              }`}
              style={{ backgroundImage: `url(${slider.img})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedSlider;
