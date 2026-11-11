import "./css/style.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Cards } from "./components/Cards"
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Cards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
