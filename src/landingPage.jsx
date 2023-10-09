import MainLandingPage from "./Pages/mainLandingPage/mainLandingPage.jsx";
import About from "./components/about/about.jsx";
import ContenLayoutLandingPage from "./components/layout/contentLayoutLandingPage.jsx";

export default function LandingPage() {
  return (
    <ContenLayoutLandingPage>
      <MainLandingPage></MainLandingPage>
      <About></About>
    </ContenLayoutLandingPage>
  );
}
