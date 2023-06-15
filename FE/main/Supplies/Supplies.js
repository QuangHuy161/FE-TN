import DATA_TABLE from "./Data_table";
import React, { useState,useEffect } from 'react';
import Axios from "axios"


Axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';



function genID(str){
    let t='';
    const s = str.toLowerCase();
    for (var i =0; i < str.length; i ++){
        t+=s.charCodeAt(i);
    }
    return t;
}

function Supplies(){
    const [vatlieu,setVatlieu] = useState({
        ten:"A",
        donvi:"l(lit)",
        nhomvattu:"Nguyên Liệu",
        soluong:0,
        tien:0,
        img:''
    })
    
    const [list,setList] = useState({head:[],data:[]});
    
    const [DONVI,setDONVI]= useState([])
    const [NHOMVATTU,setNHOMVATTU]= useState([])

    let donvi_option='';
    let nhomvattu_option='';
    
    function convertToBase64(e){
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () =>{
            setVatlieu({...vatlieu,img:reader.result})
        }
        reader.onerror = error =>{
            console.log("Error",error);
        }
    }
    useEffect(() => {
        async function FetchData (){
            await Axios({
                        method: 'get',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        url: 'http://localhost:5000/donvi',
                    }).then(function (response) {
                        setDONVI(response.data)
                    });
    
            await Axios({
                        method: 'get',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        url: 'http://localhost:5000/nhomvattu',
                    }).then(function (response) {
                        setNHOMVATTU(response.data)
                    });

            await Axios({
                        method: 'get',
                        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                        url: 'http://localhost:5000/list_mon',
                    }).then(function (response) {
                        let head=Object.keys(response.data[0])
                        head.pop()
                        let data=response.data;
                        setList({head:head,data:data})
                    });
        }
        FetchData();
        return ;
    },[]);

    donvi_option = DONVI.map(item => <option key={item.ma} value={item.ten} >{item.ten}</option>);
    nhomvattu_option = NHOMVATTU.map(item => <option key={item.ma} value={item.ten} >{item.ten}</option>);

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/add_data', {
            _id: genID(vatlieu.ten),
            ten: vatlieu.ten,
            donvi: vatlieu.donvi,
            nhomvattu:vatlieu.nhomvattu,
            img: vatlieu.img,
            soluong: vatlieu.soluong,
            tien:(vatlieu.soluong === 0 ?  vatlieu.tien : vatlieu.tien*vatlieu.soluong)
        })
        alert(`Đã thêm vật tư ${vatlieu.ten}`)
    }
        
    return(
        <div className="col-lg">
            <form id="form_data" className="container" onSubmit={handleSubmit}>
                <div className="row m-1">
                    <label className="text-start col-5"> Tên *</label>
                    <input required className="col-7 border p-1 rounded-1" type="text"
                     onChange={(e) => {setVatlieu({...vatlieu,ten:e.target.value})}}
                    /> 
                </div>
                <div className="row m-1">
                    <label className="text-start col-5" >Đơn vị</label>
                    <select required className="col-7 border p-1 rounded-1" 
                    onChange={(e) => {setVatlieu({...vatlieu,donvi:e.target.value})}}
                    >
                        {donvi_option}
                    </select>
                </div>
                <div className="row m-1">
                    <label className="text-start col-5" > Nhóm vật tư</label>
                    <select required className="col-7 border p-1 rounded-1" 
                    onChange={(e) => {setVatlieu({...vatlieu,nhomvattu:e.target.value})}}>
                        {nhomvattu_option}
                    </select>
                </div>
                <div className="row m-1">
                    <label className="text-start col-5"> Số Lượng</label>
                    <input className="col-7 border p-1 rounded-1" type="number" min="0" step="any"
                    onChange={(e) => {setVatlieu({...vatlieu,soluong:e.target.value})}}/> 
                </div>
                <div className="row m-1">
                    <label className="text-start col-5"> Giá tiền (/1 đơn vị )</label>
                    <input className="col-7 border p-1 rounded-1" type="number" min="0" step="1000"
                    onChange={(e) => {setVatlieu({...vatlieu,tien:e.target.value})}}/> 
                </div>
                <div className="row m-1">
                    <input
                    onChange={convertToBase64}
                    type="file" className="form-control-file" accept="image/png, image/jpeg" />
                    <div
                        style={
                            {
                                width:'200px',
                                height: '200px'
                            }
                        }
                    >
                    {vatlieu.img === '' || vatlieu.img===null ? '': <img class="img-thumbnail" src={vatlieu.img} alt="" />}
                    </div>
                
                </div>
                <input type="submit" className="bt btn btn-submit text-white mb-2"></input>
            </form>
            {<DATA_TABLE
                title="Tổng hợp vật tư"
                head= {["ID", "Tên", "Đơn vị", "Loại Vật tư", "Ảnh", " Số Lượng", "Tiền"]}
                label= {list.head}
                data = {list.data}
            />}
        </div>
    );

}
export  default Supplies;