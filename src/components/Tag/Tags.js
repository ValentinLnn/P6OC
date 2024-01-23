import "./Tags.scss";
const Tags = ({ tags }) => {
  return (
    <div className="tag-container">
      {tags.map((tag, index) =>(
        <span key={index} className="tag-container_button">
          {tag}
          </span>
      ))}

    </div>
  );
};

export default Tags;