import React from 'react'
import ReactGA from 'react-ga';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="social">
      <ReactGA.OutboundLink
        eventLabel="Clicked Facebook link"
        to="https://www.facebook.com/events/2013944188890159/?acontext=%7B%22ref%22%3A%2229%22%2C%22ref_notif_type%22%3A%22plan_user_invited%22%2C%22action_history%22%3A%22null%22%7D&notif_id=1506919579574345&notif_t=plan_user_invited"
        target="_blank">
        <i className="fa fa-facebook-official" aria-hidden="true"></i>
      </ReactGA.OutboundLink>
       <ReactGA.OutboundLink
        eventLabel="Clicked Instagram link"
        to="https://www.instagram.com/comedrinkstuff/"
        target="_blank">
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </ReactGA.OutboundLink>
      <ReactGA.OutboundLink
        eventLabel="Clicked Eventbrite link"
        to="https://www.eventbrite.com/e/come-drink-stuff-01-vulcan-brewers-tickets-38309428532"
        target="_blank">
        <i className="fa fa-ticket" aria-hidden="true"></i>
      </ReactGA.OutboundLink>
      <ReactGA.OutboundLink
        eventLabel="Clicked Email link"
        to="mailto:info@comedrinkstuff.com">
        <i className="fa fa-envelope" aria-hidden="true"></i>
      </ReactGA.OutboundLink>


    </div>
      </footer>
    )
  }
}

export default Footer
