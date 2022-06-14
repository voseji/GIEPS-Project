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

import Swal from 'sweetalert2';

export default function CreateIncome() {

  // const [incomeId, setIncomeId] = useState("")
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [incomeCategories, setIncomeCategories] = useState([])
  const [incomeCategory, setIncomeCategory] = useState("");

  const createOneIncome = async (e) => {
    e.preventDefault();

    const formData = new FormData()
    const generatedNumber= Math.ceil(10 + Math.random() * 9999999999)

    formData.append('incomeId', generatedNumber)
    formData.append('incomeCategory', incomeCategory)
    formData.append('description', description)
    formData.append('amount', amount)



    const res1 = await API.post(`/income`, formData)
    console.log(res1)
    Swal.fire({
      title: 'Success',
      text: 'Thank you. This income has been successfully captured',
      icon: 'success',
      confirmButtonText: '<a  href="/#/app/tables/Income">Ok</a>',
    })
    }

  const fetchIncome = useCallback(async () => {
    await API.get(`/income_category`).then(({ data }) => {
      setIncomeCategories(data)
    })
  }, []);
  useEffect(() => {
    fetchIncome()
  }, [fetchIncome])

  return (
    <>
      <PageTitle title="Register New Income" />
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
            id="incomeCategory"
            variant="outlined"
            style={{margin: "10px 0"}}
            fullWidth
            value={incomeCategory}
            onChange={({target: {value: category}}) => {
              setIncomeCategory(category);
              console.log(category)
            }}

          >
            <MenuItem value={""}><em>Select Category</em></MenuItem>
            {incomeCategories.map(category => {
              return (<MenuItem value={category.incomeCategoryType} key={category.id}>
                {category.incomeCategoryType}
              </MenuItem>)
            })}
          </Select>

          <br />

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
