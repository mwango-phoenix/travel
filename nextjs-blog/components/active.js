import InformationContainer from "./InfoContainer";

export default function Activities({type, time, date, name, address}) {
    return (
        <>
            <InformationContainer
                icon="🎡"
                upperDesc={`${type} ${date}, ${time}`}
                lowerDesc={`${name}, ${address}`}
            />
        </>
    )
}