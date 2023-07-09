
import './App.css';
import Navigation from "./components/Navigation";
import About from "./components/About";
import HorizontalScroll from "./components/HorizontalScroll";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
        <Navigation></Navigation>
        <About></About>
        <HorizontalScroll></HorizontalScroll>
        <Resume></Resume>
        <Services></Services>
        <Portfolio></Portfolio>
        <Contact></Contact>
    </div>
  );
}

export default App;
