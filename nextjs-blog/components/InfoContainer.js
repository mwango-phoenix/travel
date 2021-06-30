export default function InformationContainer({icon, upperDesc, lowerDesc}) {
    return (
        <>
            <div>
                <p>{icon}</p>
                <p>{upperDesc}</p>
                <p>{lowerDesc}</p>
            </div>
        </>
    )
}