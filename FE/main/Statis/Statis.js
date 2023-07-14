import Axios from "axios"
import React, { useState } from "react"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
function Static(){
    const [pageStat,setPageStat] = useState('doanhso');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [data,setData] =useState([])

    let top_link=(
        <div className="row">
            <div class="pe rounded p-2 m-1 col-sm bg-success text-white"
            onClick={() => setPageStat('doanhso')}
            >
                Đơn và doanh số
            </div>
            <div class="pe rounded p-2 m-1 col-sm bg-success text-white"
            onClick={ () => setPageStat('bieudo')}
            >
                Biểu đồ
            </div>
            <div class="pe rounded p-2 m-1 col-sm bg-success text-white"
            onClick={() => setPageStat('')}
            >
                .
            </div>
        </div> 
    )

    const handleFilter = (e)=>{
        e.preventDefault();
        let month_start = startDate.getUTCMonth() + 1
        let day_start = startDate.getUTCDate() + 1
        let year_start = startDate.getUTCFullYear()
        let Date_start = year_start + "-" + month_start + "-" + day_start

        let month_end = endDate.getUTCMonth() + 1
        let day_end = endDate.getUTCDate() + 1
        let year_end = endDate.getUTCFullYear()
        let Date_end = year_end + "-" + month_end + "-" + day_end


        if(endDate<startDate)
        alert("Vui lòng chọn đúng mốc thời gian bắt đầu và kết thúc")
        else{
            Axios({
                method: 'GET',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                url: `http://localhost:5000/filter_order/${Date_start}_${Date_end}`,
            }).then((response) => 
                setData(response.data)
                
            )   
        }
        
    }
    
    if(pageStat==="doanhso")
    return(
        <div className="Stat">
            {top_link}
            <h1>Doanh số</h1>
            <div class="input-group mb-3">
                <label className="m-1"> Từ ngày </label>
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd/MM/yyyy"
                    
                />
                <label className="m-1"> đến trước ngày </label>
                <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd/MM/yyyy"
                    
                />
                <button className="ms-1 bg-success text-white border-0 pe"
                onClick={handleFilter}
                >
                    Kết quả
                </button>
            </div>
        </div>
    )
    else
    if(pageStat==="bieudo")
    return(
        <div className="Stat">
            {top_link}
            <h1>Biểu đồ</h1>
        </div>
    )
    else
    if(pageStat==="")
    return(
        <div className="Stat">
            {top_link}
            <h1>.</h1>
        </div>
    )
}

export default Static;