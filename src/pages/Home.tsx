import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { MoviesData } from "@/utils/models/moviesData";
import { getPopularMovies } from "@/utils/http";
import { AxiosData } from "@/utils/models/axios";
import getImageLink from "@/utils/helpers/imageLinks.helpers";
import dateFormate from "@/utils/helpers/dateFormate.helpers";

function Home() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery<AxiosData>({
    queryKey: ["popularMovies", page],
    queryFn: () => getPopularMovies(page.toString()),
  });

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <h1>Home</h1>
      <div className="flex justify-center items-center text-white">
        <button onClick={handlePrevPage} disabled={page === 1}>
          Prev
        </button>
        <button onClick={handleNextPage}>Next</button>
      </div>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error: {error instanceof Error ? error.message : "Unknown error"}</div>}
      {data &&
        data.results.map((item: MoviesData) => (
          <div key={item.id} className="flex flex-col justify-center items-center text-white">
            <h3 className="text-xl font-bold">{item.original_title}</h3>
            <time dateTime={item.release_date}>{dateFormate(item.release_date)}</time>
            <img
              decoding="async"
              src={getImageLink(item.backdrop_path)}
              alt={item.title}
              title={item.original_title}
            />
          </div>
        ))}
    </>
  );
}

export default Home;
