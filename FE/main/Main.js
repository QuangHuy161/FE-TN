import Top from "./Top/Top";
import Supplies from "./Supplies/Supplies";
import Staff from "./Staff/staff";
import React, { useState } from "react"
function Main(props ){

    let [pageMode, setPageMode] = useState("vattu")


    if(pageMode==='vattu')
    return(
        <div  className="container-xl">
            <div className="row">
                <Top/>
            </div>
            <div className="row">
                <div id="menu" className="col col-sm-2 " >
                    <div className="row m-1">
                        <button  className=" bt btn btn-menu rounded-1" onClick={() => setPageMode("vattu")} >
                            <span className="nav-link"  >
                               Vật tư
                            </span>
                        </button>
                    </div>
                    <div className="row m-1">
                        <button  className=" bt btn btn-menu rounded-1">
                            <a href="/banhang" className="nav-link" >
                                Bán Hàng
                            </a>
                        </button>
                    </div>
                    <div className="row m-1">
                        <button  className=" bt btn btn-menu rounded-1" onClick={() => setPageMode("nhanvien")} >
                            <span className="nav-link"  >
                               Nhân Viên
                            </span>
                        </button>
                    </div>
                </div>
                <div className="col">
                    <Supplies/>
                </div>
            </div>
        </div>
    )
    else{
        if(pageMode==='nhanvien')
        return(
            <div  className="container-xl">
                <div className="row">
                    <Top/>
                </div>
                <div className="row">
                    <div id="menu" className="col col-sm-2 " >
                        <div className="row m-1">
                            <button className=" bt btn btn-menu rounded-1" onClick={() => setPageMode("vattu")}>
                                <span className="nav-link"   >
                                Vật tư
                                </span>
                            </button>
                        </div>
                        <div className="row m-1">
                            <button  className=" bt btn btn-menu rounded-1">
                                <a href="/banhang" className="nav-link" >
                                    Bán Hàng
                                </a>
                            </button>
                        </div>
                        <div className="row m-1">
                            <button className=" bt btn btn-menu rounded-1" onClick={() => setPageMode("nhanvien")} >
                                <span className="nav-link"  >
                                Nhân Viên
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <Staff/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;