import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StoryBook from "./pages/StoryBook";
import ChapterOne from "./pages/ChapterOne";
import ChapterTwo from "./pages/ChapterTwo";
import ChapterThree from "./pages/ChapterThree";
import ChapterFour from "./pages/ChapterFour";
import ChapterFive from "./pages/ChapterFive";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/stories", element: <StoryBook /> },
  { path: "/chapter1", element: <ChapterOne /> },
  { path: "/chapter2", element: <ChapterTwo /> },
  { path: "/chapter3", element: <ChapterThree /> },
  { path: "/chapter4", element: <ChapterFour /> },
  { path: "/chapter5", element: <ChapterFive /> },

]);

export default router;
