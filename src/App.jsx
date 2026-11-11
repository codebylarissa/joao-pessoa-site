import "./css/style.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Cards } from "./components/Cards"

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Cards />
      </main>
      
    </div>
  );
}

export default App;
