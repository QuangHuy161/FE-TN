

function Supplies(){
    let el=[
        {type:'text',label:"Tên",id:"ten"},
        {type:'dropdown',label:"Đơn vị",id:"donvi"},
        {type:'dropdown',label:"Loại",id:"loai"},
        {type:'img',label:"Chọn ảnh",id:"anh"}
    ]

    let d_el_data=["a","b","c","d"]
    let T1='',T2="",T3="";
    for (let index = 0; index < el.length; index++) {
        let temp=''
        if(el[index].type=="text"){
            temp=`
            <div class="form-group row mb-2">
                <label class="col-4"for=${el[index].id}>${el[index].label} </label>
                <input  class ="col-8"type="text" class="form-control" id=${el[index].id}/> 
            </div>
            
            `
        }

        if(el[index].type=="dropdown"){
            let d_el='';
            for(let index=0; index <d_el_data.length; index++){
                d_el+= ` <option value="1">${d_el_data[index]}</option>`
            }
            temp=`
                <div class="input-group mb-2">
                    <div class="input-group-prepend">
                        <label class="input-group-text" for=${el[index].id}>${el[index].label}</label>
                    </div>
                    <select class="custom-select" id=${el[index].id}>
                        ${d_el}
                    </select>
                </div> 
             `
        }

        if(el[index].type=="img"){
            temp=`
            <div class="input-group mb-2">
                <div class="custom-file">
                    <input  id=${el[index].id} type="file" class="form-control-file" accept="image/png, image/jpeg" />
                </div>
            </div>
            `
        }
        if(index % 3 ==0){
            T1+=temp;
        }
        else
        if(index % 3 ==1){
            T2+=temp;
        }
        else{
            T3+= temp;
        }
    }
    let T =`
        <form>
            <div class="row m-1  form-group">
                <div class="col col-6">${T1}</div>
                <div class="col col-3">${T2}</div>
                <div class="col col-3">${T3}</div>
            </div>
            <button type="submit" class="btn btn-submit mb-2">ADD</button>
        </form>
    `

    return(
        <div dangerouslySetInnerHTML={{__html: T}}>
            
        </div>
    );

}
export  default Supplies;