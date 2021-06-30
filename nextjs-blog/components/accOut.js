import InformationContainer from "./InfoContainer";

export default function AccommodationOut({end, outTime, name, address}) {
    return (
        <>
            <InformationContainer
                icon="🏩"
                upperDesc={`Check Out: ${end} ${outTime}`}
                lowerDesc={`${name}, ${address}`}
            />
        </>
    )
}