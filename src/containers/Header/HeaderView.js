import React, { Component } from "react";
import PropTypes from "prop-types";

import * as AuthService from "../../utils/AuthService";
import "./Header.css";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  flex: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

class HeaderView extends Component {
  state = {
    redirectToReferrer: false
  };

  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired
    }).isRequired,
    auth: PropTypes.shape({
      isAuthenticated: PropTypes.bool.isRequired,
      profile: PropTypes.object,
      error: PropTypes.object
    }).isRequired,
    loginRequest: PropTypes.func.isRequired,
    logoutSuccess: PropTypes.func.isRequired
  };

  handleLoginClick = () => {
    AuthService.login();
    this.props.loginRequest();
    this.setState({ redirectToReferrer: true });
  };

  handleLogoutClick = () => {
    this.props.logoutSuccess();
    AuthService.logout(); // careful, this is a static method
    this.props.history.push({ pathname: "/" });
  };

  render() {
    const { auth, classes } = this.props;
    return (
      <div>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
              {auth.isAuthenticated ? (
                <div className={classes.flex}>
                  <img src={auth.profile.picture} height="40px" alt="profile" />
                  <span>Welcome, {auth.profile.nickname}</span>
                  <Button variant="outlined" color="secondary" onClick={this.handleLogoutClick}>Logout</Button>
                </div>
              ) : (
                <Button variant="outlined" color="primary" onClick={this.handleLoginClick}>Login</Button>
              )}
            </Toolbar>
          </AppBar>
        </div>

        {auth.error && <p>{JSON.stringify(auth.error)}</p>}
      </div>
    );
  }
}

export default withStyles(styles)(HeaderView);
