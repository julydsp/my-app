import "./landingPage.css";
import image from "../../img/hero-img.png.png";

export default function MainLandingPage() {
  return (
    <>
      <div id="container-menu">
        <div className="menu-1">
          <div className="hero">
            <h1>Better Solutions For Your Business</h1>
            <p>
              We are team of talented designers making websites with Bootstrap
            </p>
          </div>
          <div className="pop">
            <div className="pip">
              <a href="/getStarted">Get Started</a>
            </div>
            <div className="pup">
              <a href="/watchVidio">Wacth Video</a>
            </div>
          </div>
        </div>

        <div className="menu-2">
          <div className="foto">
            <img src={image} alt="" />
          </div>
        </div>
      </div>

      <div className="footer-main">
        <h2>Join Our Newsletter</h2>
        <p>
          Tamen quem nulla quae legam multos aute sint culpa legam noster magna
        </p>
        <form>
          <div className="rekrut">
            <input type="text" />
            <input type="submit" style={{ color: "#ffffff" }} />
          </div>
        </form>
      </div>
    </>
  );
}
