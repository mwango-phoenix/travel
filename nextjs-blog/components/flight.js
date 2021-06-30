import InformationContainer from "./InfoContainer";

export default function Flight({departureTime, arrivalTime, date, destination, origin}) {
    return (
        <>
            <InformationContainer
                icon="✈"
                upperDesc={`${date} ${departureTime} ${origin}`}
                lowerDesc={`${date} ${arrivalTime} ${destination}`}
            />
        </>
    )
}