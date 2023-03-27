import Data_Table from "./Data_table";
import Tool from "../Tool/Tool";
import Nhaplieu from "../nhaplieu/nhaplieu";
function Supplies(){
    
    let data=[]
    let m_data={};

    function ValidForm(e){
        // let data=[]
        // let label=[]
        // let ID=[]
        // let t_obj={};
        // el.filter((k)=>{
        //     let t_id=k.id;
        //     ID.push(t_id);
        //     let t_label=k.label;
        //     let t_value=document.getElementById(t_id).value;
        //     label.push(t_label);
        //     t_obj[t_id]=t_value;
        // })
        // console.log(t_obj)
        // if(window.localStorage.getItem("m_data")!== null)
        //     data=JSON.parse(window.localStorage.getItem("m_data")).data;
        // data.push(t_obj);
        // m_data.head=[label,ID];
        // m_data.data=data;

        // window.localStorage.setItem("m_data",JSON.stringify(m_data));
    }

    return(
        <div class="col-lg">
            <form onSubmit={ValidForm} id="form_data "method="POST" >
                { Nhaplieu(
                    [
                        {type:'text',label:"ID",id:"id",required:""},
                        {type:'text',label:"Tên",id:"ten",required:"required"},
                        {type:'dropdown',label:"Đơn vị",id:"donvi",required:"required"},
                        {type:'dropdown',label:"Nhóm vât tư",id:"nhomvattu",required:""},
                        {type:'dropdown',label:"Loại",id:"loai",required:"required"},
                        {type:'img',label:"Ảnh",id:"img",required:""}
                    ]
                )}
            </form>
            {<Tool/>}
            {Data_Table(window.localStorage.getItem("m_data"))}
        </div>
    );

}
export  default Supplies;