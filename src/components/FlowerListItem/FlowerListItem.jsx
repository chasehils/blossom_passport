import './FlowerListItem.css';


export default function FlowerListItem({ flowerItem, handleAddToOrder }) {
  return (
    <div className="FlowerListItem">
      <div className="image flex-ctr-ctr">
      <img src={flowerItem.image} alt={flowerItem.name} />
      </div>
      <div className="name">{flowerItem.name}</div>
      <div className="buy">
        <span>${flowerItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(flowerItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}