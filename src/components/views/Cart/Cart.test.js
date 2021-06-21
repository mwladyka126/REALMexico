import React from "react";
import { shallow } from "enzyme";
import { CartComponent } from "./Cart";

describe("Component Cart", () => {
  it("should render without crashing", () => {
    const component = shallow(
      <CartComponent
        className="class"
        cart={[
          {
            _id: "2",
            title: "title",
            image: "str",
            price: 10,
            people: 10,
            days: 10,
            start: "",
            totalPrice: "1000",
            message: "",
          },
          {
            _id: "1",
            title: "title",
            image: "str",
            price: 20,
            people: 1,
            days: 1,
            start: "",
            totalPrice: "20",
            message: "",
          },
        ]}
        loading={{ confirmation: "true" }}
      />
    );
    expect(component).toBeTruthy();
  });
});
