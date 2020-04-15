import React, { Component } from "react";
import { bindActionCreators } from "redux";
import {
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
} from "reactstrap";
import { connect } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from 'alertifyjs';
import { Link } from 'react-router-dom';

class CartSummary extends Component {
  renderEmpty = () => {
    return (
      <NavItem>
        <NavLink>Your cart is empty.</NavLink>
      </NavItem>
    );
  };

  renderSummary = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart <Badge color="warning">{this.props.cart.length}</Badge>
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              {cartItem.product.productName} ({cartItem.quantity})
              <span className="text-danger float-right" onClick={() => this.removeFromCart(cartItem.product)}>x</span>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem onClick={() => this.clearCart()}>
            Clear Cart
          </DropdownItem>
          <DropdownItem>
            <Link to={"/cart"}>My Cart</Link>
          </DropdownItem>

        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  clearCart = () => {
      this.props.actions.clearCart();
      alertify.success("Your cart is empty.");
  };

  removeFromCart = (product) => {
        this.props.actions.removeFromCart(product);
        alertify.success("Product removed.");
  }

  render() {
    return this.props.cart.length > 0
      ? this.renderSummary()
      : this.renderEmpty();
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      clearCart: bindActionCreators(cartActions.clearCart, dispatch),
      removeFromCart : bindActionCreators(cartActions.removeFromCart, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary);
