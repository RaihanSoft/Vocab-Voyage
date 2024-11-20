import { useNavigate } from "react-router-dom";

const Tutorials = () => {
  const navigate = useNavigate();

  const videos = [
    "https://www.youtube.com/embed/example1", // Replace with actual video links
    "https://www.youtube.com/embed/example2",
    "https://www.youtube.com/embed/example3",
    "https://www.youtube.com/embed/example4",
    "https://www.youtube.com/embed/example5",
    "https://www.youtube.com/embed/example6",
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-center my-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate__animated animate__fadeIn animate__duration-500">
        Master Spanish Through These Videos
      </h1>

      {/* Video Section */}
      <div className="my-12 animate__animated animate__fadeInUp animate__duration-500">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={index}
              className="aspect-w-16 aspect-h-9 rounded-lg shadow-2xl transform transition-all hover:scale-105 hover:shadow-3xl animate__animated animate__fadeIn animate__duration-500"
            >
              <iframe
                src={video}
                title={`Spanish Learning Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-80 md:h-[400px] lg:h-[450px] rounded-lg"
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Button */}
      <div className="flex justify-center mt-12 animate__animated animate__fadeIn animate__duration-500">
        <button
          className="bg-gradient-to-r from-teal-400 via-green-500 to-blue-600 text-white text-xl font-semibold py-3 px-8 rounded-lg shadow-xl transform hover:scale-110 transition-all duration-300 ease-in-out"
          onClick={() => navigate("/startlearning")}
        >
          Learn Vocabularies
        </button>
      </div>
    </div>
  );
};

export default Tutorials;
