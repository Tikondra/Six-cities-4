import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {MapType, PlacesListClass, TypePlace} from "../../constants";
import OfferGallery from "../offer-gallery/offer-gallery.jsx";
import {getRating} from "../../utils";
import Options from "../options/options.jsx";
import Host from "../host/host.jsx";
import Reviews from "../reviews/reviews.jsx";
import Map from "../map/map.jsx";
import PlacesList from "../places-list/places-list.jsx";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {getActiveOffer} from "../../reducer/app-state/selectors";
import {getNearbyPlaces, getReviews} from "../../reducer/data/selectors";

const getPremium = (isPremium) => isPremium ?
  <div className="property__mark">
    <span>Premium</span>
  </div> :
  ``;

const Offer = ({offer, offer: {description, guests, host, isPremium, options, pictures, price, rating, room, title, type},
  offers, activeCity, onClickByHeader, onHoverPlace, status, reviews, nearbyPlaces}) => {

  return (
    <main className="page__main page__main--property">
      <section className="property">
        <OfferGallery
          pictures = {pictures}
          title = {title}
        />
        <div className="property__container container">
          <div className="property__wrapper">
            {getPremium(isPremium)}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {title}
              </h1>
              <button className="property__bookmark-button button" type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"/>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: getRating(rating)}}/>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {room} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {guests} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <Options options={options}/>
            <Host
              host = {host}
              description = {description}
            />
            <Reviews
              reviews={reviews}
              status = {status}
            />
          </div>
        </div>
        <Map
          type = {MapType.PROPERTY}
          offers = {offers}
          activeOffer={offer}
          city = {activeCity}
        />
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <PlacesList
            className = {PlacesListClass.PROPERTY}
            offers={nearbyPlaces}
            onClickByHeader={onClickByHeader}
            onHoverPlace={onHoverPlace}
          />
        </section>
      </div>
    </main>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape({
    isPremium: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(Object.values(TypePlace)).isRequired,
    rating: PropTypes.number.isRequired,
    pictures: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
    room: PropTypes.number.isRequired,
    guests: PropTypes.number.isRequired,
    options: PropTypes.array.isRequired,
    host: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    }).isRequired,
  }),
  offers: PropTypes.array.isRequired,
  activeCity: PropTypes.object.isRequired,
  onClickByHeader: PropTypes.func.isRequired,
  onHoverPlace: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
  reviews: PropTypes.array,
  nearbyPlaces: PropTypes.array,
};

const mapStateToProps = (state) => ({
  status: getAuthorizationStatus(state),
  offer: getActiveOffer(state),
  reviews: getReviews(state),
  nearbyPlaces: getNearbyPlaces(state),
});

export {Offer};
export default connect(mapStateToProps)(Offer);
