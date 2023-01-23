export default function CardEmployee({
    role = "none",
    colour = "purple",
    font = "0",
    image = "icon/business.png"
}) {
    return(
        <div style={{backgroundColor: colour, fontSize:font}}>
            {
                colour === "#946E83" ? <img src={'icon/business.jpeg'} width="50"/> :
                colour === "#605770" ? <img src={'icon/computing.jpeg'} width="50"/>:
                                     <img src={image} width="50"/>
            }
            {role}
        </div>
    )
}