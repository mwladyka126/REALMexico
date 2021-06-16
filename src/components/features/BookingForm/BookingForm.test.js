import React from "react";
import { shallow } from "enzyme";
import { BookingFormComponent } from "./BookingForm";

describe("Component BookingForm", () => {
  it("should render without crashing", () => {
    const component = shallow(
      <BookingFormComponent
        offer={{
          _id: "shhh",
          title: "title",
          image: "str",
          price: 0,
          people: 0,
          days: 0,
          start: "",
          totalPrice: "",
          message: "",
        }}
        loading={{ confirmation: "true" }}
        className={"styles.class"}
      />
    );
    expect(component).toBeTruthy();
  });
});
