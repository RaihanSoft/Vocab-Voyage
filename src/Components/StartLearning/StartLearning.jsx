import { useNavigate } from "react-router-dom";

const LetsLearnPage = () => {
  const navigate = useNavigate();
  const lessons = Array.from({ length: 10 }, (_, index) => ({
    lessonNo: index + 1,
  }));

  return (
    <div className="container mx-auto px-4">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center my-4">
        Let’s Learn Spanish Vocabulary
      </h1>

      {/* Lessons Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {lessons.map((lesson) => (
          <div
            key={lesson.lessonNo}
            className="border p-4 text-center rounded-md shadow hover:bg-blue-100 cursor-pointer"
            onClick={() => navigate(`/lessons/${lesson.lessonNo}`)} // Update to navigate to /lessons/:lesson_no
          >
            Lesson-{lesson.lessonNo}
          </div>
        ))}
      </div>

      {/* Tutorial Section */}
      <div className="my-8">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Learn the Spanish Alphabet
        </h2>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/example-video-id" // Replace with your actual video link
            title="Learn Spanish Alphabet"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-6">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate("/tutorials")}
        >
          View More Tutorials
        </button>
      </div>
    </div>
  );
};

export default LetsLearnPage;
