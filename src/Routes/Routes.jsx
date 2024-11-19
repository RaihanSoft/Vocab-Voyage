import Home from '../Components/Home/Home';
import { createBrowserRouter } from "react-router-dom";
import MainLayout from '../Components/MainLayout/MainLayout';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import StartLearning from '../Components/StartLearning/StartLearning';
import Tutorials from '../Components/Tutorials/Tutorials';
import AboutUs from '../Components/AboutUs/AboutUs';
import Profile from '../Components/Profile/Profile';
import Lesson from '../Components/Lessons/Lessons';
import ForgotPassword from '../Components/ForgotPassword/ForgotPassword';
import UpdateProfile from '../Components/UpdateProfile/UpdateProfile ';
import ErrorPage from '../Components/Error/ErrorPage';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: '/startLearning',
                element: <StartLearning />
            },
            {
                path: '/tutorials',
                element: <PrivateRoute> <Tutorials /> </PrivateRoute>
            },
            {
                path: '/aboutUs',
                element: <AboutUs />
            },
            {
                path: '/myProfile',
                element: <PrivateRoute> <Profile />  </PrivateRoute>
            },
            {
                path: "/update-profile",
                element: <UpdateProfile />

            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: "/forgot-password",
                element: <ForgotPassword />

            },

            {
                path: '/register',
                element: <Register />
            },
            {
                path: "/lessons/:lesson_no",  // Dynamic route for lessons
                element: <PrivateRoute> <Lesson /> </PrivateRoute>,  // Protected route for lessons
                loader: async ({ params }) => {
                    // Fetch the vocabulary data for the lesson
                    const response = await fetch('/spanish_vocabulary.json');
                    const data = await response.json();

                    // Filter the data based on the lesson number
                    const lessonVocabularies = data.filter(vocab => vocab.lesson_no === parseInt(params.lesson_no));

                    return { lessonVocabularies };  // Pass vocabularies to the Lesson component
                },
            },
        ]

    },
    {
        path: "*",
        element: <ErrorPage />

    },
]);
