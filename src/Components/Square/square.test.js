import React from "react";
import Square from './square';
import { shallow } from "enzyme";

it('Square component renders without crashing', () => {
    shallow(<Square />);
});