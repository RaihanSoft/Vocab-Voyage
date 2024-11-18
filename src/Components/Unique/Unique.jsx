import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "animate.css"; // Import Animate.css for animations

const LanguageQuiz = () => {
  // Sample vocabulary data for the quiz
  const vocab = [
    { word: "Hola", meaning: "Hello", language: "Spanish" },
    { word: "Merci", meaning: "Thank you", language: "French" },
    { word: "Danke", meaning: "Thank you", language: "German" },
    { word: "Ciao", meaning: "Goodbye", language: "Italian" },
    { word: "Bonjour", meaning: "Good morning", language: "French" },
  ];

  const [currentQuestion, setCurrentQuestion] = useState({});
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init(); // Initialize AOS
    generateQuestion();
  }, []);

  // Function to generate a random question
  const generateQuestion = () => {
    const randomWord = vocab[Math.floor(Math.random() * vocab.length)];
    setCurrentQuestion(randomWord);

    // Generate options (correct answer + random incorrect answers)
    const correctAnswer = randomWord.meaning;
    const incorrectAnswers = vocab
      .filter((item) => item.meaning !== correctAnswer)
      .map((item) => item.meaning);

    // Shuffle and pick 3 random incorrect answers
    const options = [
      correctAnswer,
      ...incorrectAnswers.sort(() => Math.random() - 0.5).slice(0, 3),
    ];

    // Shuffle the options again so the correct answer is not always in the same position
    setOptions(options.sort(() => Math.random() - 0.5));
  };

  const handleAnswer = (selectedAnswer) => {
    if (answered) return; // Prevent multiple answers for the same question

    const isCorrect = selectedAnswer === currentQuestion.meaning;
    if (isCorrect) {
      setScore(score + 1);
      setMessage("Correct! Well done.");
    } else {
      setMessage(`Incorrect! The correct answer is "${currentQuestion.meaning}".`);
    }
    setAnswered(true);
  };

  const handleNextQuestion = () => {
    setAnswered(false);
    setMessage("");
    generateQuestion();
  };

  return (
    <section className="relative bg-gray-800 text-white py-10">
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold animate__animated animate__fadeIn">
          Language Quiz Challenge
        </h2>
        <p className="text-lg sm:text-xl mt-4 animate__animated animate__fadeInUp" data-aos="fade-up">
          Test your knowledge of vocabulary! Choose the correct meaning of the word.
        </p>
      </div>

      {/* Quiz Question */}
      <div className="max-w-xl mx-auto text-center mb-6">
        <p className="text-2xl animate__animated animate__fadeIn" data-aos="zoom-in">
          What does the word &quot;{currentQuestion.word}&quot; mean?
        </p>
      </div>

      {/* Answer Options */}
      <div className="max-w-md mx-auto grid grid-cols-1 gap-4 mb-6">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg animate__animated animate__pulse animate__delay-1s"
            data-aos="fade-up"
          >
            {option}
          </button>
        ))}
      </div>

      {/* Feedback Message */}
      {answered && (
        <div className="text-center mb-6 animate__animated animate__zoomIn" data-aos="fade-down">
          <p className="text-lg font-semibold">{message}</p>
          <button
            onClick={handleNextQuestion}
            className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg animate__animated animate__pulse"
          >
            Next Question
          </button>
        </div>
      )}

      {/* Score Display */}
      <div className="text-center">
        <p className="text-xl font-semibold">Your Score: {score}</p>
      </div>
    </section>
  );
};

export default LanguageQuiz;
