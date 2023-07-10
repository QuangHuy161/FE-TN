import "./Order.scss"
import React, { useState,useEffect } from 'react';
import Axios from "axios"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
function Order(){

    const [ind,setInd] =useState();
    const [price,setPrice] =useState();
    const [order,setOrder] = useState([])
    const [MENU,setMENU]= useState([])
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setTimeout(async () =>{
            setIsLoading(true);
            try {
                let MN= await Axios({
                    method: 'get',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    url: 'http://localhost:5000/menu',
                })
                setMENU(MN.data)
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
            
        },1000)
        return ;
    },[]);

    function mon(item) {
        return item.nhomvattu ==="Món";
    }
    function topping(item) {
        return item.nhomvattu ==="Topping";
    }
    
    const addMon= (e) =>{
        e.preventDefault();
        
        let t={
            tenmon:"",
            topping:[],
            gia:0
        }
        t.tenmon= e.target.innerText
        t.gia=Number(e.target.nextSibling.innerHTML)
        order.push(t)
    }
    
    const addTopping= (e) =>{
        e.preventDefault();
        
        if(order.length=== 0) return;
        let top ={
            ten:"",
            gia:0
        }
        top.ten= e.target.innerText;
        top.gia= Number(e.target.nextSibling.innerHTML)

        order.at(ind).topping.push(top)
    }

    const choosedMon =(e) =>{
        e.preventDefault();
        console.log(ind)
        setInd(Number(e.target.attributes["data"].value))
    }
    
    const SumPrice = () =>{
        
        if(order.length===0 ) return <div className="price">0</div>;
        let sum = 0;
        const cal = ()=>{
            for (let index = 0; index < order.length; index++) {
                const element = order[index];
                for (let j = 0; j < element.topping.length; j++) {
                    const e = element.topping[j];
                    sum+=e.gia
                }
                sum+=element.gia
            }
            setPrice(sum)
            return <>{sum}</>;
        }
        return<div className="price">
            {cal()}
        </div>;
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
        tdata_mon = m.map( (item,i) =>
                    <div className="m-1 rounded bd-highlight poit align-items-center" 
                    onClick={addMon} 
                    key={i}
                    >
                        <img  className=""
                        src={item.img} alt="" />
                        <p data={i} className=" h4">{item.ten}</p>
                        <p className=" h3">{item.tien}</p>
                    </div>
        )
        tdata_topping = tp.map( item =>
                    <div className=" m-1 rounded bd-highlight poit align-items-center" 
                    onClick ={addTopping}
                    data={item.ten} 
                    >
                            <img  className="" 
                             src={item.img} alt="" />
                        <p className=" h4">{item.ten}</p>
                        <p className=" h3">{item.tien}</p>
                    </div>
        )
    }

    function LoadOrder(){
        
        if (order[0]===undefined|| order[0]===null)
        return (<></>)
        let key = Object.keys(order[0])
        let t = 
        order.map((item,index) =>
            <tr className=" h5" onClick={choosedMon}>
                    <td className="pe" data={index}> {item["tenmon"] }</td>
                    <td> {item["gia"] }</td>
            </tr>
        )
        
        return(
            <>
                <table className="table" 
                >
                    <tbody>
                        {t}
                    </tbody>
                </table>

                
            </>
        )
    }

    function checknumber(inputtxt)
    {
    var phoneno = /^\d{10}$/;
    if(inputtxt.match(phoneno)){
        return true;
    }
    else{
        alert("Vui lòng nhập lại số điện thoại khác")
        return false;
        }
    }

    const [order_info,setOrder_info]= useState({
        tenkhachhang:"",
        sdt:"",
        tiendua:0,
        gia:0,
        tienthoi:0,
        order:[],
        time:''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if(order.length===0) return;

        if(order_info.tiendua < price )
        {
            alert("Vui lòng nhập đúng số tiền khách đưa")
            return
        }
        if( ! checknumber(order_info.sdt))
        {
            alert("Vui lòng nhập số điện thoại khác")
            return
        }
        order_info.gia=price;
        order_info.tienthoi=order_info.tiendua-order_info.gia
        order_info.time=new Date();

        setOrder_info({...order_info,order:order})
        if(localStorage.getItem("orde(r_info")===undefined
            || localStorage.getItem("order_info")===null){
            localStorage.setItem("order_info",JSON.stringify(order_info));
        }
        else{
            let arr= [];
            let t = JSON.parse(localStorage.getItem("order_info"))
            if(t.length ===undefined){
                arr.push(JSON.parse(localStorage.getItem("order_info")))
                arr.push((order_info))
                localStorage.setItem("order_info",JSON.stringify(arr));
            }
            else{
                arr= JSON.parse(localStorage.getItem("order_info"))
                arr.push(order_info)
                localStorage.setItem("order_info",JSON.stringify(arr));
            }
        }
    }

    if (isLoading) {
        return (
        <div id="order">
            <div className="row m-3 main_order">
                <div data-spy="scroll" className="col-sm-3  overflow-scroll m-2">
                    <div className="h3">Order</div>
                    <p className="border-bottom">Danh sách món</p>
                    <LoadOrder/>
                    <h4 className=""> Tổng tiền : <SumPrice/> VND</h4>
                </div>
                <div className="col-sm m-2 gx-0">
                    <div className="row">
                        <div className="col col-sm-7">
                            <span className=" text-dark h1">Menu</span>
                            <div data-spy="scroll" 
                            className="par-poit align-items-stretch p-0 d-flex flex-wrap bd-highlight mb-3">
                                <LoadingSpinner/>
                            </div>
                        </div>
                        <div className="col col-sm-5 border-start">
                            <span className=" text-dark h1">Topping</span>
                            <div data-spy="scroll" 
                            className="par-poit align-items-stretch p-0 d-flex flex-wrap bd-highlight mb-3">
                                <LoadingSpinner/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row order_info fixed-bottom border-top border-3 border-success p-3">
                <div className="col-sm text-start m-1">
                    <form className="container m-0 info_order" >
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="form_label" id="order_ten">Tên khách</span>
                            </div>
                            <input type="text" className="" 
                            onChange={(e) =>setOrder_info({...order_info,tenkhachhang:e.target.value})}
                            aria-describedby="order_ten"/>
                        </div>

                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="form_label" id="order_sdt">Số điện thoại</span>
                            </div>
                            <input type="Number" className=""  
                            onChange={(e) =>{
                                    setOrder_info({...order_info,sdt:e.target.value});
                               
                            }}                            
                            aria-describedby="order_sdt"/>
                        </div>
                       
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="form_label">Tiền khách đưa</span>
                            </div>
                            <input type="Number" className="" 
                            onChange={(e) =>{
                                
                                    setOrder_info({...order_info,tiendua:e.target.value * 1000})
                            
                            }}
                            aria-label="Amount (to the nearest dollar)"/>
                            <div className="input-group-append">
                                <span className="input-group-text">.000 VND</span>
                            </div>
                        </div>
                       
                    </form>
                </div>
                <div className=" col-sm button_payment text-end">
                    <button onClick = {handleSubmit} className="bt btn rounded-1">Hoàn tất</button>
                </div>
            </div>
        </div>
        )
    }
    return(
        <div id="order">
            <div className="row m-3 main_order">
                <div data-spy="scroll" className="col-sm-3  overflow-scroll m-2">
                    <div className="h3">Order</div>
                    <p className="border-bottom">Danh sách món</p>
                    <LoadOrder/>
                    <h4 className=""> Tổng tiền : <SumPrice/> VND</h4>
                </div>
                <div className="col-sm m-2 gx-0">
                    <div className="row">
                        <div className="col col-sm-7">
                            <span className=" text-dark h1">Menu</span>
                            <div data-spy="scroll" 
                            className="par-poit align-items-stretch p-0 d-flex flex-wrap bd-highlight mb-3">
                                {tdata_mon}
                            </div>
                        </div>
                        <div className="col col-sm-5 border-start">
                            <span className=" text-dark h1">Topping</span>
                            <div data-spy="scroll" 
                            className="par-poit align-items-stretch p-0 d-flex flex-wrap bd-highlight mb-3">
                                {tdata_topping}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="row order_info fixed-bottom border-top border-3 border-success p-3">
                <div className="col-sm text-start m-1">
                    <form className="container m-0 info_order" >
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="form_label" id="order_ten">Tên khách</span>
                            </div>
                            <input type="text" className="" 
                            onChange={(e) =>setOrder_info({...order_info,tenkhachhang:e.target.value})}
                            aria-describedby="order_ten"/>
                        </div>

                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="form_label" id="order_sdt">Số điện thoại</span>
                            </div>
                            <input type="Number" className=""  
                            onChange={(e) =>{
                                    setOrder_info({...order_info,sdt:e.target.value});
                                
                            }}
                            aria-describedby="order_sdt"/>
                        </div>
                       
                        <div className="input-group mb-1">
                            <div className="input-group-prepend">
                                <span className="form_label">Tiền khách đưa</span>
                            </div>
                            <input type="Number" className="" 
                            onChange={(e) =>setOrder_info({...order_info,tiendua:e.target.value * 1000})}
                            aria-label="Amount (to the nearest dollar)"/>
                            <div className="input-group-append">
                                <span className="input-group-text">.000 VND</span>
                            </div>
                        </div>
                       
                    </form>
                </div>
                <div className=" col-sm button_payment text-end">
                    <button onClick = {handleSubmit} className="bt btn rounded-1">Hoàn tất</button>
                </div>
            </div>
        </div>
    )
}

export default Order;