import { Hero } from "../components/Hero";
import { Cards } from "../components/Cards";
import { homeCardsData } from "../data/siteData";

export function Home() {
  return (
    <>
      <Hero />
      <Cards items={homeCardsData}/>
    </>
  );
}


