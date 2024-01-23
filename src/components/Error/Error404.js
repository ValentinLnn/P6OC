import { NavLink } from "react-router-dom";
import "./Error404.scss";
function Error404() {
    return(
        <div className="error_container">
            <p className="error_container_404">404</p>
            <p className="error_container_text">Oups! La page que vous demandez n'existe pas.</p>
            <NavLink to="/" className="error_container_home">
                Retourner sur la page d'accueil
            </NavLink>
        </div>
    )
}
export default Error404