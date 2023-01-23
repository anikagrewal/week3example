export default function CardTwo({
    role = "none",
    colour = "purple",
    font = "0",
    image = "icon/personTwo.png"
}) {
    return(
        <div style={{backgroundColor: colour, fontSize:font}}>
            {
                colour === "green" ? <img src={'icon/person.png'} width="50"/> :
                colour === "blue" ? <img src={'icon/personThree.png'} width="50"/>:
                                     <img src={image} width="50"/>
            }
            {role}
        </div>
    )
}