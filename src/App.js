import logo from "./trainup-logo-plavi-p.png";
import "./App.css";

function App() {
  return (
    <div class="App-header">
      <nav class="Navbar">
        <ul>
          <i>
            <img src={logo} class="App-logo" alt="logo" />
          </i>
          <li>
            <a href="default.asp">Treneri</a>
          </li>
          <li>
            <a href="news.asp">Blog</a>
          </li>
          <li>
            <a href="contact.asp">O nama</a>
          </li>
          <li>
            <a href="about.asp">Postani trener</a>
          </li>
          <li>
            <a href="about.asp">Prijavi se</a>
          </li>
        </ul>
      </nav>
      <div class="Search-div">
        <h1 class="Search-h1">Pronadji trenera</h1>
      </div>
    </div>
  );
}

export default App;
