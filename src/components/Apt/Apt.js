import React from "react";
import { Link } from "react-router-dom";
import logement from "../../datas/logements.json";
import Thumb from "../Thumb/Thumb";
import "./Apt.scss";


const Apt = () => {
    return (
        <div className="Apt_home">
            {logement.map((logement) => {
                 return (
                    <article key={logement.id}>
                    <Link to={`/logement/${logement.id}`}>
                    <Thumb image={logement.cover} title={logement.title} />
                    </Link>
                    </article>
                   );
            })}
        </div>
    );
};

export default Apt;