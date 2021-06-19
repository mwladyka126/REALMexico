import React from "react";
import { shallow } from "enzyme";
import { CardViewComponent } from "./CardView";

describe("Component CardView", () => {
  it("should render without crashing", () => {
    const component = shallow(
      <CardViewComponent
        className="class"
        image="str"
        link="www.link"
        name="name"
      />
    );
    expect(component).toBeTruthy();
  });
});
