import axios from 'axios';
import { FETCH_URL, CATEGORY_URL } from '../utils/constants';

export const getAllProducts = function() {
    return axios.get(FETCH_URL + 'products');
}

export const getAllCategories = function(name) {
    return axios.get(FETCH_URL+'products/categories/'+name);
}