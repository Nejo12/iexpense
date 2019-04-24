import React from "react";
import { shallow } from "enzyme";
import Header from "../../components/Header";
import toJSON from "enzyme-to-json";

test("Should render Header correctly", () => {
  const wrapper = shallow(<Header />);
  expect(toJSON(wrapper)).toMatchSnapshot();
  // expect(wrapper.find("h1").text()).toBe("iExpenses");

  // const renderer = new ReactShallowRendere();
  // renderer.render(<Header />);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
});
