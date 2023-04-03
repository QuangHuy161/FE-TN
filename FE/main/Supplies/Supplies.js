import Data_Table from "./Data_table";
import Tool from "../Tool/Tool";
import Nhaplieu from "../nhaplieu/nhaplieu";
import React, { useState } from 'react';
import Axios from "axios"
function Supplies(){
    const [ten,setTen] = useState("A")
    const [donvi,setDonvi] = useState("g")
    const [nhomvattu,setNhomvattu] = useState("a")
    const [loai,setLoai] = useState("vl")
    const [img,setImg] = useState("")
    
    const handleSubmit = (e) => {
          e.preventDefault();
    
          Axios.post('http://localhost:3000/add_data', {
            label: ten,
            donvi: donvi,
            nhomvattu:nhomvattu,
            loai: loai,
            img: img
          })
      }
        let DONVI = [];
    Axios.get('http://localhost:3000/donvi')
    .then( res => {
        console.log(res)
        DONVI=res
    })
    .catch((error) => {
        console.log(error)
    })

    let NHOMVATU = [];
    Axios.get('http://localhost:3000/nhomvattu')
    .then( res => {
        console.log(res)
        NHOMVATU=res
    })
    .catch((error) => {
        console.log(error)
    })
        
    return(
        <div class="col-lg">
            <form id="form_data" className="container" onSubmit={handleSubmit} method="POST" action="/add_data">
                <div class="row m-1">
                    <label class="text-start col-5"> Tên</label>
                    <input required class="col-7 border p-1 rounded-1" type="text" onChange={(e) => {setTen(e.target.value)}} /> 
                </div>
                <div class="row m-1">
                    <label class="text-start col-5" >Đơn vị</label>
                    <select  class="col-7 border p-1 rounded-1" onChange={(e) => {setDonvi(e.target.value)}} >
                        <option value="a" >a</option>
                        <option value="b" >a</option>
                        <option value="c" >c</option>
                    </select>
                </div>
                <div class="row m-1">
                    <label class="text-start col-5" > Nhóm vật tư</label>
                    <select  class="col-7 border p-1 rounded-1" onChange={(e) => {setNhomvattu(e.target.value)}}>
                        <option value="a" >a</option>
                        <option value="b" >a</option>
                        <option value="c" >c</option>
                    </select>
                </div>
                <div class="row m-1">
                    <label class="text-start col-5" >Loại</label>
                    <select  class="col-7 border p-1 rounded-1" onChange={(e) => {setLoai(e.target.value)}}>
                        <option value="a" >a</option>
                        <option value="b" >a</option>
                        <option value="c" >c</option>
                    </select>
                </div>
                <div class="row m-1">
                    <input onChange={(e) => {setImg(e.target.value)}} type="file" class="form-control-file" accept="image/png, image/jpeg" />
                </div>
                <input type="submit" class="bt btn btn-submit text-white mb-2"></input>
            </form>
            {<Tool/>}
            {Data_Table(window.localStorage.getItem("m_data"))}
        </div>
    );

}
export  default Supplies;