import "./SubHeading.css";

const star = `${process.env.REACT_APP_API_URL}/assests/star.png`;

const SubHeading = ({text}) => {
    return(
        <p className="heading_sub">
            <img src={star} alt={text ? text : "Star"} className="star_icon" />
            {text ? text : "IosAndWeb Tech"}
        </p>
    )
}

export default SubHeading