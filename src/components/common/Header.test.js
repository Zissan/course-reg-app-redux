import React from "react";
import Header from "./Header";
import { shallow, mount } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";

it("contains three NavLinks via shallow", () => {
  const wrapper = shallow(<Header />);

  expect(wrapper.find("NavLink").length).toBe(3);
});

it("contains three anchors via mount", () => {
  const numAnchors = mount(
    <Router>
      <Header />
    </Router>
  ).find("a").length;
  expect(numAnchors).toBe(3);
});
