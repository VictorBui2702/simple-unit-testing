import React, { Component } from 'react';
import {shallow} from 'enzyme';
import ProductList from './ProductList';

let TEST_DATA
let output
let testingFn

beforeEach ( () => {
    testingFn = jest.fn();
    TEST_DATA = [
        {id: 134, name: 'computer', price: 1000},
        {id: 122, name: 'anker mouse', price: 50.25},
        {id: 553, name: 'computer stand', price: 20.99},
        {id: 689, name: 'mac adapter', price: 10000}
      ];
    output =  shallow(
        <ProductList 
        onProductBuy={testingFn}
        // products={TEST_DATA}
        />);
});

it('renders products on the page', () => {
    expect(output.find('li').length).toEqual(4);
  });

it('renders products on the page', () => {
    const firstProduct = output.find('li').first();
    expect(firstProduct.text()).toMatch(/1000/);
});
