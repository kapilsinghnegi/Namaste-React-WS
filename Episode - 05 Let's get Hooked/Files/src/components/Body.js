import RestaurantCard from "./RestaurantCard";
import Restaurants from "../utils/mockData";
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
            {Restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
            </div>
        </div>
    );
};

export default Body;