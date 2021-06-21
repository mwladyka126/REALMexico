import React from "react";
import { shallow } from "enzyme";
import { CartItemComponent } from "./CartItem";

describe("Component CartItem", () => {
  it("should render without crashing", () => {
    const editInCart = function () {};
    const removeFromCart = function () {};
    const component = shallow(
      <CartItemComponent
        className="str"
        regionId="str"
        _id="str"
        title="title"
        image="str"
        price={40}
        people={9}
        days={7}
        start="01/01/1970"
        totalPrice={700}
        message="blabla"
        editInCart={editInCart}
        removeFromCart={removeFromCart}
      />
    );
    expect(component).toBeTruthy();
  });
});
