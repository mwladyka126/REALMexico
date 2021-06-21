import React from "react";
import { shallow } from "enzyme";
import { RegionComponent } from "./Region";

describe("Component Region", () => {
  it("should render without crashing", () => {
    const fetchOffers = function () {};
    const component = shallow(
      <RegionComponent
        className="class"
        offers={[
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
        loading={{ active: "true" }}
      />
    );
    expect(component).toBeTruthy();
  });
});
