import React from "react";
import Game from './game';
import { shallow, mount } from "enzyme";

let wrapper;
beforeEach(() => {
    wrapper = mount(<Game/>);
});

it('Game component renders without crashing', () => {
    shallow(<Game />);
});

it('renders game status for first player', () => {
    const firstPlayer = wrapper.find('div.game-info').children().first().text();
    expect(firstPlayer).toEqual('Next player: X');
});

it('renders game status for second playerr', () => {
    const button = wrapper.find('button.square').first();
    button.simulate('click');
    const secondPlayer = wrapper.find('div.game-info').children().first().text();
    expect(secondPlayer).toEqual('Next player: 0');
});