import Top from "./Top/Top";
import Supplies from "./Supplies/Supplies";
import Staff from "./Staff/staff";
import React, { useState } from "react"
import Donvi from "./Supplies/Donvi";
import Dropdown from 'react-bootstrap/Dropdown';
import Nhomvattu from "./Supplies/Nhomvattu";
function Main(props ){

    let [pageMode, setPageMode] = useState("vattu")

    let t= (<div id="menu" className="col col-sm-2 " >
                <div className="row m-1">
                    <button  className=" bt btn btn-menu rounded-1" onClick={() => setPageMode("vattu")} >
                        <span className="nav-link"  >
                        Vật tư
                        </span>
                    </button>
                </div>
                <div className="row m-1">
                    <Dropdown className="bt btn btn-menu rounded-1">
                        <Dropdown.Toggle
                        className=" text-wrap"
                        style={{
                            background:'transparent',
                            border: 'none',
                            color:'black',
                            width: '100%',
                        }}>
                            <span>
                                Thêm đơn vị & Loại
                            </span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item
                            onClick={() => setPageMode("donvi")}
                            >
                                Đơn vị
                            </Dropdown.Item>
                            
                            <Dropdown.Item
                            onClick={() => setPageMode("nhomvattu")}
                            >
                                Nhóm vật tư
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
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
        )
    if(pageMode==='vattu')
    return(
        <div  className="container-xl">
            <div className="row">
                <Top/>
            </div>
            <div className="row">
                {t}
                <div className="col">
                    <Supplies/>
                </div>
            </div>
        </div>
    )

    if(pageMode==='nhanvien')
        return(
            <div  className="container-xl">
                <div className="row">
                    <Top/>
                </div>
                <div className="row">
                    {t}
                    <div className="col">
                        <Staff/>
                    </div>
                </div>
            </div>
        )
    
    if(pageMode==='donvi')
    return(
        <div  className="container-xl">
            <div className="row">
                <Top/>
            </div>
            <div className="row">
                {t}
                <div className="col">
                    <Donvi/>
                </div>
            </div>
        </div>
    )

    if(pageMode==='nhomvattu')
    return(
        <div  className="container-xl">
            <div className="row">
                <Top/>
            </div>
            <div className="row">
                {t}
                <div className="col">
                    <Nhomvattu/>
                </div>
            </div>
        </div>
    )
}

export default Main;