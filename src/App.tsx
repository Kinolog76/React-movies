import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  const apiUrl = import.meta.env.VITE_API_KEY;
  const apiKey = import.meta.env.VITE_ACCESS_TOKEN;

  console.log(`API URL: ${apiUrl}`);
  console.log(`API Key: ${apiKey}`);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
