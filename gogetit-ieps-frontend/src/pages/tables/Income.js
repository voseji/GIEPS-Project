// import React from "react";
import React, { useState, useEffect } from 'react'
import { Grid } from "@material-ui/core";
// import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import API from '../../api';
// components
import PageTitle from "../../components/PageTitle/PageTitle";
// import Widget from "../../components/Widget";
// import Table from "../dashboard/components/Table/Table";

// // data
// import mock from "../dashboard/mock";

// const datatableData = [
//   ["Joe James", "Example Inc.", "Yonkers", "NY"],
//   ["John Walsh", "Example Inc.", "Hartford", "CT"],
//   ["Bob Herm", "Example Inc.", "Tampa", "FL"],
//   ["James Houston", "Example Inc.", "Dallas", "TX"],
//   ["Prabhakar Linwood", "Example Inc.", "Hartford", "CT"],
//   ["Kaui Ignace", "Example Inc.", "Yonkers", "NY"],
//   ["Esperanza Susanne", "Example Inc.", "Hartford", "CT"],
//   ["Christian Birgitte", "Example Inc.", "Tampa", "FL"],
//   ["Meral Elias", "Example Inc.", "Hartford", "CT"],
//   ["Deep Pau", "Example Inc.", "Yonkers", "NY"],
//   ["Sebastiana Hani", "Example Inc.", "Dallas", "TX"],
//   ["Marciano Oihana", "Example Inc.", "Yonkers", "NY"],
//   ["Brigid Ankur", "Example Inc.", "Dallas", "TX"],
//   ["Anna Siranush", "Example Inc.", "Yonkers", "NY"],
//   ["Avram Sylva", "Example Inc.", "Hartford", "CT"],
//   ["Serafima Babatunde", "Example Inc.", "Tampa", "FL"],
//   ["Gaston Festus", "Example Inc.", "Tampa", "FL"],
// ];

// const datatableData = [
//   { field: 'id', headerName: 'ID' },
//   { field: 'title', headerName: 'Title', width: 300 },
//   { field: 'body', headerName: 'Body', width: 600 }
// ];





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
