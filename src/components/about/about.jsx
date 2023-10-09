import "./about.css";

export default function About() {
  return (
    <div className="about">
      <div className="profil">
        <p>ARSHA</p>

        <div className="address">
          <p>
            A108 Adam Street New York, NY 535022 United States
            <br />
            <b>Phone:</b> + 1 5589 55488 55
            <br />
            <b>Email:</b> info@example.com
          </p>
        </div>
      </div>

      <div className="menu">
        <p>Useful Links</p>
        <div className="list-menu">
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/termOfService">Term Of Service</a>
            </li>
            <li>
              <a href="/privacyPolice">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="layanan">
        <p>Our Services</p>
        <div className="menu-layanan">
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>Product Management</li>
            <li>Marketing</li>
            <li>Graphic Design</li>
          </ul>
        </div>
      </div>
      <div className="jaringan">
        <div className="title">
          <p>Our Sosial Networks</p>
        </div>
        <div className="teks">
          <p>
            Cras fermentum odio eu feugiat lide par naso tierra videa
            magnaderita valies
          </p>
        </div>
        <div className="media">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
