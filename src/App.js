import './App.css';
import { useState } from 'react';
import RouteDoc from './RouteDoc';

function App() {

  const [route,setRoute] = useState({})

  const routes = [
    {name:"Register user",route:"/register",method:"POST",input:{
    "email": "j.miller@mail.com",
    "password": "12345678",
    "display_name": "John Miller",
    "address": {
        "first_name": "John",
        "last_name": "Miller",
        "street": ["123 South Main St", "Apt 455"],
        "city": "Salt Lake City",
        "state": "UT",
        "country": "USA"
    }
    },output:{"user_uuid":"8dc67b23-8fd8-430f-8e84-b0ac62c254d1"}},
    {name:"Login",route:"/login",method:"POST",input:{"user_email":"j.miller@mail.com","password":"12345678"},output:{"user_uuid":"8dc67b23-8fd8-430f-8e84-b0ac62c254d1"}},
    {name:"Update user",route:"/user/:id",method:"PUT",input:{
      "email": "j.miller@mail.com",
      "password": "12345678",
      "display_name": "John Miller",
      "address": {
          "first_name": "John",
          "last_name": "Miller",
          "street": ["123 South Main St", "Apt 455"],
          "city": "Salt Lake City",
          "state": "UT",
          "country": "USA"
      }
      },output:{"response":"Update successful"}},
    {name:"Get user by id",route:"/user/:id",method:"GET",output:{
      "email": "j.miller@mail.com",
      "password": "12345678",
      "display_name": "John Miller",
      "address": {
          "first_name": "John",
          "last_name": "Miller",
          "street": ["123 South Main St", "Apt 455"],
          "city": "Salt Lake City",
          "state": "UT",
          "country": "USA"
      }
      }},
    {name:"Delete user",route:"/user/:id",method:"DEL",output:{"response":"Delete successful"}},
    {name:"Delete listing",route:"/listing/:id",method:"DEL",output:{"response":"Delete successful"}},
    {name:"Create listing",route:"/listing",method:"POST",input:{
  "seller_id":6,
  "name":"Bag",
  "description":"A bag what you can use",
  "is_public":true,
  "price":"50",
  "tags": [
      "Clothing",
      "accessories"
  ],
  "options": {
      "color": [
          {"option_name":"Red","option_price":"0"},
          {"option_name":"Blue","option_price":"0"},
          {"option_name":"Green","option_price":"0"},
          {"option_name":"Gold","option_price":"5"}
      ]
  }
},output:{
    "listing_id": 43,
    "listing_uuid": "d86a4c95-52a5-4712-b090-258ecdf35ed4",
    "listing_name": "Bag",
    "seller_uuid": "dec565f9-2fc5-4278-8186-de1bfd379036",
    "seller_name": "James Miller",
    "listing_description": "A bag what you can use",
    "listing_is_public": 1,
    "listing_price": 50,
    "tags": [
        "clothing",
        "accessories"
    ],
    "options": {
        "color": [
            {
                "name": "Red",
                "price": 0
            },
            {
                "name": "Blue",
                "price": 0
            },
            {
                "name": "Green",
                "price": 0
            },
            {
                "name": "Gold",
                "price": 5
            }
        ]
    }
}},{name:"Get listing by id",route:"/listing/:uuid",method:"GET",output:{
    "listing_id": 43,
    "listing_uuid": "d86a4c95-52a5-4712-b090-258ecdf35ed4",
    "listing_name": "Bag",
    "seller_uuid": "dec565f9-2fc5-4278-8186-de1bfd379036",
    "seller_name": "James Miller",
    "listing_description": "A bag what you can use",
    "listing_is_public": 1,
    "listing_price": 50,
    "tags": [
        "clothing",
        "accessories"
    ],
    "options": {
        "color": [
            {
                "name": "Red",
                "price": 0
            },
            {
                "name": "Blue",
                "price": 0
            },
            {
                "name": "Green",
                "price": 0
            },
            {
                "name": "Gold",
                "price": 5
            }
        ]
    }
}},{name:"Search Listings",route:"/search?q={searchQuery}",method:"GET",output:[
    {
        "listing_id": 43,
        "listing_uuid": "d86a4c95-52a5-4712-b090-258ecdf35ed4",
        "listing_name": "Bag",
        "seller_uuid": "dec565f9-2fc5-4278-8186-de1bfd379036",
        "seller_name": "James Miller",
        "listing_description": "A bag what you can use",
        "listing_is_public": 1,
        "listing_price": 50
    },
    {
        "listing_id": 48,
        "listing_uuid": "3c22b18a-ed18-467b-9cbd-7a9bf1feb950",
        "listing_name": "Necklace",
        "seller_uuid": "dec565f9-2fc5-4278-8186-de1bfd379036",
        "seller_name": "James Miller",
        "listing_description": "Short necklace on a silver chain with different gems",
        "listing_is_public": 1,
        "listing_price": 50
    }
]}
    // {name:"/orders/seller/:sellerID",method:"GET"},
    // {name:"/orders/customer/:customerid",method:"GET"},
    // {name:"/user/:userid/wishlist/:wishlistid/add/:listingid",method:"GET"}, // why is this a get
    // {name:"/wishlist/:wishlistid/delete/:listingid",method:"DEL"}
  ]
  return (
    <div className='container'>
      <div className='sidebar'>{routes.map(routeData => (
        <p><a className={routeData.name == route.name ? "focus" : ""} onClick={() => setRoute(routeData)}>{routeData.name}</a></p>
      ))}</div>
      <RouteDoc routeData={route} />
    </div>
  );
}

export default App;
