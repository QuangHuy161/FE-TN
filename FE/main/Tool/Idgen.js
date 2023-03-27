function Idgen(array,s,len){
    if(len<5) return "Nhập độ dài đủ lớn";
    let obj=[]
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let t={}
        let  num=``
        for (let index = 0; index < len; index++) {
            let t= Math.floor(Math.random() * 10).toString()
            num+=t;
        }
        t.id= s+ num;
        t.ten=element;
        obj.push(t);
    }
   
   return obj;
}

export {Idgen};