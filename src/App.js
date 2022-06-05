import Header from "./Components/Header";
import { Box } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import DisplayMovies from "./Components/DisplayMovies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayCharacters from "./Components/DisplayCharacters";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Box h="100vh" w="100%">
          <Header />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/Characters" element={<DisplayCharacters />}></Route>
          <Route path="/Movies" element={<DisplayMovies />}></Route>
        </Routes>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
