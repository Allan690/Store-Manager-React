import React, {Component} from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types'
import {toast} from "react-toastify"
import {getAllProducts} from '../actions/allProducts.action';

class AllProducts extends Component {
    constructor(props){
        super(props);
        this.state = {
           loading: false,
            items: []
        };
    }

    componentDidMount() {
        this.setState({
            loading: true,
            items: this.props.getAllProducts
        });
    };

    render() {
        let products = this.props.getAllProducts;
        console.log(this.props)
        console.log(products);
        return(
            <div>
                {products.map(prod =>
                <div key={prod.prod_id}>
                    <h3>{prod.prod_name}</h3>
                    <p>{prod.prod_price}</p>
                </div>
            )}
            </div>
        )
    }
}

AllProducts.propTypes = {
    getAllProducts: PropTypes.func.isRequired
};

export default connect(null, {getAllProducts})(AllProducts)
