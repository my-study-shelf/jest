import React from 'react';
import ReactDom from 'react-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

// setup file
import Enzyme, { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

it('text render', () => {
  // testing-library/react的方法
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  // 原生的方法
  // const div = document.createElement('div');
  // ReactDom.render(<App />, div)
  // const APP = div.getElementsByClassName('App');
  // expect(APP.length).toBe(1);

  // enzyme
  const wrapper = shallow(<App/>);
  console.log(wrapper.find('.App'));
  // console.log(wrapper.debug());
  expect(wrapper.find('.App').length).toBe(1);
  expect(wrapper.prop('title')).toBe('label')
  // expect(wrapper).toMatchSnapshot();

  wrapper.find('Header')


});
