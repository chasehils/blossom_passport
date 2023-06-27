import './MenuList.css';
import MenuListItem from '../MenuListItem/MenuListItem';

export default function FlowerList({ flowerItems, handleAddToOrder }) {
  const items = menuItems.map(item =>
    <FlowerListItem
      key={item._id}
      menuItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="MenuList">
      {items}
    </main>
  );
}