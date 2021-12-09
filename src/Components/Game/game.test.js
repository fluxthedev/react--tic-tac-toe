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

it('renders game status for second player', () => {
    const button = wrapper.find('button.square').at(0);
    button.simulate('click');
    const secondPlayer = wrapper.find('div.game-info').children().first().text();
    expect(secondPlayer).toEqual('Next player: O');
});

it('simulates game with winner', () => {
    const turnOne = wrapper.find('button.square').at(0);
    turnOne.simulate('click');

    const turnTwo = wrapper.find('button.square').at(2);
    turnTwo.simulate('click');

    const turnThree = wrapper.find('button.square').at(4);
    turnThree.simulate('click');

    const turnFour = wrapper.find('button.square').at(8);
    turnFour.simulate('click');

    const turnFive = wrapper.find('button.square').at(5);
    turnFive.simulate('click');

    const turnSix = wrapper.find('button.square').at(1);
    turnSix.simulate('click');

    const turnSeven = wrapper.find('button.square').at(3);
    turnSeven.simulate('click');

    const winnerStatus = wrapper.find('div.game-info').children().first().text();
    console.log(wrapper.debug());
    expect(winnerStatus).toEqual('Winner: X')
});