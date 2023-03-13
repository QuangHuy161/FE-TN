import "./data_table.scss"
import DataTable from "react-data-table-component"


function Data_Table(obj){
    if(obj === null)
        return(
            <div></div>
        );

    let arr=JSON.parse(obj);
    const label=arr.head[0];
    const meta_data=arr.data;

    let columns=[]
    for (let index = 0; index < label.length; index++) {

        let t={
            name: label[index],
            selector:row=> row[arr.head[1][index]],
            sortable:true,
            conditionalCellStyles: [
                {
                    when: row => row[arr.head[1][index]],
                    style: {
                        width:"2px",
                    },
                },
            ]
        }
        console.log(meta_data[index])

        columns.push(t);
    }

    return (
        <DataTable
            columns={columns}
            data={meta_data}
            selectableRows
        />
    )


}

export default Data_Table;