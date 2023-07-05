import "./Order.scss"
import React, { useState,useEffect } from 'react';
import Axios from "axios"
function Order(){

    const [MENU,setMENU]= useState([])
    
    useEffect(() => {
        setTimeout(async () =>{
            let MN= await Axios({
                method: 'get',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: 'http://localhost:5000/menu',
            })
            setMENU(MN.data)
        },1000)
        return ;
    },[]);

    const addMon= (e) =>{
        e.preventDefault();
    }
    const addTopping= (e) =>{
        e.preventDefault();
    }

    function mon(item) {
        return item.nhomvattu ==="Món";
    }
    function topping(item) {
        return item.nhomvattu ==="Topping";
    }

    let tdata_mon;
    let tdata_topping;
    if(MENU[0]=== undefined) 
    tdata_mon=
        <>
        </>
    else{
        let m =MENU.filter(mon)
        let tp =MENU.filter(topping)
            tdata_mon = m.map( item =>
                        <div class="p-2 bd-highlight">
                            <img onClick={addMon} className="rounded mon" width={120} height={160} src={item['img']} alt="" />
                            <span>{item.ten}</span>
                        </div>
            )
            tdata_topping = tp.map( item =>
                        <div class="p-2 bd-highlight">
                            <img className="rounded mon" width={120} height={160} src={item['img']} alt="" />
                            <span>{addTopping}</span>
                        </div>
            )
    }


    return(
        <div id="order">
            <div className="row m-3 main_order">
                <div data-spy="scroll" className="col-sm-4 payment overflow-scroll m-2">
                    <div className="h3">Món</div>
                    <div className="">
                        món
                    </div>
                    <div className="h3 border-top border-3 mt-2">Topping</div>
                    <div className=" border-3">
                        topping
                    </div>
                </div>
                <div className="col-sm m-2 gx-0">
                    <div className="row">
                        <div className="col">
                            <span className=" text-dark h1">Menu</span>
                            <div data-spy="scroll" className="p-0 d-flex flex-row bd-highlight mb-3">
                                {tdata_mon}
                            </div>
                        </div>
                        <div className="col border-start">
                            <span className=" text-dark h1">Topping</span>
                            <div data-spy="scroll" className="p-0 d-flex flex-row bd-highlight mb-3">
                                {tdata_topping}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row order_info fixed-bottom border-top border-3 border-success p-3">
                <div className="col-sm text-start m-1">
                    <form className="container m-0 info_order" method="POST">
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="form_label" id="order_ten">Tên khách</span>
                            </div>
                            <input type="text" className=""  aria-describedby="order_ten"/>
                        </div>

                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="form_label" id="order_sdt">Số điện thoại</span>
                            </div>
                            <input type="text" className=""  aria-describedby="order_sdt"/>
                        </div>
                       
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="form_label">Tiền khách đưa</span>
                            </div>
                            <input type="text" className="" aria-label="Amount (to the nearest dollar)"/>
                            <div className="input-group-append">
                                <span className="input-group-text">.000 VND</span>
                            </div>
                        </div>
                       
                    </form>
                </div>
                <div className=" col-sm button_payment text-end">
                    <button className="bt btn rounded-1">Hoàn tất</button>
                </div>
            </div>
        </div>
    )
}

export default Order;