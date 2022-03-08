import './styles.css';

function Pad(props) {

    function handleClick(ev) {
        ev.target.children[0].play()
    }

    return (
        <div className="pad" id={`pad-${props.id}`} onClick={handleClick}>
            {props.pad}
            <audio className="clip" id={props.pad}>
                <source src={props.src} />    
            </audio>
        </div>
    )
}

export default Pad;


