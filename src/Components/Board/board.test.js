import React from "react";
import Board from './board';
import { shallow } from "enzyme";

it('Board component renders without crashing', () => {
    shallow(<Board />);
});