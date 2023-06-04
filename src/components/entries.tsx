import { useEffect, useState } from "react";
import { ExampleModel, ExampleModelControllerApi } from "../api";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box, CircularProgress, Grid } from "@mui/material";
import { useStore } from "zustand";


export function Entries() {

    const [loading, setLoading] = useState<boolean>(false);

    const {items, fetchItems, addItem} = useStore();


    const api : ExampleModelControllerApi = new ExampleModelControllerApi();

    useEffect(() => {
      setLoading(true);
        fetchEntries();
      setLoading(false);
    }, []);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'name',
          headerName: 'name',
          width: 150,
          editable: false,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 300,
          editable: false,
        },
        {
          field: 'phone',
          headerName: 'Phone',
          width: 300,
          editable: true,
        }
      ];

    async function fetchEntries(): Promise<void> {
        setLoading(true);

        //const result = await api.findAll();

        //console.log(result);

        setLoading(false);

    }

    return (
        <>
            <Box sx={{ height: 400, width: '100%' }}>
              {!loading && <DataGrid columns={columns} rows={items} />}
              {loading && <CircularProgress />}
            </Box>
        </>
    )
}