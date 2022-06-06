// import React from "react";
// import React, { useState, useEffect } from 'react'
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
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default function CreateIncome() {
  
  const [incomeId, setIncomeId] = useState(null)
  const [incomeCategory, setIncomeCategory] = useState(null)
  const [description, setDescription] = useState(null)
  const [amount, setAmount] = useState(null)
  // const navigate = useNavigate();

  const createOneIncome = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('incomeId', incomeId)
    formData.append('incomeCategory', incomeCategory)
    formData.append('description', description)
    formData.append('amount', amount)



  const res1 = await API.post(`/income`, formData)
console.log(res1)
  // navigate("/")

 

}

  return (
    <>
      <PageTitle title="Register New Income" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
        <TextField
                id="incomeId"
                margin="normal"
                placeholder="Income ID"
                type="text"
                fullWidth
                value={incomeId} 
                onChange={(event)=>{
                  setIncomeId(event.target.value)
                }}/>

        <TextField
                id="incomeCategory"
                margin="normal"
                placeholder="Income Category"
                type="text"
                fullWidth
                value={incomeCategory} 
                onChange={(event)=>{
                  setIncomeCategory(event.target.value)
                }}/>

              
        <TextField
                id="description"
                margin="normal"
                placeholder="Description"
                type="text"
                fullWidth
                value={description} 
                onChange={(event)=>{
                  setDescription(event.target.value)
                }}/>

        <TextField
                id="amount"
                margin="normal"
                placeholder="Amount"
                type="text"
                fullWidth
                value={amount} 
                onChange={(event)=>{
                  setAmount(event.target.value)
                }}/> 

          <Select
           id="incomeCategory"
           margin="normal" 
          options={options} 
          
          />
          <br/>  

                  <Button
                   variant="contained"
                    color="primary"
                    size="large"
                    onClick={createOneIncome}
                  >
                    Submit
                  </Button>

        </Grid>
       
      </Grid>
    </>
  );
}
