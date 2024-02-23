import { CDN_URL } from "../utils/constants"; 
const RestaurantCard = ({resData}) => {
    const { 
            cloudinaryImageId,
            name, 
            cuisines, 
            avgRating, 
            totalRatingsString, 
            costForTwo, 
            sla
        } = resData?.info;
    return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0" }}>
            <img 
                alt="Restaurant Image" 
                className="res-img" 
                src={ CDN_URL  + cloudinaryImageId }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}<span className="star">⭐</span> {totalRatingsString} ratings</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla?.slaString} minutes</h4>
        </div>
    );
};

export default RestaurantCard;