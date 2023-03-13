import Menu from "./Menu/Menu";
import Top from "./Top/Top";
import Supplies from "./Supplies/Supplies";
import Staff from "./Staff/staff";
function Main( ){

    return(
        <div  class="container-xl">
            <div class="row">
                <Top/>
            </div>
            <div class="row">
                <Menu/>
                <div class="col">
                    <Supplies/>
                    <Staff/>
                </div>
            </div>
        </div>
    );
}

export default Main;