import './style.css'

export const SideBar = () => {
    return (
        <div className="sidebar">
          <h2>D&D Tool</h2>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#characters">Characters</a></li>
            <li><a href="#scenario">Scenario</a></li>
            <li><a href="#battle">Battle Caluculater</a></li>
            <li><a href="#move">Move Caluculater</a></li>
          </ul>
        </div>
      );
}