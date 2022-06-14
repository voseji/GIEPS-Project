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
import Swal from 'sweetalert2';

export default function CreateExpense() {

  // const [transactionId, setExpenseId] = useState("")
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [expenseCategories, setExpenseCategories] = useState([])
  const [expenseCategory, setExpenseCategory] = useState("");

  const CreateOneExpense = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    const generatedNumber= Math.ceil(10 + Math.random() * 9999999999)

    formData.append('transactionId', generatedNumber)
    formData.append('expenseCategory', expenseCategory)
    formData.append('description', description)
    formData.append('amount', amount)



    const res1 = await API.post(`/expenses`, formData)
    console.log(res1)
    Swal.fire({
      title: 'Success',
      text: 'Thank you. This expense has been successfully captured',
      icon: 'success',
      confirmButtonText: '<a  href="/#/app/tables/Expenses">Ok</a>',
     })
    
  }

  const fetchExpense = useCallback(async () => {
    await API.get(`/expense_category`).then(({ data }) => {
      setExpenseCategories(data)
    })
  }, []);
  useEffect(() => {
    fetchExpense()
  }, [fetchExpense])







  return (
    <>
      <PageTitle title="Register New Expense" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
      
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

          <TextField
            id="amount"
            placeholder="Amount"
            type="text"
            variant="outlined"
            style={{margin: "10px 0"}}
            fullWidth
            value={amount}
            onChange={(event) => {
              setAmount(event.target.value)
            }} />

          <Select
            id="expenseCategory"
            variant="outlined"
            style={{margin: "10px 0"}}
            fullWidth
            value={expenseCategory}
            onChange={({target: {value: category}}) => {
              setExpenseCategory(category);
              console.log(category)
            }}

          >
            <MenuItem value={""}><em>Select Category</em></MenuItem>
            {expenseCategories.map(category => {
              return (<MenuItem value={category.expenseCategoryType} key={category.id}>
                {category.expenseCategoryType}
              </MenuItem>)
            })}
          </Select>

          <br />

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={CreateOneExpense}
          >
            Submit
          </Button>

        </Grid>

      </Grid>
    </>
  );
}
