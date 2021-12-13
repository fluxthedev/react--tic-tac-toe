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
    expect(winnerStatus).toEqual('Winner: X')
});

it('resets game to start', () => {
    const goToStart = wrapper.find('button.goBack');
    const moves = wrapper.find('li').key();
    goToStart.simulate('click');
    expect(moves).toEqual("0");
});

it('go back to previous move', () => {
    const goBack = wrapper.find('button.goBack');
    const turnOne = wrapper.find('button.square').at(0);
    turnOne.simulate('click');
    goBack.simulate('click');
    const goBackText = wrapper.find('li').last().text();

    expect(goBackText).toEqual("Go to move #1");
});

it('simulate draw', () => {
    const turnOne = wrapper.find('button.square').at(0);
    turnOne.simulate('click');

    const turnTwo = wrapper.find('button.square').at(4);
    turnTwo.simulate('click');

    const turnThree = wrapper.find('button.square').at(2);
    turnThree.simulate('click');

    const turnFour = wrapper.find('button.square').at(1);
    turnFour.simulate('click');

    const turnFive = wrapper.find('button.square').at(7);
    turnFive.simulate('click');

    const turnSix = wrapper.find('button.square').at(3);
    turnSix.simulate('click');

    const turnSeven = wrapper.find('button.square').at(5);
    turnSeven.simulate('click');

    const turnEight = wrapper.find('button.square').at(8);
    turnEight.simulate('click');

    const turnNine = wrapper.find('button.square').at(6);
    turnNine.simulate('click');

    const drawStatus = wrapper.find('div.game-info').children().first().text();
    expect(drawStatus).toEqual('It\'s a draw');
});