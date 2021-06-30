import InformationContainer from "./InfoContainer";

export default function Activity({type, time, date, name, address}) {
    return (
        <>
            <InformationContainer
                icon="🎡"
                upperDesc={`Activity: ${type}, When: ${date} ${time}`}
                lowerDesc={`${name}, ${address}`}
            />
        </>
    )
}