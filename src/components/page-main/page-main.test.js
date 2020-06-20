import React from "react";
import renderer from "react-test-renderer";
import PageMain from "./page-main";
import {TypePlace} from "../../constants";

const offers = [
  {
    id: `bkjnlkmlkms`,
    isPremium: true,
    price: 35,
    title: `Beautiful & luxurious apartment at great location`,
    type: TypePlace.APARTMENT,
    rating: 1.3,
    picture: `img/apartment-02.jpg`,
  },
  {
    id: `jkbsdkjsjldk`,
    isPremium: false,
    price: 25,
    title: `Wood and stone place`,
    type: TypePlace.HOTEL,
    rating: 2.5,
    picture: `img/apartment-01.jpg`,
  },
];

it(`should render Page-main`, function () {
  const tree = renderer
    .create(
        <PageMain
          onClickByHeader={() => {}}
          offers = {offers}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});