// import React from "react";
import React, { useState, useEffect } from 'react'
import { Grid, Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import API from '../../api';
// components
import PageTitle from "../../components/PageTitle/PageTitle";
// import Naira from 'react-naira';
import moment from 'moment'
import { Link } from 'react-router-dom';


const columns = [
  {
    label: "Transaction Date", name: "created_at", options: {
      customBodyRender: (v) => {
        return <>{moment(v).format('YYYY-MM-DD')}</>
      }
    }
  },
  { label: "Transaction ID", name: "transactionId" },
  { label: "Expense Category", name: "expenseCategory" },
  { label: "Description", name: "description" },
  { label: "Amount", name: "amount", },
  { label: "Action", name:'action', options: {
    customBodyRender: () => {
      return <><Link to={`/students/print/`}>Print</Link></>
    }
  } },
];

export default function Tables() {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    fetchExpenses()
  }, [])
  const fetchExpenses = async () => {
    await API.get(`/expenses`).then(({ data }) => {
      setExpenses(data)
      console.log(data);
    })
  }

  return (
    <>
      <PageTitle title="All Expenses" />
      <Grid container spacing={4}>
      <Button
            variant="contained"
            color="primary"
            size="large"
            href="/#/app/tables/createExpense"
          >
            Add New Expense
          </Button>
       <br/>
        <Grid item xs={12}>
          <MUIDataTable
            title="Expenses List"
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
