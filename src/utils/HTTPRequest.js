import axios from 'axios';
import { FETCH_URL, CATEGORY_URL } from './constants';

export const getAllProducts = function() {
    return axios.get(FETCH_URL + 'products');
}

export const getAllCategories = function() {
    return axios.get(FETCH_URL+'products/categories/');
}

export const getCategoryByName = function(name) {
    return axios.get(FETCH_URL + 'products/category/'+name);
}

export const getProductById = function(id){
    return axios.get(FETCH_URL+'products/'+id);
}