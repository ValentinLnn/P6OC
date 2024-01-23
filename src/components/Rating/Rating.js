import EmptyStar from "../../assets/EmptyStar.png";
import FullStar from "../../assets/FullStar.png";
import "./Rating.scss";

function Rating ({ rating }) {
    const stars = [];

    for (let i = 1; i <= 5; i++){
        if (i <= rating){
            stars.push(<img className="stars" key={i} src={FullStar} alt="full-star" />);
        }else{
            stars.push(<img className="stars" key={i} src={EmptyStar} alt="empty-star" />);
        }
    }
    return <div className="rating">{stars}</div>
}
export default Rating;