// File: src/App.js
 import "./App.css";
 import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import LoginPage from "./pages/LoginPage";
 import RegisterPage from "./pages/RegisterPage";
 import HomePage from "./pages/HomePage";
 import Match from "./pages/Match";
 import CoursePage from "./pages/CoursePage";
 import Script from "./pages/Script";
 import Notes from "./pages/Notes";
 import Connected from "./pages/Connected";

 function App() {

   const router = createBrowserRouter([
    
     {
       path: "/login",
       element: <LoginPage />,
     },
     {
       path: "/",
       element: <LoginPage />,
     },
     {
       path: "/register",
       element: <RegisterPage />,
     },
     {
       path: "/Connected",
       element: <Connected />,
     },
     {
       path: "/HomePage",
       element: <HomePage />,
     },
     {
      path: "/Match",
      element: <Match />
     },
     {
      path: "/course/:courseName",
      element: <CoursePage />
     },
     {
      path: "/script/:courseName",
      element: <Script />
     },
     {
      path: "/notes/:courseName",
      element: <Notes />
     }


   ]);

   return <RouterProvider router={router} />;
 }

 export default App;