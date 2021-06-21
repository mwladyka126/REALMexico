import React from "react";
import { shallow } from "enzyme";
import { RegionsOverviewComponent } from "./RegionsOverview";

describe("Component RegionsOverview", () => {
  const fetchRegions = function () {};
  it("should render without crashing", () => {
    const component = shallow(
      <RegionsOverviewComponent
        className="class"
        regions={[
          { regionId: "jalisco", name: "Jalisco", image: "str" },
          { regionId: "cdmx", name: "Ciudad de Mexico", image: "str" },
        ]}
        fetchRegions={fetchRegions}
        loading={{ error: "true" }}
      />
    );
    expect(component).toBeTruthy();
  });
});
