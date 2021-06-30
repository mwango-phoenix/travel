export default function InformationContainer({icon, upperDesc, lowerDesc}) {
    return (
        <>
            <div className="information-container">
                <span className="icon">{icon}</span>
                <span className="upper">{upperDesc}</span>
                <span className="lower">{lowerDesc}</span>
            </div>
            <style jsx>{`
                .information-container {
                    display: grid;
                    grid-template-areas: "icon upper" 
                                         "icon lower";
                    grid-gap: 10px;
                    background: #f2f8fb;
                    border-radius: 8px;
                    padding: 10px;
                }
                .icon {
                    grid-area: icon;
                    display: flex;
                    align-items: center;
                }
                .upper {
                    grid-area: upper;
                }
                .lower {
                    grid-area: lower;
                }
            `}
            

            </style>
        </>
    )
}