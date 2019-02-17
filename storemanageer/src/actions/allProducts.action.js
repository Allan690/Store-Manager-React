import {ALL_PRODUCTS, PRODUCT_ERRORS} from "./productActionTypes";
import {toast} from "react-toastify";
import axios from 'axios';

export const getAllProducts = () => dispatch => {
    if(!localStorage.getItem('token')){
        toast.error('Please login to view products');
        window.location.assign('/login')
    }
    const token = localStorage.getItem('token');
    axios.get('https://store-manager-api-app-v2.herokuapp.com/api/v2/products', {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*',
            'Authorization': `Bearer ` + token
        }
    })
        .then(res => {
            console.log(res)
            console.log(res.data);
            dispatch({
                type: ALL_PRODUCTS,
                payload: res.data
            })
            .then( res =>{
               console.log(res)
            })

        })
        .catch(err =>{
           console.log(err);
           dispatch ({
               type: PRODUCT_ERRORS,
               payload: err
           })
        });

};
