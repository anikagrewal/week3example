export default function CardEmployee({
    role = "none",
    colour = "purple",
    font = "0",
    image = "icon/personTwo.png"
}) {
    return(
        <div style={{backgroundColor: colour, fontSize:font}}>
            {
                colour === "green" ? <img src={'icon/person.png'} width="50"/> :
                colour === "#605770" ? <img src={'icon/personThree.png'} width="50"/>:
                                     <img src={image} width="50"/>
            }
            {role}
        </div>
    )
}