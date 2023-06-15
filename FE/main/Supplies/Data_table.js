import "./data_table.scss"
import { MaterialReactTable } from 'material-react-table';
import { useEffect,useCallback, useState } from "react"
import Axios from "axios"
import { Delete, Edit } from '@mui/icons-material';
import {
    Box,
    IconButton,
    Tooltip,
  } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
Axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

function DATA_TABLE({title,head,label,data}){
   
    // set the initial state
    const [isLoading, setIsLoading] = useState(true);
    let [tableData, setTableData] = useState([]);
    useEffect( ()=>{
        setTableData(data);
        setIsLoading(false)
    },[data])

    let columns= []
    for (let index = 0; index < label.length; index++) {
        let t={}
        if(head[index]==="ID"){
            t = {
                header: head[index],
                accessorKey:label[index],
                enableEditing:false,
                size:50
            }
        }
        else
        if(head[index]==="Ảnh"){
            t = {
                header: head[index],
                accessorKey:label[index],
                enableEditing:false,
                size:50
            }
        }
        else{
            t={
                header: head[index],
                accessorKey:label[index],
                size:50
            }
        }
        columns.push(t);
    }


    
    const handleSaveRow = async ({ exitEditingMode, row, values }) => {
        //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
        tableData[row.index] = values;
        console.log(values._id)
        Axios({
            method: 'put',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            url: 'http://localhost:5000/update/list_mon/:_id',
            data: values
        });
        //send/receive api updates here
        setTableData([...tableData]);
        exitEditingMode(); //required to exit editing mode
    };

    

    const handleDeleteRow = useCallback(
    (row) => {
        if (
        window.confirm(`Are you sure you want to delete ${tableData[row.index].ten}`)
        ) {
            tableData.splice(row.index, 1);
            setTableData([...tableData]);
            return;
        }

        //send api delete request here, then refetch or update local table data for re-render
        
    },
    [tableData],
    );

    const handleDetail = useCallback(
    (row) => {
        console.log(tableData[row.index])

        //send api delete request here, then refetch or update local table data for re-render
        
    },
    [tableData],
    );
    
    
    
    return (
        <div className="row">
            <h1 className="text-center">{title}</h1>
            <MaterialReactTable
            
                columns={columns}
                data={tableData}
                editingMode="modal" //default
                enableEditing
                onEditingRowSave={handleSaveRow}
                enableStickyHeader
                muiTableBodyProps={{
                    sx: {
                      //stripe the rows, make odd rows a darker color
                        '& tr:nth-of-type(odd)': {
                            backgroundColor: '#f5f5f5',
                        },
                        '& td':{
                            padding:'0.5rem',
                            overflowX:'auto',
                            maxWidth:'160px !important'
                        },

                    },
                  }}
                muiTablePaperProps={{
                    elevation: 0, //change the mui box shadow
                    //customize paper styles
                    sx: {
                        borderRadius: '0',
                        border: '1px solid #e0e0e0',
                    },
                }}
                renderRowActions={({ row, table }) => (
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                      <Tooltip arrow placement="left" title="Edit">
                        <IconButton onClick={() => table.setEditingRow(row)}>
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip arrow placement="right" title="Delete">
                        <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                          <Delete />
                        </IconButton>
                      </Tooltip>
                      <Tooltip arrow placement="right" title="Delete">
                        <IconButton color="success" onClick={() =>handleDetail(row)}>
                          <VisibilityIcon/>
                        </IconButton>
                      </Tooltip>
                    </Box>
                  )}
                state={{ isLoading }}
                muiTableContainerProps={{ sx: { maxHeight: '500px' } }}
            />

        </div>
    )


}

export default DATA_TABLE;