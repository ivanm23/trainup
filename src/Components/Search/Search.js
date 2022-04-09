import "./Search.css";

export default function Search() {
  return (
    <div className="bckg-div">
      <h1 className="title-find-trainer">Pronadji trenera</h1>
      <ul className="search-list">
        <li className="search-items">
          <input className="search-box" placeholder="Lokacija"></input>
        </li>
        <li className="search-items">
          <input className="search-box" placeholder="Disciplina"></input>
        </li>
        <li className="search-items">
          <button className="search-button">Pretraži</button>
        </li>
      </ul>
    </div>
  );
}
