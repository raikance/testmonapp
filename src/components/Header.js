import LOGOCOZED from '../Assets/STICKERS COZED-01.png';
import { NavLink } from 'react-router-dom';
const Header = () => {
  return(
    <header className="App-header">

    
        <nav className="navbar navbar-expand-lg navbar-light macouleurntm">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/"><img src={LOGOCOZED} className="App-logo" alt="logo" width="50" /></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Gallery">Gallery</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      </header>

)
}
export default Header
