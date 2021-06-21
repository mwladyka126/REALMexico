import React from "react";
import { shallow } from "enzyme";
import { CarouselComponent } from "./Carousel";

describe("Component Carousel", () => {
  it("should render without crashing", () => {
    const component = shallow(
      <CarouselComponent
        className=""
        slides={[
          {
            id: "1",
            image: "img.jpg",
            title: "Tailor made trips in Mexico",
            subtitle: "Nulla vitae elit libero",
          },
          {
            id: "2",
            image: "img2.jpg",
            title: "Tailor made trips in Mexico",
            subtitle: "Nulla vitae elit libero",
          },
        ]}
      />
    );
    expect(component).toBeTruthy();
  });
});
