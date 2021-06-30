import InformationContainer from "./InfoContainer";

export default function Flight({departTime, arriveTime, date, dest, origin}) {
    return (
        <>
            <InformationContainer
                icon="✈"
                upperDesc={`${date} ${departTime} ${origin}`}
                lowerDesc={`${date} ${arriveTime} ${dest}`}
            />
        </>
    )
}