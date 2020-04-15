import React, { Component } from "react";
import { connect } from "react-redux";
import { Breadcrumb, BreadcrumbItem, Table, Button } from "reactstrap";
import * as productActions from "../../redux/actions/productActions";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from 'alertifyjs';

class ProductList extends Component {

  componentDidMount(){
    this.props.actions.getProducts();
  }

  addToCart = (product) => {
    this.props.actions.addToCart({quantity: 1, product});
    alertify.success('Product added.');
  }

  render() {
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>Products</BreadcrumbItem>
          {this.props.currentCategory.categoryName && (
            <BreadcrumbItem active>
              {this.props.currentCategory.categoryName}
            </BreadcrumbItem>
          )}
      </Breadcrumb>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Quantity Per Unit</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.products.map(product => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.productName}</td>
                <td>{product.unitPrice}</td>
                <td>{product.quantityPerUnit}</td>
                <td><Button color="info" onClick={() => this.addToCart(product)}>Add to Cart</Button></td>
              </tr>
          ))}
        </tbody>
      </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
