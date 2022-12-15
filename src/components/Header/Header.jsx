import "./Header.css";

export default function Header() {
  return (
      <div className="header">
        <video autoPlay muted loop>
          <source src="https://i.imgur.com/I98jpEy.mp4" type="video/mp4" />
        </video>
        <div className="overlay">
          <h1>Petit Trésor</h1>
        </div>
        <div className="company-mission">
          <h1>Modern Jewlery For The Modern Woman</h1>
        </div>
      </div>
  );
}
