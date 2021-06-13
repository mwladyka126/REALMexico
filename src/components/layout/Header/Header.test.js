import React from "react";
import { shallow } from "enzyme";
import { HeaderComponent } from "./Header";

describe("Component Header", () => {
  it("should render without crashing", () => {
    const amountInCart = 1;
    const component = shallow(
      <HeaderComponent className="class" children="str" amountInCart />
    );
    expect(component).toBeTruthy();
  });
});
