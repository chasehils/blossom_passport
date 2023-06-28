// import './MenuList.css';
import FlowerListItem from '../FlowerListItem/FlowerListItem';

export default function FlowerList({ flowerItems = [], handleAddToOrder }) {
  const items = flowerItems.map(item =>
    <FlowerListItem
      key={item._id}
      flowerItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="FlowerList">
      {items}
    </main>
  );
}