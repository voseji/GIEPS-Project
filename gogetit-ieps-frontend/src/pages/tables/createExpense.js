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



export default function CreateExpense() {
  
  const [transactionId, setTransactionId] = useState(null)
  const [expenseCategory, setExpenseCategory] = useState(null)
  const [description, setDescription] = useState(null)
  const [amount, setAmount] = useState(null)
  // const navigate = useNavigate();

  const createOneExpense = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('transactionId', transactionId)
    formData.append('expenseCategory', expenseCategory)
    formData.append('description', description)
    formData.append('amount', amount)



  const res1 = await API.post(`/expenses`, formData)
console.log(res1)
  // navigate("/")


}

  return (
    <>
      <PageTitle title="Create New Expense" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
        <TextField
                id="transactionId"
                margin="normal"
                placeholder="Transaction ID"
                type="text"
                fullWidth
                value={transactionId} 
                onChange={(event)=>{
                  setTransactionId(event.target.value)
                }}/>

        <TextField
                id="expenseCategory"
                margin="normal"
                placeholder="Expense Category"
                type="text"
                fullWidth
                value={expenseCategory} 
                onChange={(event)=>{
                  setExpenseCategory(event.target.value)
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

           

                  <Button
                   variant="contained"
                    color="primary"
                    size="large"
                    onClick={createOneExpense}
                  >
                    Submit
                  </Button>

        </Grid>
       
      </Grid>
    </>
  );
}
