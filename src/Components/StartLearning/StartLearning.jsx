// import { useNavigate } from "react-router-dom";

// const LetsLearnPage = () => {

//   const navigate = useNavigate();
//   const lessons = Array.from({ length: 10 }, (_, index) => ({
//     lessonNo: index + 1,
//   }));

//   return (
//     <div className="container mx-auto px-4">
//       {/* Page Title */}
//       <h1 className="text-3xl font-bold text-center my-4">
//         Let’s Learn Spanish Vocabulary
//       </h1>

//       {/* Lessons Section */}
//       <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
//         {lessons.map((lesson) => (
//           <div
//             key={lesson.lessonNo}
//             className="border p-4 text-center rounded-md shadow hover:bg-blue-100 cursor-pointer"
//             onClick={() => navigate(`/lessons/${lesson.lessonNo}`)} // Update to navigate to /lessons/:lesson_no
//           >
//             Lesson-{lesson.lessonNo}
//           </div>
//         ))}
//       </div>

//       {/* Tutorial Section */}
//       <div className="my-8">
//         <h2 className="text-2xl font-semibold text-center mb-4">
//           Learn the Spanish Alphabet
//         </h2>
//         <div className="flex justify-center">
//           <iframe
//             width="560"
//             height="315"
//             src="https://www.youtube.com/embed/example-video-id" // Replace with your actual video link
//             title="Learn Spanish Alphabet"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>

//       {/* View More Button */}
//       <div className="flex justify-center mt-6">
//         <button
//           className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
//           onClick={() => navigate("/tutorials")}
//         >
//           View More Tutorials
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LetsLearnPage;



import { useNavigate } from "react-router-dom";
import 'animate.css'; // Import animate.css

const LetsLearnPage = () => {
  const navigate = useNavigate();
  const lessons = Array.from({ length: 10 }, (_, index) => ({
    lessonNo: index + 1,
  }));

  return (
    <div className="container mx-auto px-4 bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900 min-h-screen">
      {/* Page Title */}
      <h1 className="text-5xl font-extrabold text-center my-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate__animated animate__fadeIn animate__faster">
        Let’s Learn Spanish Vocabulary
      </h1>

      {/* Lessons Section */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.lessonNo}
            className="border-2 border-transparent p-6 text-center rounded-xl shadow-2xl bg-gradient-to-r from-indigo-600 to-purple-800 transform transition-all duration-200 ease-in-out hover:scale-110 hover:shadow-xl hover:bg-gradient-to-l from-blue-600 to-indigo-900 cursor-pointer animate__animated animate__zoomIn animate__fast"
            onClick={() => navigate(`/lessons/${lesson.lessonNo}`)} // Navigate to lesson page
          >
            <h2 className="text-2xl font-semibold text-white uppercase tracking-wider">
              Lesson {lesson.lessonNo}
            </h2>
          </div>
        ))}
      </div>

      {/* Tutorial Section */}
      <div className="my-16 animate__animated animate__fadeIn animate__faster">
        <h2 className="text-3xl font-semibold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 animate__animated animate__fadeIn animate__delay-0.2s animate__faster">
          Learn the Spanish Alphabet
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex justify-center mb-8">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/example-video-id-1" // Replace with actual video link
              title="Learn Spanish Alphabet"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-3xl shadow-3xl hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
            ></iframe>
          </div>

          <div className="flex justify-center mb-8">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/example-video-id-2" // Replace with actual video link
              title="Learn Numbers in Spanish"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-3xl shadow-3xl hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
            ></iframe>
          </div>

          <div className="flex justify-center mb-8">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/example-video-id-3" // Replace with actual video link
              title="Spanish Greetings and Phrases"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-3xl shadow-3xl hover:shadow-2xl transform transition-all duration-300 ease-in-out hover:scale-105"
            ></iframe>
          </div>
        </div>
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10 animate__animated animate__fadeIn animate__delay-0s animate__faster">
        <button
          className="bg-gradient-to-r from-teal-400 via-green-500 to-blue-600 text-white px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transform transition-all duration-200 ease-in-out text-lg font-semibold animate__animated animate__fadeIn animate__fast"
          onClick={() => navigate("/tutorials")}
        >
          View More Tutorials
        </button>
      </div>

    </div>
  );
};

export default LetsLearnPage;
