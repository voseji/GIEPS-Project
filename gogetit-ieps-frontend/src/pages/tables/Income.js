// import React from "react";
import React, { useState, useEffect } from 'react'
import { Grid, Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import API from '../../api';
// components
import PageTitle from "../../components/PageTitle/PageTitle";
// import Widget from "../../components/Widget";
// import Table from "../dashboard/components/Table/Table";

const columns = [
  { label: "Income ID", name: "incomeId" }, { label: "Income Category", name: "incomeCategory" },
  { label: "Description", name: "description" }, { label: "Amount", name: "amount" },
  ];

export default function Incomes() {
  

  

  const  [expenses, setExpenses] = useState([])

  useEffect(()=>{
      fetchExpenses()
  },[])
  const fetchExpenses = async () => {
    await API.get(`/income`).then(({data})=>{
      setExpenses(data)
        console.log(data);
    })
}



  
  

  return (
    <>
      <PageTitle title="All Incomes" />
      <Grid container spacing={4}>
      <Button
            variant="contained"
            color="primary"
            size="large"
            href="/#/app/tables/createIncome"
          >
            Add New Income
          </Button>
       <br/>
        <Grid item xs={12}>
 
          <MUIDataTable
            title="Income List"
            data={expenses}
            columns={columns}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
       
      </Grid>
    </>
  );
}
