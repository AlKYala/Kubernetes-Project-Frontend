import { Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { ExampleModelControllerApi } from "../api";
import { useStore } from "../state/store";

export function EnterNewData() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const {items, fetchItems, addItem} = useStore();
    
    const api : ExampleModelControllerApi = new ExampleModelControllerApi();

    const [loading, setLoading] = useState('');

    //fetch('http://localhost:8080/api/example').then();

    async function sendData() {
        const payload = {id: '', name: name, email: email, phone: phone};

        addItem(payload);

        fetchItems();
    }

    return (
            <Grid
            alignItems={"center"}
            justifyContent={"center"}
            paddingRight={1}
            xs={12}
            >
                <TextField value={name} onChange={(event) => setName(event.target.value)} id="outlined-basic" label="name" variant="outlined" />
                <TextField value={email} onChange={(event) => setEmail(event.target.value)} id="filled-basic" label="email" variant="filled" />
                <TextField value={phone} onChange={(event) => setPhone(event.target.value)} id="standard-basic" label="phone" variant="standard" />
                <Button onClick={() => {sendData()}} variant="contained">Add Data</Button>
            </Grid> 
      );
}