import { useState } from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";

const Lesson = () => {
  const { lesson_no } = useParams();  // Get the lesson number from the URL
  const { lessonVocabularies } = useLoaderData();  // Get the filtered vocabularies passed from loader
  const [modalData, setModalData] = useState(null); // State for the modal data

  // Function to open the modal with the relevant vocabulary details
  const openModal = (vocab) => {
    setModalData(vocab);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lesson {lesson_no}</h1>

      {/* Display vocabularies for the lesson */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessonVocabularies.length === 0 ? (
          <p>No vocabularies found for this lesson.</p>
        ) : (
          lessonVocabularies.map((vocab) => (
            <div
              key={vocab.id}
              className={`p-4 border rounded-lg ${
                vocab.difficulty === "easy"
                  ? "bg-green-200"
                  : vocab.difficulty === "medium"
                  ? "bg-orange-200"
                  : "bg-red-200"
              }`}
            >
              <h3 className="font-semibold">{vocab.word}</h3>
              <p><strong>Meaning:</strong> {vocab.meaning}</p>
              <p><strong>Pronunciation:</strong> {vocab.pronunciation}</p>
              <p><strong>Part of Speech:</strong> {vocab.part_of_speech}</p>

              <button
                onClick={() => openModal(vocab)}
                className="mt-2 p-2 bg-blue-500 text-white rounded-md"
              >
                When to Say
              </button>
            </div>
          ))
        )}
      </div>

      {/* Modal for "When to Say" */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-10">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="font-semibold text-lg">{modalData.word}</h3>
            <p><strong>Meaning:</strong> {modalData.meaning}</p>
            <p><strong>When to Say:</strong> {modalData.when_to_say}</p>
            <p><strong>Example:</strong> {modalData.example}</p>
            <button
              onClick={closeModal}
              className="mt-4 p-2 bg-red-500 text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* "Back to Lesson" button */}
      <Link to="/startLearning">
        <button className="mt-4 p-2 bg-gray-500 text-white rounded-md">
          Back to Lesson
        </button>
      </Link>
    </div>
  );
};

export default Lesson;
