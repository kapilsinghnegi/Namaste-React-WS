import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.png";

/* 
Header
    -Logo
    -Nav items
Body
    -Search
    -Restaurant Container
        -Restaurant Card
            -image
            -name
            -star
            -cuisine
            -price 
Footer
    -Copyright
    -Links
    -Address
    -Contact
*/

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={ logo } />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

const Restaurants = [
    {
        "info": {
            "id": "65797",
            "name": "Leon's - Burgers & Wings (Leon Grill)",
            "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "American",
                "Snacks",
                "Turkish",
                "Portuguese",
                "Continental"
            ],
            "avgRating": 4.4,
            "parentId": "371281",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 6.4,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-07 04:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹499",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-koramangala-bangalore-65797",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "16073",
            "name": "California Burrito",
            "cloudinaryImageId": "27238ee4292d42c7b705f2ce8671ff80",
            "locality": "Malleshwaram",
            "areaName": "Malleshwaram",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Mexican",
                "American",
                "Salads",
                "Continental",
                "Keto",
                "Healthy Food"
            ],
            "avgRating": 4.6,
            "parentId": "1252",
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-06 23:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/california-burrito-malleshwaram-bangalore-16073",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "8766",
            "name": "Beijing Bites",
            "cloudinaryImageId": "ca0eb08d0635fd6da2e5a480fec897d0",
            "locality": "Richmond Town",
            "areaName": "Richmond Town",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "Chinese"
            ],
            "avgRating": 4.3,
            "parentId": "103",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 2.4,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-07 00:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/beijing-bites-richmond-town-bangalore-8766",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "18987",
            "name": "Nandhana Palace",
            "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
            "locality": "Amarjyothi Layout",
            "areaName": "Domlur",
            "costForTwo": "₹500 for two",
            "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian",
                "North Indian"
            ],
            "avgRating": 4.3,
            "parentId": "2120",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 6.9,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-07 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/nandhana-palace-amarjyothi-layout-domlur-bangalore-18987",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "503961",
            "name": "Istah - The Mediterranean Way",
            "cloudinaryImageId": "9a01f2935fcb5ae05426db8264062102",
            "locality": "Akkithimanahalli",
            "areaName": "Santhi Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Mediterranean",
                "Snacks",
                "Biryani",
                "Grill",
                "Kebabs",
                "Arabian",
                "Lebanese",
                "Beverages",
                "Desserts",
                "Italian",
                "Turkish"
            ],
            "avgRating": 4.5,
            "parentId": "3518",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 2.7,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-07 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                        "description": "OnlyOnSwiggy"
                    }
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "OnlyOnSwiggy",
                                    "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹110"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/istah-the-mediterranean-way-akkithimanahalli-santhi-nagar-bangalore-503961",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "302697",
            "name": "Barbeque Nation",
            "cloudinaryImageId": "d3najev2rpzakxfvp318",
            "locality": "Rajajinagar",
            "areaName": "Rajajinagar",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "North Indian",
                "Barbecue",
                "Biryani",
                "Kebabs",
                "Mughlai",
                "Desserts"
            ],
            "avgRating": 3.9,
            "parentId": "2438",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 4.7,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "4.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-06 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹399",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/barbeque-nation-rajajinagar-bangalore-302697",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "63048",
            "name": "Sharief Bhai",
            "cloudinaryImageId": "9ca4ac15ca5cdee1e71efe15909d465f",
            "locality": "Frazer Town",
            "areaName": "Frazer Town",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Biryani",
                "Kebabs",
                "Mughlai",
                "Arabian",
                "South Indian",
                "Rolls & Wraps",
                "Street Food",
                "Fast Food",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.3,
            "parentId": "5734",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-07 03:01:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sharief-bhai-frazer-town-bangalore-63048",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "5938",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Tasker Town",
            "areaName": "Shivaji Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.2,
            "parentId": "166",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 2.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-07 02:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹129"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-tasker-town-shivaji-nagar-bangalore-5938",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "347868",
            "name": "KFC",
            "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
            "locality": "Cunnigham road",
            "areaName": "Vasanth Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4,
            "parentId": "547",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-07 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-cunnigham-road-vasanth-nagar-bangalore-347868",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "10575",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Shanti Nagar",
            "areaName": "Shanti Nagar",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 4.1,
            "parentId": "721",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 28,
                "lastMileTravel": 2.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-07 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹179"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-shanti-nagar-bangalore-10575",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "45871",
            "name": "Subway",
            "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
            "locality": "Brigade Road",
            "areaName": "Central Bangalore",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Fast Food",
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.2,
            "parentId": "2",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-06 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹599",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-brigade-road-central-bangalore-bangalore-45871",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "23847",
            "name": "Domino's Pizza",
            "cloudinaryImageId": "fjqcvqfgqlw6h0atques",
            "locality": "Rest House Road",
            "areaName": "Brigade Road",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Pizzas",
                "Italian",
                "Pastas",
                "Desserts"
            ],
            "avgRating": 4.4,
            "parentId": "2456",
            "avgRatingString": "4.4",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 25,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-06 22:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹150 OFF",
                "subHeader": "ABOVE ₹299",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/dominos-pizza-rest-house-road-brigade-road-bangalore-23847",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "43836",
            "name": "McDonald's",
            "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
            "locality": "MG Road",
            "areaName": "Ashok Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Beverages",
                "Cafe",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "630",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 0.7,
                "serviceability": "SERVICEABLE",
                "slaString": "15-20 mins",
                "lastMileTravelString": "0.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-07 02:55:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-mg-road-ashok-nagar-bangalore-43836",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "5167",
            "name": "Theobroma",
            "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
            "locality": "2nd stage",
            "areaName": "Indiranagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Bakery",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.6,
            "parentId": "1040",
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 7.3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "7.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-06 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                        "shortDescription": "Perfect Cake Delivery",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                    "shortDescription": "Perfect Cake Delivery"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "discountTag": "FLAT DEAL"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/theobroma-2nd-stage-indiranagar-bangalore-5167",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "30531",
            "name": "Hotel Empire",
            "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
            "locality": "Brigade Road",
            "areaName": "Church Street",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "North Indian",
                "Kebabs",
                "Biryani"
            ],
            "avgRating": 4.4,
            "parentId": "475",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-07 03:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hotel-empire-brigade-road-church-street-bangalore-30531",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "279060",
            "name": "Sikandar Rolls",
            "cloudinaryImageId": "m6c0uvtstsvvnzb99fkm",
            "locality": "Barton Centre",
            "areaName": "M G Road",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Kebabs",
                "Beverages",
                "Desserts"
            ],
            "avgRating": 4.6,
            "parentId": "470950",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-06 23:15:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/sikandar-rolls-barton-centre-m-g-road-bangalore-279060",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "3369",
            "name": "Truffles",
            "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
            "locality": "St. Marks Road",
            "areaName": "St. Marks Road",
            "costForTwo": "₹450 for two",
            "cuisines": [
                "American",
                "Desserts",
                "Continental",
                "Italian"
            ],
            "avgRating": 4.6,
            "parentId": "218065",
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 0.9,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "0.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-06 23:30:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                        "shortDescription": "Perfect Cake Delivery",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "v1705582451/Ratnesh_Badges/Listing_HR.png",
                                    "shortDescription": "Perfect Cake Delivery"
                                }
                            }
                        ]
                    }
                }
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/truffles-st-marks-road-bangalore-3369",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "396108",
            "name": "Suzy Q",
            "cloudinaryImageId": "als9xfk5lkrvizbq3lhx",
            "locality": "Cunningham Road",
            "areaName": "Cunningham Road",
            "costForTwo": "₹800 for two",
            "cuisines": [
                "Indian",
                "Continental",
                "Seafood",
                "Asian",
                "Chaat",
                "Desserts"
            ],
            "avgRating": 4.3,
            "parentId": "454247",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 1.8,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "1.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-06 23:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/suzy-q-cunningham-road-bangalore-396108",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "352792",
            "name": "Grameen Kulfi",
            "cloudinaryImageId": "garnimnzruqmizx2acjt",
            "locality": "Robertson Road",
            "areaName": "Frazer Town",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.7,
            "veg": true,
            "parentId": "12175",
            "avgRatingString": "4.7",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 4.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-06 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/grameen-kulfi-robertson-road-frazer-town-bangalore-352792",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "29063",
            "name": "Misu",
            "cloudinaryImageId": "lx0tpfgsbqygafwh30wh",
            "locality": "St. Marks Road",
            "areaName": "St. Marks Road",
            "costForTwo": "₹1300 for two",
            "cuisines": [
                "Asian",
                "Chinese",
                "Vietnamese",
                "Malaysian",
                "Sushi",
                "Singaporean",
                "Desserts"
            ],
            "avgRating": 4.6,
            "parentId": "7415",
            "avgRatingString": "4.6",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 0.8,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "0.8 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-07 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ],
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/misu-st-marks-road-bangalore-29063",
            "type": "WEBLINK"
        }
    }
]

const RestaurantCard = ({resData}) => {
    const { 
            cloudinaryImageId,
            name, 
            cuisines, 
            avgRating, 
            totalRatingsString, 
            costForTwo, 
            deliveryTime
        } = resData?.info;
    return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0" }}>
            <img 
                alt="Restaurant Image" 
                className="res-img" 
                src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                    cloudinaryImageId
                }
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}<span className="star">⭐</span> {totalRatingsString} ratings</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard 
                    resData={Restaurants[0]}
                />
                <RestaurantCard resData={Restaurants[1]} />
                <RestaurantCard resData={Restaurants[2]} />
                <RestaurantCard resData={Restaurants[3]} />
                <RestaurantCard resData={Restaurants[4]} />
                <RestaurantCard resData={Restaurants[5]} />
                <RestaurantCard resData={Restaurants[6]} />
                <RestaurantCard resData={Restaurants[7]} />
                <RestaurantCard resData={Restaurants[8]} />
                <RestaurantCard resData={Restaurants[9]} />
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);