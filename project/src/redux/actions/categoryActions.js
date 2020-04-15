import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return { type: actionTypes.CHANGE_CATEGORY, payload: category };
}

export function getCategoriesSuccess(categories) {
  return { type: actionTypes.GET_CATEGORIES_SUCCESS, payload: categories };
}

export function getCategories() {
  return function (dispatch) {
    let url = "http://localhost:3000/categories";

    return fetch(url)
      .then((response) => response.json())
      .then((result) => dispatch(getCategoriesSuccess(result)));
  };
}

// export function getCategories() {
//   return function (dispatch) {
//     return fetch('http://localhost:3000/categories')
//       .then((response) =>
//        dispatch({ type: actionTypes.GET_CATEGORIES_SUCCESS, payload: response.json()}));
//   };
// }
