import React from "react";
import Board from './board';
import { shallow } from "enzyme";

it('Game component renders without crashing', () => {
    shallow(<Board />);
});