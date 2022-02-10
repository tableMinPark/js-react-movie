import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Link를 사용하면 페이지 간 이동을 할 수있다 (새로고침없이)

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg}></img>
      <h2>
        <Link to="/movie">{title}</Link>    
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

Movie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
