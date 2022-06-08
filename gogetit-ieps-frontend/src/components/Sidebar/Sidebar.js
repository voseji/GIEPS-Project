import React, { useState, useEffect } from "react";
import { Drawer, IconButton, List } from "@material-ui/core";
import {
  Home as HomeIcon,
  // NotificationsNone as NotificationsIcon,
  // FormatSize as TypographyIcon,
  // FilterNone as UIElementsIcon,
  // BorderAll as TableIcon,
  // QuestionAnswer as SupportIcon,
  // LibraryBooks as LibraryIcon,
  // HelpOutline as FAQIcon,
  ArrowBack as ArrowBackIcon,
  // Money as MoneyIcon,
  Add as AddIcon,
  Settings as AddSettings,
  PictureAsPdf as PDF,
  Input as IncomeIcon,
  DataUsage as ExpenseIcon,
  
} from "@material-ui/icons";
import { useTheme } from "@material-ui/styles";
import { withRouter } from "react-router-dom";
import classNames from "classnames";

// styles
import useStyles from "./styles";

// components
import SidebarLink from "./components/SidebarLink/SidebarLink";
// import Dot from "./components/Dot";

// context
import {
  useLayoutState,
  useLayoutDispatch,
  toggleSidebar,
} from "../../context/LayoutContext";

const structure = [
  { id: 0, label: "Dashboard", link: "/app/dashboard", icon: <HomeIcon /> },

 {
    id: 3,
    label: "Income ",
    
    icon: <IncomeIcon />,
    children: [
      { label: "Add Income", link: "/app/tables/createIncome", icon: <AddIcon /> },
      { label: "View Incomes", link: "/app/tables/Income", icon: <AddIcon /> },
    
    ],
  },
  {
    id: 4,
    label: "Expenses ",
    
    icon: <ExpenseIcon />,
    children: [
      { label: "Add Expense", link: "/app/tables/createExpense", icon: <AddIcon /> },
      { label: "View Expenses", link: "/app/tables/Expenses", icon: <AddIcon /> },
    
    ],
  },
  {
    id: 5,
    label: "Reports ",
    
    icon: <PDF />,
    children: [
      { label: "PDF", link: "#", icon: <AddIcon /> },
      { label: "Excel", link: "#", icon: <AddIcon /> },
    
    ],
  },
  {
    id: 6,
    label: "Settings ",
    
    icon: <AddSettings />,
    children: [
      { label: "Add Inc. Cat.", link: "/app/tables/createIncomeCategory", icon: <AddIcon /> },
      { label: "Add Exp. Cat.", link: "/app/tables/createExpenseCategory", icon: <AddIcon /> },
    
    ],
  },
]
function Sidebar({ location }) {
  var classes = useStyles();
  var theme = useTheme();

  // global
  var { isSidebarOpened } = useLayoutState();
  var layoutDispatch = useLayoutDispatch();

  // local
  var [isPermanent, setPermanent] = useState(true);

  useEffect(function() {
    window.addEventListener("resize", handleWindowWidthChange);
    handleWindowWidthChange();
    return function cleanup() {
      window.removeEventListener("resize", handleWindowWidthChange);
    };
  });

  return (
    <Drawer
      variant={isPermanent ? "permanent" : "temporary"}
      className={classNames(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpened,
        [classes.drawerClose]: !isSidebarOpened,
      })}
      classes={{
        paper: classNames({
          [classes.drawerOpen]: isSidebarOpened,
          [classes.drawerClose]: !isSidebarOpened,
        }),
      }}
      open={isSidebarOpened}
    >
      <div className={classes.toolbar} />
      <div className={classes.mobileBackButton}>
        <IconButton onClick={() => toggleSidebar(layoutDispatch)}>
          <ArrowBackIcon
            classes={{
              root: classNames(classes.headerIcon, classes.headerIconCollapse),
            }}
          />
        </IconButton>
      </div>
      <List className={classes.sidebarList}>
        {structure.map(link => (
          <SidebarLink
            key={link.id}
            location={location}
            isSidebarOpened={isSidebarOpened}
            {...link}
          />
        ))}
      </List>
    </Drawer>
  );

  // ##################################################################
  function handleWindowWidthChange() {
    var windowWidth = window.innerWidth;
    var breakpointWidth = theme.breakpoints.values.md;
    var isSmallScreen = windowWidth < breakpointWidth;

    if (isSmallScreen && isPermanent) {
      setPermanent(false);
    } else if (!isSmallScreen && !isPermanent) {
      setPermanent(true);
    }
  }
}

export default withRouter(Sidebar);
