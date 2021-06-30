import Flight from "./flight";

export default function Itinerary({props}) {
    return (
        <>
            <Flight 
                departTime="5:00"
                arriveTime="18:00"
                date="Jul 5"
                dest="HND"
                origin="YYZ"
            />
        </>
    )
}
