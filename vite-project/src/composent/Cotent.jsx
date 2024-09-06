import CotentHeader from "./CotentHeader";
import "../styles/Cotent.css";
import Card from "./Card";
import Listepro from "./Listepro";
const Cotent = () =>{
    return(
        <div className="content">
            <CotentHeader />
            <Card />
            <Listepro />
        </div>
    )
}
export default Cotent