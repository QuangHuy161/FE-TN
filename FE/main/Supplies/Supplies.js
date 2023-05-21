import Data_Table from "./Data_table";
import Tool from "../Tool/Tool";
import React, { useState,useEffect } from 'react';
import Axios from "axios"


Axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

function removeAccents(str) {
    var AccentsMap = [
      "aàảãáạăằẳẵắặâầẩẫấậ",
      "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
      "dđ", "DĐ",
      "eèẻẽéẹêềểễếệ",
      "EÈẺẼÉẸÊỀỂỄẾỆ",
      "iìỉĩíị",
      "IÌỈĨÍỊ",
      "oòỏõóọôồổỗốộơờởỡớợ",
      "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
      "uùủũúụưừửữứự",
      "UÙỦŨÚỤƯỪỬỮỨỰ",
      "yỳỷỹýỵ",
      "YỲỶỸÝỴ"    
    ];
    for (var i=0; i<AccentsMap.length; i++) {
      var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
      var char = AccentsMap[i][0];
      str = str.replace(re, char);
    }
    return  str.toLowerCase();
  }

function Supplies(){
    const [ten,setTen] = useState("A")
    const [donvi,setDonvi] = useState("dvl")
    const [nhomvattu,setNhomvattu] = useState("nl")
    const [img,setImg] = useState("")
    const [giatri,setGiatri] = useState(0)
    const [tien,setGia] = useState(0)
    const [list,setList] = useState();
    
    const [DONVI,setDONVI]= useState([])
    const [NHOMVATTU,setNHOMVATTU]= useState([])

    let donvi_option='';
    let nhomvattu_option='';
    
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
                setList(response.data)
            });
    
        }
        FetchData();
        return ;
    },[]);
    for (let index = 0; index < DONVI.length; index++) {
        const t = ` <option value="${DONVI[index].ten}" >${DONVI[index].ten}</option>`;
        donvi_option+=t;
    }

    for (let index = 0; index < NHOMVATTU.length; index++) {
        const t = ` <option value="${NHOMVATTU[index].ten}" >${NHOMVATTU[index].ten}</option>`;
        nhomvattu_option+=t;
    }

    const handleSubmit = (e) => {
          e.preventDefault();
    
          Axios.post('http://localhost:5000/add_data', {
            _id: removeAccents(ten)+nhomvattu,
            ten: ten,
            donvi: donvi,
            nhomvattu:nhomvattu,
            img: img,
            giatri: giatri,
            gia:tien
          })
      }
    
    
        
    return(
        <div class="col-lg">
            <form id="form_data" className="container" onSubmit={handleSubmit}>
                <div class="row m-1">
                    <label class="text-start col-5"> Tên *</label>
                    <input required class="col-7 border p-1 rounded-1" type="text" onChange={(e) => {setTen(e.target.value)}} /> 
                </div>
                <div class="row m-1">
                    <label class="text-start col-5" >Đơn vị</label>
                    <select required dangerouslySetInnerHTML={{__html:donvi_option}} class="col-7 border p-1 rounded-1" onChange={(e) => {setDonvi(e.target.value)}} >
                    </select>
                </div>
                <div class="row m-1">
                    <label class="text-start col-5" > Nhóm vật tư</label>
                    <select required dangerouslySetInnerHTML={{__html:nhomvattu_option}} class="col-7 border p-1 rounded-1" onChange={(e) => {setNhomvattu(e.target.value)}}>
                    </select>
                </div>
                <div class="row m-1">
                    <label class="text-start col-5"> Giá trị</label>
                    <input class="col-7 border p-1 rounded-1" type="number" min="0" step="any"
                     onChange={(e) => {setGiatri(e.target.value)}} /> 
                </div>
                <div class="row m-1">
                    <label class="text-start col-5"> Giá tiền</label>
                    <input class="col-7 border p-1 rounded-1" type="number" min="0" step="1000"
                     onChange={(e) => {setGia(e.target.value)}} /> 
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