import React from "react";
import CardItem from "./CardItem";

const CardsList = ({ items, password, hidden, setHidden, searchQuery }) => {
  const filteredResult = items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div
      className="cards-list"
      style={hidden ? { opacity: 1 } : { opacity: 0.25 }}
      onClick={() => (!hidden ? setHidden(true) : "")}
    >
      {filteredResult.map(({ id, name, price, stock, imageUrl }) => (
        <CardItem
          key={id}
          name={name}
          price={password ? price : ""}
          stock={stock}
          imageUrl={imageUrl}
        />
      ))}
    </div>
  );
};

export default CardsList;
