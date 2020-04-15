import { combineReducers } from 'redux';
import changeCategoryReducer from './changeCategoryReducer';
import categoryListReducer from './categoryListRecuder'
import productListReducer from './productListReducer'
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer
});

export default rootReducer;