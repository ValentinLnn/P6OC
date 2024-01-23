import { Navigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Carrousel from "../../components/Carrousel/Carrousel";
import Collapse from "../../components/Collapse/Collapse";
import HousingData from "../../datas/logements.json";
import Tags from "../../components/Tag/Tags";
import Host from "../../components/Host/Host";
import Rating from "../../components/Rating/Rating";
import "./Housing.scss";

const Housing = () => {
  const { id } = useParams();
  const displayHousing = HousingData.find((location) => location.id === id);
  const equipements = displayHousing?.equipments.map((equipement, i) => {
    return (
      <ul key={i}>
        <li>
          {equipement}
        </li>
      </ul>
    );
  });

  return (
    <div>
      <Header />
      <main className="housing-main">
        {displayHousing? (
        <div className="housing-container">
          <Carrousel slides={displayHousing.pictures} />
          <section className="housing-display">
          <div className="housing-infos">
            <h1 className="housing-title">{displayHousing.title}</h1>
            <p>{displayHousing.location}</p>
            <Tags tags={displayHousing.tags} />
          </div>
          <div className="housing-host-infos">
            <Host name={displayHousing.host.name} picture={displayHousing.host.picture}/>
            <Rating rating={displayHousing.rating} />
          </div>
          </section>
          <div className="collapse-content">
            <div className="collapse-description">
              <Collapse title="Description" content={displayHousing.description} />
            </div>
            <div className="collapse-equipements">
              <Collapse title="Équipements" content={equipements} />
            </div>
          </div>
        </div>
      ) : (
        <Navigate replace to="/404" />
      )
        }

      </main>
      <Footer />
    </div>
  );
};

export default Housing;