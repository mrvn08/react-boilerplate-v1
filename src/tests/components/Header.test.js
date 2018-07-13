// react-test-render
import React from 'react';
//import ShallowRenderer from 'react-test-renderer/shallow';
//use shallow rendering if you're not concerned with any user interaction.
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
//1) enzyme to json is used in the jest.config.json instead to serialize snapshots
import { Header } from '../../components/Header';

test('Should render header correctly', () => {
    //Enzyme
    //------------------------------------------------------
    const wrapper = shallow(<Header startLogout={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
    // since enzyme to json is already in the jest config file, we don't need to add toJSON() to wrapper

    // expect(wrapper.find('h1').text()).toBe('Expensify');

    //React Test Renderer
    //------------------------------------------------------
    // const renderer = new ShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('Should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout}/>);

    wrapper.find('button').simulate('click');
    expect(startLogout).toBeCalled();
});

