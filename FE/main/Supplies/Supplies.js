import { useState } from "react";

function Supplies(){
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    }


    let el=[
        {type:'text',label:"ID",id:"id",required:"yes"},
        {type:'text',label:"Tên",id:"ten",required:"yes"},
        {type:'text',label:"Nguồn gốc",id:"nguongoc",required:"yes"},
        {type:'dropdown',label:"Đơn vị",id:"donvi",required:"yes"},
        {type:'dropdown',label:"Loại",id:"loai",required:"yes"},
        {type:'img',label:"Chọn ảnh",id:"anh",required:"yes"}
    ]

    let d_el_data=["a","b","c","d"]
    let T1='';
    for (let index = 0; index < el.length; index++) {
        let temp=''
        if(el[index].type=="text"){
            temp=`
            <div class="row m-1">
                <label class="col-5" for=${el[index].id}>${el[index].label} </label>
                <input class="col-7" type="text" id=${el[index].id}> 
            </div>
            `
        }

        if(el[index].type=="dropdown"){
            let d_el='';
            for(let index=0; index <d_el_data.length; index++){
                d_el+= ` <option value=${d_el_data[index]}>${d_el_data[index]}</option>`
            }
            temp=`
                <div class="row m-1">
                    <label class="col-5" for=${el[index].id}>${el[index].label}</label>
                    <select class="col-7" id=${el[index].id}>
                        ${d_el}
                    </select>
                </div>
             `
        }

        if(el[index].type=="img"){
            temp=`
            <div class="row m-1">
                <input  id=${el[index].id} type="file" class="form-control-file" accept="image/png, image/jpeg" />
            </div>
            `
        }
        T1+=temp;
    }
    let T =`
            <div class="d-grid justify-content-start text-lg-start row w-75 m-1  form-group">
                ${T1}
            </div>
            <input type="submit" class="btn btn-submit text-white mb-2"></input>
    `
    function ValidForm(e){
        e.preventDefault();
        let arr=[];
        
        el.filter((k)=>{arr.push(document.getElementById(k.id).value)})
        
        console.log(arr)
        
    }

    return(
        <div>
            <form onSubmit={ValidForm} id="form_data "method="get" dangerouslySetInnerHTML={{__html: T}}>
            </form>
        </div>
    );

}
export  default Supplies;