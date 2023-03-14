import Data_Table from "./Data_table";
import Tool from "../Tool/Tool";
function Supplies(){

    let el=[
        {type:'text',label:"ID",id:"id",required:"yes"},
        {type:'text',label:"Tên",id:"ten",required:"yes"},
        {type:'text',label:"Nguồn gốc",id:"nguongoc",required:"yes"},
        {type:'dropdown',label:"Đơn vị",id:"donvi",required:"yes"},
        {type:'dropdown',label:"Loại",id:"loai",required:"yes"},
        {type:'img',label:"Ảnh",id:"img",required:"yes"}
    ]

    let d_el_data=["a","b","c","d","e"]
    let T1='';
    for (let index = 0; index < el.length; index++) {
        let temp=''
        if(el[index].type=="text"){
            temp=`
            <div class="row m-1">
                <label class="text-start col-5" for=${el[index].id}>${el[index].label} </label>
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
                    <label class="text-start col-5" for=${el[index].id}>${el[index].label}</label>
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
            <div class="d-grid justify-content-start row w-75 m-1  form-group">
                ${T1}
            </div>
            <input type="submit" class="bt btn btn-submit text-white mb-2"></input>
    `
    let data=[]
    let m_data={};

    function ValidForm(e){
        let data=[]
        let label=[]
        let ID=[]
        let t_obj={};
        el.filter((k)=>{
            let t_id=k.id;
            ID.push(t_id);
            let t_label=k.label;
            let t_value=document.getElementById(t_id).value;
            label.push(t_label);
            t_obj[t_id]=t_value;
        })
        console.log(t_obj)
        if(window.localStorage.getItem("m_data")!== null)
            data=JSON.parse(window.localStorage.getItem("m_data")).data;
        data.push(t_obj);
        m_data.head=[label,ID];
        m_data.data=data;

        window.localStorage.setItem("m_data",JSON.stringify(m_data));

    }
    return(
        <div class="col-lg">
            <form onSubmit={ValidForm} id="form_data "method="POST" dangerouslySetInnerHTML={{__html: T}}>
            </form>
            {<Tool/>}
            {Data_Table(window.localStorage.getItem("m_data"))}
        </div>
    );

}
export  default Supplies;