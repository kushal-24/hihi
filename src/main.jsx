import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Home.jsx";
import Letter from "./Letter.jsx";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Rily from "./Rily.jsx";
import HeartCatcherGame from "./HeartCatcherGame.jsx";
import MusicToggle from "./MusicToggle.jsx";
import LocalVideoPlayer from "./LocalVideoPLayer.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DreamyFutureRoadmap from "./DreamyFutureRoadmap.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/secret",
    element: <DreamyFutureRoadmap />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Home/> */}
    {/* <Letter/> */}
    {/* <Rily/> */}
    {/* <HeartCatcherGame/> */}
    {/* <MusicToggle/> */}
    {/* <LocalVideoPlayer/> */}
    
    <RouterProvider router={router} />
    {/* <DreamyFutureRoadmap/> */}
  </StrictMode>
);
