import React from "react";
import Menu from "./Menu";
import ProductsInner from "./Products";
import { withRouter, RouteComponentProps } from "react-router";
import { connect } from "react-redux";

interface UserDetailsI {
  token: string;
  isFetching: boolean;
  isSuccess: boolean;
  payload: any;
}

class Home extends React.Component<UserDetailsI & RouteComponentProps> {
  componentDidMount() {
    const userDetails: any = localStorage.getItem("user");

    if (this.props.payload && this.props.payload.validLogin) {
      console.log("Authenticated user");
      console.log("User details: ", userDetails);
    } else {
      console.log("token not found");
      //this.props.history.push("/Login");
    }
    /*
        if(!userDetails|| userDetails.token===''){
            //this.props.history.push('/Login');
            console.log("token not found");
        }
        */
  }

  render() {
    return (
      <React.Fragment>
        <Menu />
        <br/>
        <ProductsInner />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state: any) {
  const { isFetching, isSuccess, payload } = state.loginReducer;
  return {
    isFetching,
    isSuccess,
    payload
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
