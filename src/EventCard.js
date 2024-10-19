function EventCard({title, date, location}) {
    return ( 
        <div className="eventElem">
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{location}</p>
            <button>Подробнее</button> 
        </div>
    );
}

export default EventCard;