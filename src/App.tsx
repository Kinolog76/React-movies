import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MoviesPage from "./pages/MoviesPage";
import TvSeriesPage from "./pages/TvSeriesPage";
import Movies from "./pages/Movies";
import TvSeries from "./pages/TvSeries";

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:id" element={<Movies />} />
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
