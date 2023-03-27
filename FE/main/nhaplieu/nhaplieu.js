function Nhaplieu(el){  
    let d_el_data=["a","b","c","d","e"]
    let T1='';
    for (let index = 0; index < el.length; index++) {
        let temp=''
        if(el[index].type=="text"){
            temp=`
            <div class="row m-1">
                <label class="text-start col-5" for=${el[index].id}>${el[index].label} </label>
                <input class="col-7" type="text" id=${el[index].id} ${el[index].required}> 
            </div>
            `
        }

        if(el[index].type=="dropdown"){
            let d_el='';
            for(let index=0; index <d_el_data.length; index++){
                d_el+= ` <option value=${d_el_data[index]} ${el[index].required}>${d_el_data[index]}</option>`
            }
            temp=`
                <div class="row m-1">
                    <label class="text-start col-5" for=${el[index].id}>${el[index].label}</label>
                    <select  ${el[index].required} class="col-7" id=${el[index].id}>
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
    
    return(
        <div>
            <form id="form_data "method="POST" dangerouslySetInnerHTML={{__html: T}}>
            </form>
        </div>
    )

}

export default Nhaplieu;