import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ArtTherapyWorkshop from "./pages/ArtTherapyWorkshop";
import StartupMeetup from "./pages/StartupMeetup";
import TechCareerFair from "./pages/TechCareerFair";
import FinanceBootcamp from "./pages/FinanceBootcamp";
import HealthSummit from "./pages/HealthSummit";
import PhotographyWalk from "./pages/PhotographyWalk";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/startupmeetup",
    element: <StartupMeetup />,
  },
  {
    path: "/ArtTherapyWorkshop",
    element: <ArtTherapyWorkshop />,
  },
  {
    path: "/techcareerFair",
    element: <TechCareerFair />,
  },
  {
    path: "/financebootcamp",
    element: <FinanceBootcamp />,
  },
  {
    path: "/healthsummit",
    element: <HealthSummit />,
  },
  {
    path: "/photographyWalk",
    element: <PhotographyWalk />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
