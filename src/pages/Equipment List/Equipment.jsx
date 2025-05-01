import React, { useState } from "react";
import { useEffect } from "react";
import { Box, Grid } from "@mui/material";
import EquipmentListingTable from "./Components/EquipmentListingTable";
import { apiRequest } from "../../services/ApiCalls";

const Equipment = () => {

    const sampleData = [
        { tag: "91-PR01-01", type: "Laptop", name: "Lenovo ThinkPad X1", price: 1500, inUse: true, warrantyLeft: 2 },
        { tag: "91-PR01-02", type: "Monitor", name: "Dell UltraSharp 27", price: 500, inUse: false, warrantyLeft: 3 },
        { tag: "91-PR01-03", type: "Mouse", name: "Logitech MX Master 3", price: 100, inUse: true, warrantyLeft: 1 },
        { tag: "91-PR01-04", type: "Keyboard", name: "Keychron K6", price: 80, inUse: false, warrantyLeft: 2 },
        { tag: "91-PR01-05", type: "Headphones", name: "Sony WH-1000XM4", price: 300, inUse: true, warrantyLeft: 2 },
        { tag: "MT-PR01-04", type: "Keyboard", name: "Keychron K6", price: 80, inUse: false, warrantyLeft: 2 },
        { tag: "91-PR01-05", type: "Headphones", name: "Sony WH-1000XM4", price: 300, inUse: true, warrantyLeft: 2 },
        { tag: "MT-PR01-04", type: "Keyboard", name: "Keychron K6", price: 80, inUse: false, warrantyLeft: 2 },
        { tag: "91-PR01-05", type: "Headphones", name: "Sony WH-1000XM4", price: 300, inUse: true, warrantyLeft: 2 }
      ];

      const [equipments, setEquipments] = useState([])

      useEffect(() => {
        const token = localStorage.getItem('accessToken')

        const fetchEquipments = async () => {
            const data = await apiRequest({endpoint: '/equipments', token: token })
            setEquipments(data)

        }

        if(token) {
            fetchEquipments()
        }
      }, []);

    return (
        <Box p={2}>
            <Grid container direction='column'>
                <Grid item xs={12}>
                    <EquipmentListingTable equipmentData={equipments} />
                </Grid>
                <Grid item xs={12}>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Equipment;