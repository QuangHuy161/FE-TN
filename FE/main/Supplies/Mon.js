import React, { useState,useEffect } from 'react';
import Axios from "axios"
import LIST_MON from "./List_mon";


function Mon(){
    const [nguyenlieu,setNguyenlieu]=useState(
        {
            ten:'Nguyên liệu',
            donvi:'Kilogram',
            dinhluong:0,
        }
    )
    const [mon,setMon] = useState({
        tenmon:"",
        header:[],
        nguyenlieu:[]
    })
    const [MON,setMON]= useState([])
    const [NGUYENLIEU,setNGUYENLIEU]= useState([])

    useEffect(() => {
        setTimeout(async () =>{
            let L_M= await Axios({
                method: 'get',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: 'http://localhost:5000/list_mon',
            })

            let m = [];
            let nl = [];
            L_M.data.map((items) =>{
                if( items.nhomvattu ==="Món" )
                m.push(items)
                else
                if(items.nhomvattu ==="Nguyên liệu tổng hợp")
                {
                    m.push(items)
                    nl.push(items)
                }
                else{
                    nl.push(items)
                }
                
            })
            setMON(m);
            setMon({...mon, tenmon : m[0].ten})
            setNGUYENLIEU(nl); 
            //console.log(nl[0].ten)
            setNguyenlieu({...nguyenlieu, ten:nl[0].ten}); 
        },1000)
        
        return ;
    },[]);

    
    
    let mon_option= MON
    .map(item => 
            <option key={item._id} value={item.ten} >{item.ten}</option>
        )

    let nguyenlieu_option= NGUYENLIEU
    .map( item => 
        <option key={item._id} data={item.donvi} value={item.ten} >{item.ten} ( {item.donvi})</option>
        )

    const handleAdd = (e )=>{
        e.preventDefault();
        console.log(mon)
        mon.nguyenlieu.push(nguyenlieu)
        mon.header = Object.keys(mon.nguyenlieu[0])
        setMon({...mon})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/themmon', {
            tenmon:mon.tenmon,
            nguyenlieu:mon.nguyenlieu
        })
        alert(`đã thêm món ${mon.tenmon}`)
    }

    function ShowTable(){
        let title=mon.tenmon
        let head=["Tên","Đơn vị","Định lượng"]
        let data=mon.nguyenlieu


        let thead = head.map( item =>
            <th scope="col" key={item}>{item}</th>
        )
        let tdata;
        if(title==='' || title === undefined) return(<div></div>)
        if(data[0]=== undefined) 
        tdata=
            <tr key="0">
            </tr>
        else{
            let key = Object.keys(data[0])
             tdata = data.map( item =>
                <tr >
                    {
                        key.map(i =>
                            <td key={i}>{item[i]}</td>
                        )
                    }
                </tr>
            )
        }
            
        return (
            <div>
                <h1 className="h1">{title}</h1>
                <table className="table">
                    <thead>
                        <tr>
                            {thead}
                        </tr>
                    </thead>
                    <tbody>
                        {tdata}
                    </tbody>
                </table>
            </div>
        )
    }

    return(
        <div> 
            <div className="col-lg">
            <form id="form_data " className="container row" 
            >
                <div className="col">
                
                    <div className="row m-1">
                        <label className="text-start col-5" >Tên món</label>
                        <select required className="col-7 border p-1 rounded-1" 
                        onChange={(e) => {
                            setMon({...mon,tenmon:e.target.value});
                        }}
                        >
                            {mon_option}
                        </select>
                    </div>
                </div>
                <div className="col">
                    <div className="row m-1">
                        <label className="text-start col-5" >Nguyên liệu</label>
                        <select required className="col-7 border p-1 rounded-1" 
                        onChange={ e => {
                            let t ={
                                ten:e.target.value,
                                donvi:e.target
                                .options[e.target.selectedIndex]
                                .attributes['data']
                                .value,
                                dinhluong:0,
                            }
                            setNguyenlieu(t)
                        }}
                        >
                            {nguyenlieu_option}
                        </select>
                    </div>
                    <div className="row m-1">
                        <label className="text-start col-5"> Định lượng nguyên liệu</label>
                        <input className="col-7 border p-1 rounded-1" type="number" min="0" step="any"
                        onChange={(e) => {
                            setNguyenlieu({...nguyenlieu,dinhluong:e.target.value})
                        }}
                        /> 
                    </div>
                </div>
                
                <button className="bt btn mb-3" onClick={handleAdd}
                > 
                    Thêm nguyên liệu 
                </button>
                <ShowTable
                   
                 />
                <input onClick={handleSubmit} className="btn btn-success mb-2" value='Hoàn tất'/>
            </form>
            
            </div>
            <LIST_MON/>           
        </div>
    )
}


export default Mon;