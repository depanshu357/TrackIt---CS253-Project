import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Dashboard from "../../pages/Dashboard";
import "./navbar-error-free.css";
import ExploreIcon from "@mui/icons-material/Explore";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Outlet, Link } from "react-router-dom";

import { useLogout } from "../../hooks/useLogout";
import { useAuthContext } from "../../hooks/useAuthContext";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Navbar({ Display, showPopup, setShowPopup }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = (req, res) => {
    logout();

  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handlePopup = (e) => {
    e.preventDefault();
    console.log(e);
    setShowPopup(!showPopup);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className="navbar-header">
            <Link to="/">
              <img
                className="navbar-logo"
                src="/images/TrackIT-logo-bgrm.png"
                alt="logo"
                style={{ visibility: open ? "hidden" : "visible" }}
              />
            </Link>
            <div className="navbar-logout">
              {!user && (
                <div>
                  <Link to="/login" className="navbar-login-link">
                    Login
                  </Link>
                  <Link to="/signup" className="navbar-signup-link">
                    Signup
                  </Link>
                </div>
              )}

              {user.userType == "Customer" && (
                <span className="navbar-user-email upper-hide">
                  <button
                    className="add-expense-popup-button"
                    onClick={handlePopup}
                  >
                    + Add Expense
                  </button>
                  <span>{user.email}</span>
                  <button onClick={handleClick} className="navbar-logout-btn" href="/login">
                    Log out
                  </button>
                </span>
              )}
              {user.userType == "Shopkeeper" && (
                <span className="navbar-user-email upper-hide">
                  <span>{user.email}</span>
                  <button onClick={handleClick} className="navbar-logout-btn">
                    Log out
                  </button>
                </span>
              )}
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Link to="/">
            <img
              className="navbar-logo uncollapse"
              src="/images/TrackIT-logo-bgrm.png"
              alt="logo"
            />
          </Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {user.userType == "Customer" &&
            ["Expenses", "Borrowings", "Analytics"].map(
              (text, index) => (
                <ListItem key={text} disablePadding sx={{ display: "block" }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? "initial" : "center",
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {index === 0 ? (
                        <Link to="/expenses" className="navbar-home-icon  ">
                          <AccountBalanceWalletIcon className="expenses-icon" />
                        </Link>
                      ) : index === 2 ? (
                        <Link to="/analytics" className="navbar-home-icon  ">
                          {" "}
                          <ExploreIcon className="dashboard-icon" />
                        </Link>
                      ) :
                        <Link to="/borrowings" className="navbar-home-icon  ">
                          {" "}
                          <CreditCardIcon className="borrowings-icon" />
                        </Link>
                      }
                    </ListItemIcon>

                    <ListItemText
                      primary={
                        <Link
                          className="navbar-text"
                          to={
                            index === 0
                              ? "/expenses"
                              : index == 2
                                ? "/analytics"
                                : "/borrowings"

                          }
                        >
                          {text}
                        </Link>
                      }
                      sx={{ opacity: open ? 1 : 0 }}
                      style={{
                        color:
                          index === 0
                            ? "#8F5FE8"
                            : index === 2
                              ? "#00D25B"
                              : index == 3 ? "#6cbbe3"
                                : "#F8A91A",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
          {user && (
            <span
              className="navbar-user-email  side-bar-email"
              style={{ display: open ? "flex" : "none" }}
            >
              <button
                className="add-expense-popup-button"
                onClick={handlePopup}
              >
                + Add Expense
              </button>
              <span>{user.email}</span>
              <button onClick={handleClick} className="navbar-logout-btn">
                Log out
              </button>
            </span>
          )}

          {user.userType == "Shopkeeper" &&
            [].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index === 0 ? (
                      <Link to="/expenses" className="navbar-home-icon  ">
                        <AccountBalanceWalletIcon className="expenses-icon" />
                      </Link>
                    ) : index === 2 ? (
                      <Link to="/analytics" className="navbar-home-icon  ">
                        {" "}
                        <ExploreIcon className="dashboard-icon" />
                      </Link>
                    ) : (
                      <Link to="/borrowings" className="navbar-home-icon  ">
                        {" "}
                        <CreditCardIcon className="borrowings-icon" />
                      </Link>
                    )}
                  </ListItemIcon>

                  <ListItemText
                    primary={
                      <Link
                        className="navbar-text"
                        to={
                          index === 0
                            ? "/expenses"
                            : index == 2
                              ? "/analytics"
                              : "/borrowings"
                        }
                      >
                        {text}
                      </Link>
                    }
                    sx={{ opacity: open ? 1 : 0 }}
                    style={{
                      color:
                        index === 0
                          ? "#8F5FE8"
                          : index === 2
                            ? "#00D25B"
                            : index == 3 ? "#6cbbe3"
                              : "#F8A91A",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}

        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
        style={{ paddingTop: "60px", paddingLeft: "0px", paddingRight: "0px" }}
      >
        <Display></Display>
      </Box>
    </Box >
  );
}
