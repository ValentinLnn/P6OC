import logo from "../../assets/logo.svg"
import Nav from "../Nav/Nav"
import "./Header.scss"

function Header() {
  return (
    <header className='header'>
        <figure className="header_img">
          <img src={logo} alt="kasa, location d'appartements" />
        </figure>
        <Nav />
    </header>
  )
}

export default Header