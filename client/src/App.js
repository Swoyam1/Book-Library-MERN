import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BookDetails from "./components/Book/BookDetails";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <BookDetails />
    </div>
  );
}

export default App;
