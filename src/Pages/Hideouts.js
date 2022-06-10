import EvolutionMachine from "../Component/EvolutionMachine/EvolutionMachine";
import Footer from "../Component/Footer/Footer";
import FreeHideOut from "../Component/FreeHideOut/FreeHideOut";
import Header from "../Component/Header/Header";

const Hideouts = () => {
    return (
        <div>
    <Header></Header>
    <EvolutionMachine></EvolutionMachine> 
     <FreeHideOut></FreeHideOut>
    <Footer></Footer>  
        </div>
    );
};

export default Hideouts;