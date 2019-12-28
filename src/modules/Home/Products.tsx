import * as React from "react";
import {
  CircularProgress,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography
} from "@material-ui/core";
import { connect } from "react-redux";

interface propI {
  isFetching: boolean;
  isSuccess: boolean;
  items: any;
}


class ProductsInner extends React.Component<propI> {
  prodList = this.props.items;

  render() {
    if (this.props.isFetching) {
      return (
        <div style={{ width: "100%", textAlign: "center" }}>
          <CircularProgress />
        </div>
      );
    }
    /*
    if (this.state.error) {
      return <div style={{ width: "100%" }}>Error: {this.state.error}</div>;
    }
    */

    return (
      <div style={{  margin: -5 }}>
        {this.prodList.map((item: any) => (
          <Card style={{ flex: 1, margin: 5 }} >
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body1">Price ${item.price}</Typography>
            </CardContent>
            <CardActions style={{ justifyContent: "flex-end" }}>
              <Button
                variant="outlined"
                color="primary"
                style={{ textTransform: "none" }}
                onClick={() => {
                    alert('added: '+ item.id);
                  }}
              >
                Add to Basket
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  const { isFetching, isSuccess, items } = state.productReducer;
  return {
    isFetching,
    isSuccess,
    items
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsInner);
