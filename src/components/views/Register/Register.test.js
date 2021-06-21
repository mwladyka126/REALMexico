import React from "react";
import { shallow } from "enzyme";
import { RegisterComponent } from "./Register";

describe("Component Register", () => {
  it("should render without crashing", () => {
    const sendBooking = function () {};
    const component = shallow(
      <RegisterComponent
        className="class"
        cart={[
          {
            _id: "1234",
            title: "title",
            image: "str",
            price: 50,
            people: 10,
            days: 10,
            start: "11/06/2021",
            totalPrice: "10000",
            message: "blabla",
          },
        ]}
        loadingBookings={{ error: "true" }}
        sendBooking={sendBooking}
      />
    );
    expect(component).toBeTruthy();
  });
});
