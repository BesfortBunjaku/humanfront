import * as React from "react";
import Box from "@mui/material/Box";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

export class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ope: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.onClose = this.onClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleScript = this.handleScript.bind(this);
    this.handleLink = this.handleLink.bind(this);
    this.handleData = this.handleData.bind(this);
    this.link = this.link.bind(this);
  }

  handleToggle(e) {
    e.stopPropagation();
    this.setState({ ...this.state, open: !this.state.open });
  }
  onClose(e) {
    e.stopPropagation();
    this.setState({ ...this.state, open: false });
  }

  handleClick(event) {
    event.stopPropagation();
    this.setState({ ...this.state, arrow: !this.state.arrow });
  }
  handleScript(event) {
    event.preventDefault();
    this.setState({ ...this.state, script: true });
  }

  handleLink(event) {
    event.preventDefault();
    this.setState((prevState) => ({
      ope: !prevState.ope,
    }));
  }

  handleData(event) {
    this.setState({ ...this.state, data: !this.state.data });
    event.preventDefault();
  }
  link(e) {
    const { navigation } = this.props;
    e.stopPropagation();
    navigation("/");
  }
  render() {
    const { navigation } = this.props;
    return (
      <div>
        <Header onMenuClick={this.handleToggle}></Header>
        <Toolbar />

        {/*=================================================================*/}
        {/*Desktop Part Start*/}
        {/*=================================================================*/}

        {/*=================================================================*/}
        {/*Desktop Part End*/}
        {/*=================================================================*/}

        <Box component="main" >
          <Toolbar />
          {this.props.children}
        </Box>
        <BottomNav />
      </div>
    );
  }
}

// Wrap and export
export default function (props) {
  const navigation = useNavigate();

  return <Layout {...props} navigation={navigation} />;
}
