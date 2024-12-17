import starFilled from "/assets/star-filled.png"
import starEmpty from "/assets/star-empty.png"
export default function Star(props){
    let starIcon = props.isFilled ? starFilled : starEmpty
    return(
        <>
        <button onClick={props.handleFilled}
                aria-pressed={props.isFilled}
                aria-label={props.isFilled ? "Remove from favorites" : "Add to favorites"}
                className="favorite-button">
                <img
                    src={starIcon}
                    alt={props.isFilled ? "filled star icon" : "empty star icon"}
                    className="favorite"
                />
            </button>
        </>
    )
}