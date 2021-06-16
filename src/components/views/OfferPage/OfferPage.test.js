import React from "react";
import { shallow } from "enzyme";
import { OfferPageComponent } from "./OfferPage";
import { add } from "date-fns";

describe("Component OfferPage", () => {
  it("should render without crashing", () => {
    const addToCart = function () {};
    const fetchOffer = function () {};
    const component = shallow(
      <OfferPageComponent
        className=""
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
        loading={{ error: "true" }}
        addToCart={addToCart}
        fetchOffer={fetchOffer}
      />
    );
    expect(component).toBeTruthy();
  });
});
