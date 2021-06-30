import InformationContainer from "./InfoContainer";

export default function AccommodationIn({start, inTime, name, address}) {
    return (
        <>
            <InformationContainer
                icon="🏩"
                upperDesc={`${start} ${inTime}`}
                lowerDesc={`${name}, ${address}`}
            />
        </>
    )
}