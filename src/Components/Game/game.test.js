import React from "react";
import Game from './game';
import { shallow, mount } from "enzyme";

it('Game component renders without crashing', () => {
    shallow(<Game />);
});

it('renders game info correctly', () => {
    const wrapper = mount(<Game/>);
    const firstPlayer = wrapper.find('div.game-info').children().first().text();
    expect(firstPlayer).toEqual('Next player: X');
});