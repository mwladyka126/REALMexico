import React from "react";
import { shallow } from "enzyme";
import { AmountCounterComponent } from "./AmountCounter";

describe("Component AmountCounter", () => {
  const setAmount = function () {};
  it("should render without crashing", () => {
    const component = shallow(
      <AmountCounterComponent
        setAmount={setAmount}
        className="str"
        maxNumber={10}
        defaultValue={1}
      />
    );
    expect(component).toBeTruthy();
  });
});
