import Box from "@mui/material/Box";
import { MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import { Menu } from "@mui/material";
import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const settings = ["Profile", "Logout", "Register"];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorElNav: null,
      anchorElUser: null,
    };

    this.handleCloseNavMenu = this.handleCloseNavMenu.bind(this);
    this.handleOpenNavMenu = this.handleOpenNavMenu.bind(this);
    this.handleCloseUserMenu = this.handleCloseUserMenu.bind(this);
    this.handleOpenUserMenu = this.handleOpenUserMenu.bind(this);
  }

  handleOpenNavMenu(event) {
    this.setState({ anchorElNav: event.currentTarget });
  }
  handleOpenUserMenu(event) {
    this.setState({ anchorElUser: event.currentTarget });
  }

  handleCloseNavMenu() {
    this.setState({ anchorElNav: null });
  }

  handleCloseUserMenu(e) {
    this.setState({ anchorElUser: null });
    console.log(e.target.innerText);
    if (e.target.innerText === "Profile") {
      this.props.navigate("/userprofile");
    } else if (e.target.innerText === "Logout") {
      this.props.auth.logout();
      this.props.navigate("/login");
    } else if (e.target.innerText === "Register") {
      this.props.navigate("/userregister");
    }
  }

  render() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          elevation={0}
          position="fixed"
          sx={{
            backgroundColor: "#17232F",
            color: "gray",
          }}
        >
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ p:0 }}
              
            >
              <Box
                component="img"
                sx={{
                  height: 50,
                  width: 200,
 
                }}
                alt="The house from the offer."
                src={require("../images/logo.png")}
              />
            </IconButton>

            {this.props.children}

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={this.handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" />
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={this.state.anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(this.state.anchorElUser)}
                onClose={this.handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={this.handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}

function withHook(Component) {
  return function WrappedComponent(props) {
    const navigate = useNavigate();

    return <Component {...props} navigate={navigate} />;
  };
}

export default withHook(Header);
