import logo from './logo.svg';
import './App.css';

function App() {

  const routes = [
    {name:"/register",method:"POST",input:{
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
    {name:"/login",method:"POST"},
    {name:"/user/:id",method:"PUT"},
    {name:"/user/:id",method:"GET"},
    {name:"/user/:id",method:"DEL"},
    {name:"/order/:orderID",method:"GET"},
    {name:"/order",method:"POST"},
    {name:"/order",method:"PUT"},
    {name:"/order/:id",method:"DEL"},
    {name:"/orders/seller/:sellerID",method:"GET"},
    {name:"/orders/customer/:customerid",method:"GET"},
    {name:"/user/:userid/wishlist/:wishlistid/add/:listingid",method:"GET"}, // why is this a get
    {name:"/wishlist/:wishlistid/delete/:listingid",method:"DEL"}
  ]
  return (
    <div>
      
    </div>
  );
}

export default App;
