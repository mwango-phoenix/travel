import InformationContainer from "./InfoContainer";

export default function AccommodationOut({end, outTime, name, address}) {
    return (
        <>
            <InformationContainer
                icon="🏩"
                upperDesc={`${end} ${outTime}`}
                lowerDesc={`${name}, ${address}`}
            />
        </>
    )
}