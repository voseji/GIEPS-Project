// import { useCallback } from "react";
// import React, { useEffect } from 'react'
import React, { useState } from "react";

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

  // Fade,
} from "@material-ui/core";

// import { useNavigate } from "react-router-dom";
// import Select from 'react-select';
// import { SelectFetch } from 'react-select-fetch';


export default function CreateExpenseCategory() {

  const [expenseCategoryType, setExpenseCategoryType] = useState("")
  const [description, setDescription] = useState("")
  // const [amount, setAmount] = useState("")
  // const [incomeCategories, setIncomeCategories] = useState([])
  // const [incomeCategory, setIncomeCategory] = useState("");

  const createOneExpenseCategory = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    
    formData.append('expenseCategoryType', expenseCategoryType)
    formData.append('description', description)
    



    const res1 = await API.post(`/expense_category`, formData)
    console.log(res1)
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
      <PageTitle title="Create New Expense Category" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            id="expenseCategoryType" 
            placeholder="Expense Category Type"
            type="text"
            variant="outlined"
            style={{margin: "10px 0"}}
            fullWidth
            value={expenseCategoryType}
            onChange={(event) => {
              setExpenseCategoryType(event.target.value)
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
            onClick={createOneExpenseCategory}
          >
            Submit
          </Button>

        </Grid>

      </Grid>
    </>
  );
}
