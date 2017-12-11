import React from "react";
import ReactGA from "react-ga";

ReactGA.initialize("UA-107493752-1");

const tracker = (WrappedComponent) => {
  const trackPage = (page) => {
    ReactGA.pageview(page);
  };

  const HOC = (props) => {
    const page = props.location.pathname;
    trackPage(page);

    return (
      <WrappedComponent {...props} />
    );
  };

  return HOC;
};

export default tracker;
