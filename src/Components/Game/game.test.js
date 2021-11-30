import React from "react";
import Game from './game';
import { shallow } from "enzyme";

it('Game component renders without crashing', () => {
    shallow(<Game />);
});