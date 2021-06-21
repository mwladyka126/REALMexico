import React from "react";
import { shallow } from "enzyme";
import { MainLayoutComponent } from "./MainLayout";

describe("Component MainLayout", () => {
  it("should render without crashing", () => {
    const component = shallow(
      <MainLayoutComponent className="str" children={<h1>title</h1>} />
    );
    expect(component).toBeTruthy();
  });
});
