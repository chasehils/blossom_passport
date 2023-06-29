import { Link } from "react-router-dom";


export default function NavBar() {
  return (
    <div class="navBar">
   <Link to="orders/new">New Order</Link>
   <Link to="orders">Order History</Link>
   <Link to="account">My Account</Link>
    </div>
  )
}