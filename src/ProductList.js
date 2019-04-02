import React, { Component } from 'react';
// import Products from './Products';

const productInfo = [
    {id: 134, name: 'computer', price: 1000},
    {id: 122, name: 'anker mouse', price: 50.25},
    {id: 553, name: 'computer stand', price: 20.99},
    {id: 689, name: 'mac adapter', price: 10000}
]

const dataRender = productInfo.map(
    item => {return <li>{productInfo}</li>}
)

const ProductList = () => {
    return <div>{dataRender}</div>
}

// class ProductList extends Component {
       
//     render = () => {
//         return (
//             <div>
//                 {this.props.products.map(p => <li>{p.name} : {p.price}</li>)}
//                 <Products />
                
//             </div>
//         )
//     }
// }

export default ProductList