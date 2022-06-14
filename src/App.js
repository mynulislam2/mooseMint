// import AlfhaTimer from "./Component/AlfhaTimer/AlfhaTimer";
import AlphaIslandDropCard from "./Component/AlphaIslanDropCard/AlphaIslandDropCard";
import AlphaRoadMap from "./Component/AlphaRoadMap/AlphaRoadMap";
import Footer from './Component/Footer/Footer';
import HeroAlfha from "./Component/HeroAlfha/HeroAlfha";
import ProcedesTrade from "./Component/ProcedesTrade/ProcedesTrade";
import ProceedAlocation from "./Component/proceedAlocation/ProceedAlocation";
function App() {
  return (
    <div>
      <HeroAlfha></HeroAlfha>
      <AlphaIslandDropCard></AlphaIslandDropCard>
      {/* <AlfhaTimer></AlfhaTimer> */}
      <AlphaRoadMap></AlphaRoadMap>
      <ProcedesTrade></ProcedesTrade>
      <ProceedAlocation></ProceedAlocation>
      <Footer></Footer>
    </div>
  );
}

export default App;
