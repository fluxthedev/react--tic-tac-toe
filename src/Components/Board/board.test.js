import React from "react";
import Board from './board';
import {shallow, mount} from 'enzyme';

it('Renders board with squares without crashing', () => {
    let squares = Array(9).fill(null)
    shallow(<Board squares={squares}/>);
});

it('triggers onClick event when board square is clicked', () =>{
    let squares = Array(9).fill(null)
    const onClick = jest.fn().mockName("onClick");
    let wrapper = mount(<Board squares={squares} onClick={onClick}/>);
    wrapper.find('button.square').first().simulate('click');
    expect(onClick).toBeCalledWith(0);
})