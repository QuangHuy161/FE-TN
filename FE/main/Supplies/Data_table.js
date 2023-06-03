import "./data_table.scss"
import DataTable from "react-data-table-component"


function DATA_TABLE({label,data}){

    // set the initial state
    let columns=[]
    for (let index = 0; index < label.length; index++) {

        let t={
            name: label[index],
            selector:row=> (
                <div data-tag="allowRowEvents">
                    <div aria-hidden="true" >
                        {row[label[index]]}
                    </div>
                </div>
            ),
            sortable:true,
            
        }
        columns.push(t);
    }

    const meta_data =data;
    const onRowClicked = (row, event) => {  };

    return (
        <DataTable
            title="Tổng hợp nguyên liệu"
            columns={columns}
            dense
            onRowClicked={onRowClicked}
            data={meta_data}
            selectableRows
            striped
            pagination
            responsive
        />
    )


}

export default DATA_TABLE;