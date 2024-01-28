// import { render, screen } from '@testing-library/react';
// import ShallowRenderer from 'react-test-renderer/shallow'; // ES6
// var ShallowRenderer = require('react-test-renderer/shallow'); // ES5 with npm
// import App from './App';
// import {shallow } from 'enzyme'
// import Home from './Home';

// test('this is my first test', () => {
//   render(<App />);
//   const text=screen.getByText("this is my first test")
 
//   expect(text).toBeInTheDocument();

//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });


// test('this is my first test', () => {
//   render(<App />);
 
//   const text2=screen.getByTitle("flower")

//   expect(text2).toBeInTheDocument();
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });

// describe('Home', () => {
//   it('should render correctly', () => {
//   const wrapper = shallow(<MyComponent />);
//   expect(wrapper).toMatchSnapshot();
//   });
//   });