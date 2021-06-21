import React from "react";
import { shallow } from "enzyme";
import { AllOffersComponent } from "./AllOffers";

describe("Component AllOffers", () => {
  it("should render without crashing", () => {
    const fetchOffers = function () {};
    const component = shallow(
      <AllOffersComponent
        className="class"
        allOffers={[
          {
            region: "Jalisco",
            regionId: "jalisco",
            title: "Around Jalisco",
            description: "str",
            price: 100,
            image: ["str", "str", "str"],
          },
          {
            region: "Oaxaca",
            regionId: "oaxaca",
            title: "Around Oaxaca",
            description: "str",
            price: 200,
            image: ["str", "str", "str"],
          },
        ]}
        fetchOffers={fetchOffers}
        loading={{ error: "true" }}
      />
    );
    expect(component).toBeTruthy();
  });
});
