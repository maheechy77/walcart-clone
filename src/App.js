import "./App.css";
import PopulerProducts from "./Section/Category/PopulerProducts";
import Header from "./Section/Header/Header";
import Hero from "./Section/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PopulerProducts />
    </div>
  );
}

export default App;
