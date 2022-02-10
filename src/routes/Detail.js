import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // URL 파라미터로 넘거준 data를 받을 수 있다.

function Detail() {
  const { id } = useParams(); // URL 파라미터로 넘어온 data를 저장 : {id: '[id의 값]'}
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState({});

  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();
    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading movie detail....</h1>
      ) : (
        <div>
          <img src={detail.large_cover_image}></img>
          <hr/>

          <h1>{detail.title_long}</h1>
          <h5>Rating : {detail.rating} / Runtime : {detail.runtime}m</h5>
          <ul>
            {detail.genres.map((g) => (
              <li key={g}><h5>{g}</h5></li>
            ))}
          </ul>
          <hr/>
          
          <h3>Description</h3>
          <p>{detail.description_full}</p>
        </div>
      )}
    </div>
  );
}
export default Detail;

