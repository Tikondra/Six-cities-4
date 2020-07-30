import * as React from "react";
import {nanoid} from "nanoid";

interface Props {
  options: [];
}

const getOption = (options) => options.map((it) => {
  return <li key={nanoid()} className="property__inside-item">
    {it}
  </li>;
});

const Options: React.FC<Props> = ({options}) => {

  return <div className="property__inside">
    <h2 className="property__inside-title">What&apos;s inside</h2>
    <ul className="property__inside-list">
      {getOption(options)}
    </ul>
  </div>;
};

export default Options;