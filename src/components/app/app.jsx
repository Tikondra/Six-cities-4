import React from "react";
import PropTypes from "prop-types";
import PageMain from "../page-main/page-main.jsx";

const placeHeaderHandler = () => {};

const App = (props) => {
  const {placesCount, places} = props;

  return <PageMain
    placesCount = {placesCount}
    places = {places}
    onClickByHeader = {placeHeaderHandler}
  />;
};

App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;
