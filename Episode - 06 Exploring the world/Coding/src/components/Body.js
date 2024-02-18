import RestaurantCard from "./RestaurantCard";
import { useState } from "react"; 
import Restaurants from "../utils/mockData";


const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(Restaurants);
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="filter">
                <button 
                 className="filter-btn" 
                 onClick={() => {
                    const filteredLists = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4);
                        setListOfRestaurants(filteredLists);
                    }}
                >
                    Top-Rated Restaurants
                </button>
            </div>
            <div className="res-container">
            {listOfRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))}
            </div>
        </div>
    );
};

export default Body;