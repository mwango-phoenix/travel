import Flight from "./flight";

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
