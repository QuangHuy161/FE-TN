import Top from "./Top/Top";
import Supplies from "./Supplies/Supplies";
import Staff from "./Staff/staff";
import React, { useState } from "react"
function Main(props ){

    let [pageMode, setPageMode] = useState("vattu")


    if(pageMode==='vattu')
    return(
        <div  class="container-xl">
            <div class="row">
                <Top/>
            </div>
            <div class="row">
                <div id="menu" class="col col-sm-2 " >
                    <div class="row m-1">
                        <button  class=" bt btn btn-menu rounded-1" onClick={() => setPageMode("vattu")} >
                            <span class="nav-link"  >
                               Vật tư
                            </span>
                        </button>
                    </div>
                    <div class="row m-1">
                        <button  class=" bt btn btn-menu rounded-1">
                            <a href="/banhang" class="nav-link" >
                                Bán Hàng
                            </a>
                        </button>
                    </div>
                    <div class="row m-1">
                        <button  class=" bt btn btn-menu rounded-1" onClick={() => setPageMode("nhanvien")} >
                            <span class="nav-link"  >
                               Nhân Viên
                            </span>
                        </button>
                    </div>
                </div>
                <div class="col">
                    <Supplies/>
                </div>
            </div>
        </div>
    )
    else{
        if(pageMode==='nhanvien')
        return(
            <div  class="container-xl">
                <div class="row">
                    <Top/>
                </div>
                <div class="row">
                    <div id="menu" class="col col-sm-2 " >
                        <div class="row m-1">
                            <button class=" bt btn btn-menu rounded-1" onClick={() => setPageMode("vattu")}>
                                <span class="nav-link"   >
                                Vật tư
                                </span>
                            </button>
                        </div>
                        <div class="row m-1">
                            <button  class=" bt btn btn-menu rounded-1">
                                <a href="/banhang" class="nav-link" >
                                    Bán Hàng
                                </a>
                            </button>
                        </div>
                        <div class="row m-1">
                            <button class=" bt btn btn-menu rounded-1" onClick={() => setPageMode("nhanvien")} >
                                <span class="nav-link"  >
                                Nhân Viên
                                </span>
                            </button>
                        </div>
                    </div>
                    <div class="col">
                        <Staff/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;