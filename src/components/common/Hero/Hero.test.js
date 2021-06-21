import React from "react";
import { shallow } from "enzyme";
import { HeroComponent } from "./Hero";

describe("Component Hero", () => {
  it("should render without crashing", () => {
    const component = shallow(
      <HeroComponent
        children={<h1>title</h1>}
        className="str"
        title="str"
        link="str"
        buttonDesc="str"
        subtitle="str"
      />
    );
    expect(component).toBeTruthy();
  });
});
