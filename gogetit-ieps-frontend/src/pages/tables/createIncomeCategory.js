import { useCallback } from "react";
// import React, { useEffect } from 'react'
import React, { useState, useEffect } from "react";

// import MUIDataTable from "mui-datatables";
import API from '../../api';
// components
import PageTitle from "../../components/PageTitle/PageTitle";

import {
  Grid,
  // CircularProgress,
  // Typography,
  Button,
  // Tabs,
  // Tab,
  TextField,
  MenuItem,
  Select
  // Fade,
} from "@material-ui/core";

// import { useNavigate } from "react-router-dom";
// import Select from 'react-select';
// import { SelectFetch } from 'react-select-fetch';


export default function CreateIncomeCategory() {

  const [incomeCategoryType, setIncomeCategoryType] = useState("")
  const [description, setDescription] = useState("")
  // const [amount, setAmount] = useState("")
  // const [incomeCategories, setIncomeCategories] = useState([])
  // const [incomeCategory, setIncomeCategory] = useState("");

  const createOneIncomeCategory = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    
    formData.append('incomeCategoryType', incomeCategoryType)
    formData.append('description', description)
    



    const res1 = await API.post(`/income_category`, formData)

  }

  // const fetchIncome = useCallback(async () => {
  //   await API.get(`/income_category`).then(({ data }) => {
  //     setIncomeCategories(data)
  //   })
  // }, []);
  // useEffect(() => {
  //   fetchIncome()
  // }, [fetchIncome])

  return (
    <>
      <PageTitle title="Create New Income Category" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            id="incomeCategoryType" 
            placeholder="Income Category Type"
            type="text"
            variant="outlined"
            style={{margin: "10px 0"}}
            fullWidth
            value={incomeCategoryType}
            onChange={(event) => {
              setIncomeCategoryType(event.target.value)
            }} />




          <TextField
            id="description"
            placeholder="Description"
            type="text"
            variant="outlined"
            style={{margin: "10px 0"}}
            fullWidth
            value={description}
            onChange={(event) => {
              setDescription(event.target.value)
            }} />

          
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={createOneIncomeCategory}
          >
            Submit
          </Button>

        </Grid>

      </Grid>
    </>
  );
}
