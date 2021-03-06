import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";
import {Box} from '@material-ui/core'
// import Icon from '@mdi/react'

//icons
// import {
//   mdiFacebook as FacebookIcon,
//   mdiTwitter as TwitterIcon,
//   mdiGithub as GithubIcon,
// } from '@mdi/js'

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables/Expenses";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";

// context
import { useLayoutState } from "../../context/LayoutContext";
import Incomes from "../../pages/tables/Income";

import CreateExpense from "../../pages/tables/createExpense";
import CreateIncome from "../../pages/tables/createIncome";
import CreateIncomeCategory from "../../pages/tables/createIncomeCategory";
import CreateExpenseCategory from "../../pages/tables/createExpenseCategory";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <Header history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />
            <Switch>
              <Route path="/app/dashboard" component={Dashboard} />
              <Route path="/app/typography" component={Typography} />
              <Route path="/app/tables/Expenses" component={Tables} />
              <Route path="/app/tables/Income" component={Incomes} />
              <Route path="/app/tables/createExpense" component={CreateExpense} />
              <Route path="/app/tables/createIncome" component={CreateIncome} />
              <Route path="/app/tables/createIncomeCategory" component={CreateIncomeCategory} />
              <Route path="/app/tables/createExpenseCategory" component={CreateExpenseCategory} />
              <Route path="/app/notifications" component={Notifications} />
              <Route
                exact
                path="/app/ui"
                render={() => <Redirect to="/app/ui/icons" />}
              />
              <Route path="/app/ui/maps" component={Maps} />
              <Route path="/app/ui/icons" component={Icons} />
              <Route path="/app/ui/charts" component={Charts} />
            </Switch>
            <Box
              mt={5}
              width={"100%"}
              display={"flex"}
              alignItems={"center"}
              justifyContent="space-between"
            >
 
              <div>
              
           
            
              </div>
            </Box>
          </div>
        </>
    </div>
  );
}

export default withRouter(Layout);
