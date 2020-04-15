import React, { Component } from "react";
import { connect } from "react-redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as productActions from "../../redux/actions/productActions";
import { bindActionCreators } from "redux";
import { ListGroup, ListGroupItem } from "reactstrap";

class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

 selectCategory = category => {
    this.props.actions.changeCategory(category);
    this.props.actions.getProducts(category.id);
 }

  render() {
    return (
      <div>
        <h3>Categories</h3>
        <ListGroup>
          {this.props.categories.map((category) => (
            <ListGroupItem style={{cursor:'pointer'}} 
              key={category.id}
              onClick={() => this.selectCategory(category)} 
              active={category.id === this.props.currentCategory.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
      changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getProducts: bindActionCreators(
        productActions.getProducts,
        dispatch
      )
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);

// export default connect((state) => {
//   return {
//     currentCategory: state.changeCategoryReducer,
//   };
// })(
//   class CategoryList extends Component {
//     render() {
//       return (
//         <div>
//           <h3>Categories</h3>
//           <h5>Seçili Kategori: {this.props.currentCategory.categoryName}</h5>
//         </div>
//       );
//     }
//   }
// );
