import React from 'react';
import { Link } from 'react-router';
import events from '../data/events';
import CommentsIndex from './comments_index';

export default class EventPage extends React.Component {
  render () {
    const id = this.props.params.id;
    const event = events.filter((event) => event.id === id)[0];
    if (!event) {
      return <div> not found! </div>
    }
    return (
        <div className="event-page text-center">
          <div className="event-container">
            <img className="event-image" src={`/images/${event.image}`}/>
            <h2 className="name">{event.name}</h2>
            <p className="name">Date: {event.date}</p>
            <p className="name">Artist(s) Featured: {event.artist}</p>
            <p className="name">Genre: {event.genre}</p>
            <p className="name">Description: {event.description}</p>
             <Link className="comment-button" to="/comments/new"> <div className="comment-text">Post a Comment</div></Link>
             <a className="tickets-button" href={event.link}><div className="tickets-text">Buy Tickets</div></a>
          </div>
          <h1> Comments:</h1>
          <CommentsIndex/>
        </div>
    )
  }
}
