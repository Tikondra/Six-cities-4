import React from "react";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import {offers} from "../../mocks/for-test/offers";
import {cities} from "../../mocks/for-test/cities";
import {MapType} from "../../constants";

it(`should render Map`, function () {
  const tree = renderer
    .create(
        <Map
          type = {MapType.MAIN}
          offers={offers}
          city={cities[0]}
        />,
        {createNodeMock: () => {
          return document.createElement(`div`);
        }}
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
