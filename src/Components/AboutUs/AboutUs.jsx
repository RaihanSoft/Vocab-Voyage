import { useEffect } from "react";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Aos from "aos";

const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, easing: "ease-in-out" });
  }, []);


  const projects = [
    {
      title: "Lingo Bingo",
      description: "Interactive vocabulary learning app with gamified lessons.",
      features: ["200+ Spanish words", "Gamified quizzes", "Progress tracking"],
      image: "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg"
    },
    {
      title: "Art Portfolio",
      description: "Showcase and manage artwork with CRUD functionality.",
      features: ["Authentication", "CRUD functionality", "Responsive design"],
      image: "https://source.unsplash.com/400x300/?art,portfolio"
    },
    {
      title: "Dream 11 Cricket Team",
      description: "Fantasy sports platform with real-time team updates.",
      features: ["Real-time data", "User-friendly team builder", "Interactive UI"],
      image: "https://source.unsplash.com/400x300/?sports,cricket"
    },
    {
      title: "Car Get",
      description: "Car rental and purchase platform.",
      features: ["Role-based dashboard", "Secure payment gateway", "Advanced filters"],
      image: "https://source.unsplash.com/400x300/?car,rent"
    },
    {
      title: "Fitness Tracker",
      description: "Track fitness goals and health insights.",
      features: ["Activity monitoring", "Health insights", "Custom fitness plans"],
      image: "https://source.unsplash.com/400x300/?fitness,health"
    },
    {
      title: "E-Shop",
      description: "E-commerce platform with product recommendations.",
      features: ["Product filtering", "Secure payments", "Wishlist and cart"],
      image: "https://source.unsplash.com/400x300/?shopping,ecommerce"
    },
    {
      title: "Event Planner",
      description: "Plan and manage events collaboratively.",
      features: ["Event scheduling", "Team collaboration", "Interactive dashboard"],
      image: "https://source.unsplash.com/400x300/?event,planning"
    },
    {
      title: "Movie Mania",
      description: "Platform for browsing and reviewing movies.",
      features: ["User reviews", "Trending movies", "Dynamic search"],
      image: "https://source.unsplash.com/400x300/?movies"
    },
    {
      title: "Travel Buddy",
      description: "Plan trips with real-time destination guides.",
      features: ["Booking management", "Travel guides", "User recommendations"],
      image: "https://source.unsplash.com/400x300/?travel,destination"
    },
    {
      title: "EduLearn Platform",
      description: "Online learning platform with certifications.",
      features: ["Video lectures", "Quizzes", "Certification"],
      image: "https://source.unsplash.com/400x300/?education,learning"
    },
    {
      title: "Foodie Delight",
      description: "Recipe-sharing platform with ratings.",
      features: ["User-submitted recipes", "Rating system", "Cooking tips"],
      image: "https://source.unsplash.com/400x300/?food,recipe"
    },
    {
      title: "Tech Savvy",
      description: "Tech blog with trending articles.",
      features: ["User blogs", "Social sharing", "Advanced search"],
      image: "https://source.unsplash.com/400x300/?technology,blog"
    },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black py-20 px-6 md:px-20 text-white">
      <div className="container mx-auto">
        {/* Header */}
        <div data-aos="fade-down" className="text-center mb-16">
          <h2 className="text-5xl font-extrabold animate__animated animate__fadeInDown">
            About Me
          </h2>
          <p className="text-lg mt-4 text-gray-400">
            Creative and dedicated web developer passionate about creating interactive, user-friendly applications.
          </p>
        </div>

        {/* About Me Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            data-aos="fade-right"
            className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:bg-gradient-to-bl"
          >
            <h3 className="text-3xl font-semibold text-purple-300">Who I Am</h3>
            <p className="mt-4 leading-relaxed text-gray-200">
              I specialize in building user-friendly, high-performance, and responsive web applications using modern technologies like React, Next.js, and Tailwind CSS. My projects reflect creativity, attention to detail, and a strong passion for solving user problems. Collaboration, adaptability, and continuous learning are core to my work philosophy.
            </p>
          </motion.div>

          <motion.div
            data-aos="fade-left"
            className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:bg-gradient-to-br"
          >
            <h3 className="text-3xl font-semibold text-blue-300">Skills</h3>
            <ul className="mt-4 grid grid-cols-2 gap-4 text-gray-200">
              <li>JavaScript (ES6+)</li>
              <li>React.js & Next.js</li>
              <li>Tailwind CSS & Bootstrap</li>
              <li>Node.js & Express.js</li>
              <li>MongoDB</li>
              <li>Firebase Authentication</li>
              <li>Performance Optimization</li>
              <li>Responsive Design</li>
            </ul>
          </motion.div>
        </div>

        {/* Projects Section */}
        <div data-aos="fade-up" className="mt-20">
          <h3 className="text-3xl font-semibold text-center">Projects</h3>
          <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl group transition-all"
              >
                {/* Left: Project Info */}
                <div className="w-full md:w-1/2 p-6">
                  <h4 className="text-2xl font-bold text-purple-400">
                    {project.title}
                  </h4>
                  <p className="mt-4 text-gray-300">{project.description}</p>
                </div>

                {/* Right: Project Image */}
                <div className="w-full md:w-1/2 relative overflow-hidden">
                  <div
                    className="transition-transform duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-x-5"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
