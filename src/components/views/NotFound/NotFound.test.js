import React from "react";
import { shallow } from "enzyme";
import { NotFoundComponent } from "./NotFound";

describe("Component NotFound", () => {
  it("should render without crashing", () => {
    const component = shallow(<NotFoundComponent className="str" />);
    expect(component).toBeTruthy();
  });
});
