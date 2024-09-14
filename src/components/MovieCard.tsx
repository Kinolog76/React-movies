import { Link } from "react-router-dom";
import { MoviesData } from "@/types/moviesData";
import getImageLink from "@/utils/imageLinks.helpers";
import dateFormate from "@/utils/dateFormate.helpers";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function MovieCard({ id, title, release_date, vote_average, poster_path }: MoviesData) {
  const imageLink = getImageLink(poster_path);
  const date = dateFormate(release_date);
  const rating = vote_average.toFixed(1);
  const ratingColor = Number(rating) >= 7 ? "green" : Number(rating) >= 5 ? "orange" : "red";

  return (
    <Link className="movie-card flex flex-col relative" to={`/movie/${id}`}>
      <img className="md:h-72 lg:h-80 w-auto rounded-lg object-cover hover:scale-105 transition-all duration-300" src={imageLink} alt={title} decoding="async" />
      <div className="flex flex-col mt-3">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{date}</p>
      </div>
      <div className="md:w-11 md:h-11 h-9 w-9 p-0.5 bg-white rounded-full absolute bottom-12 left-1.5">
        <CircularProgressbar
          styles={{
            path: { stroke: ratingColor, strokeWidth: 12 },
            trail: { stroke: "#fff" },
            text: { fontWeight: "bold" },
            background: { fill: "#fff" },
          }}
          value={Number(rating) * 10}
          text={`${rating}`}
        />
      </div>
    </Link>
  );
}

export default MovieCard;
