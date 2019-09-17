import React from "react";
import { shallow, mount} from "enzyme";
import EightBall from "./EightBall.js";
import { isRegExp } from "util";

it('renders without crashing', () => {
  shallow(<EightBall />);
});
it('renders with correct initial text', () => {
  let wrapper = mount(<EightBall />);
  expect(wrapper.exists('p')).toEqual(true);
  let p_elem = wrapper.find('p').first();
  expect(p_elem.equals(<p>Think of a Question.</p>)).toEqual(true);
  // expect(wrapper.html).toContain("Think of a Question.");
});
it('it changes default message on click', () => {
  let wrapper = mount(<EightBall />);
  expect(wrapper.state().color).toEqual('black');
  wrapper.simulate("click");
  console.log(wrapper.state());
  expect(wrapper.state().color).not.toEqual('black');
});