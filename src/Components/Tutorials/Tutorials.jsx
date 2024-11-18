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
      <h1 className="text-3xl font-bold text-center my-6">
        Master Spanish Through These Videos
      </h1>

      {/* Video Section */}
      <div className="my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div key={index} className="aspect-w-16 aspect-h-9">
              <iframe
                src={video}
                title={`Spanish Learning Video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Button */}
      <div className="flex justify-center mt-8">
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
          onClick={() => navigate("/startlearning")}
        >
          Learn Vocabularies
        </button>
      </div>
    </div>
  );
};

export default Tutorials;


