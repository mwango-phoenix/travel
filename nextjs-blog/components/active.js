import InformationContainer from "./InfoContainer";

export default function Activity({type, time, date, name, address}) {
    return (
        <>
            <InformationContainer
                icon="🎡"
                upperDesc={`${type}, ${date} ${time}`}
                lowerDesc={`${name}, ${address}`}
            />
        </>
    )
}