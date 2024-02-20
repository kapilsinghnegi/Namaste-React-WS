import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react"; 

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    return listOfRestaurants.length===0 ? <Shimmer /> : (
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