import { Link } from 'react-router-dom';
import SubscriptionLevelPage from '../AccountPage/SubscriptionLevelPage/SubscriptionLevelPage.component';

export default function AccountPage() {
  return (
    <>
      <h1>Account Page</h1>
      <ul>
        <li>
          <Link to="/my-account/subscription-level">Subscription Level</Link>
        </li>
        <li>
          <Link to="/my-account/order-history">Order History</Link>
        </li>
      </ul>
    </>
  );
}