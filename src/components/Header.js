import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LanguageIcon from "@material-ui/icons/Language";
import SearchIcon from "@material-ui/icons/Search";
import Logo from "./Logo";

const Header = props => (
  <AppBar position="static" color={"default"}>
    <Toolbar>
      <Logo />

      <Button
        style={{ margin: "0 5px" }}
        size="small"
        variant="outlined"
        color="primary"
      >
        Freight
      </Button>
      <Button
        style={{ margin: "0 5px" }}
        size="small"
        variant="outlined"
        color="secondary"
      >
        Holidays
      </Button>
      <Button style={{ margin: "0 5px" }} size="small" variant="outlined">
        Logistics
      </Button>
      <div style={{ flex: 1 }} />
      <IconButton color="primary" aria-label="Menu">
        <SearchIcon />
      </IconButton>
      <IconButton color="primary" aria-label="Menu">
        <LanguageIcon />
      </IconButton>
      <IconButton color="primary" aria-label="Menu" onClick={props.onClick}>
        <MenuIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
);

export default Header;
