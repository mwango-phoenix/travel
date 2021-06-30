import AccommodationIn from "./accomodationIn";
import Flight from "./flight";
import Activity from "./active";
import AccommodationOut from "./accOut";

export default function Itinerary({itinerary}) {
    return (
        <>
            <div className="itinerary">
                {itinerary.flights.map(flight => (
                    <Flight
                        departureTime={flight.departureTime}
                        arrivalTime={flight.arrivalTime}
                        date={flight.date}
                        origin={flight.origin}
                        destination={flight.destination}
                        />
                ))}

                {itinerary.accomodation.map(place => (
                    <AccommodationIn
                        start={place.start}
                        inTime={place.checkIn}
                        name={place.name} 
                        address={place.address}
                    />
                ))}

                {itinerary.activities.map(activity => (
                    <Activity
                        type={activity.type} 
                        time={activity.time} 
                        date={activity.date} 
                        name={activity.name} 
                        address={activity.address}

                    />
                ))}

                {itinerary.accomodation.map(place => (
                    <AccommodationOut
                        end={place.end}
                        outTime={place.checkOut}
                        name={place.name} 
                        address={place.address}
                    />
                ))}
            </div>
            <style jsx>{`
                display: flex;
                flex-direction: column;
                grid-gap: 18px;
                padding 15px 0;
                width 50%;
            
            `}

            </style>
        </>
    )
}
