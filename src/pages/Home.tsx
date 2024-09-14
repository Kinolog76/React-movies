import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { MoviesData } from "@/types/moviesData";
import { getPopularMovies } from "@/utils/http";
import { AxiosData } from "@/types/axios";
import MovieCard from "@/components/MovieCard";

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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {data &&
          data.results.map((item: MoviesData) => (
            <MovieCard key={item.id} {...item} />
          ))}
      </div>
    </>
  );
}

export default Home;
