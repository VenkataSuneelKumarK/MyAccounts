/**
 * Created by kanamars on 29/10/19.
 */
import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import CheckBox from './Checkbox';
configure({adapter: new Adapter()});

describe('<CheckBox/>', function () {
    let wrapper, value, onchangeHandler;

    beforeEach(() => {
        value = {
            id : "1",
            label: "Saving Account",
            isChecked: false
        };
        onchangeHandler = () => {};
        wrapper = shallow(<CheckBox value={value} key="1" onchange={onchangeHandler} filterKey="Account"/>);
    });
    it('should render <CheckBox /> element', () => {
        // console.log("wrapper", wrapper.debug());
        expect(wrapper.find("input")).toHaveLength(1);
        expect(wrapper.find("label")).toHaveLength(1);
        expect(wrapper.find("label[htmlFor='Account&1']")).toHaveLength(1);
    });
    it("should snapshot", function () {
        const tree = renderer
            .create(<CheckBox value={value} key="1" onchange={onchangeHandler} filterKey="Account"/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});