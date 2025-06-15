import { Routes, Route } from "react-router-dom";
import { Box, useColorModeValue } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CreatePage from "./pages/CreatePage";
import { useProductStore } from "./store/product";

function App() {
  const { products } = useProductStore();
  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.900")}>
      {/* NavBar  */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </Box>
  );
}

export default App;
