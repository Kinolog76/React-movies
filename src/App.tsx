import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy } from "react";

import Layout from "@/layouts/Layout";
const Home = lazy(() => import("@/pages/Home"));
const MoviesPage = lazy(() => import("@/pages/MoviesPage"));
const TvSeriesPage = lazy(() => import("@/pages/TvSeriesPage"));
const Movie = lazy(() => import("@/pages/Movie"));
const TvSeries = lazy(() => import("@/pages/TvSeries"));

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movie/:id" element={<Movie />} />
            <Route path="tv-series" element={<TvSeriesPage />} />
            <Route path="tv-series/:id" element={<TvSeries />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
