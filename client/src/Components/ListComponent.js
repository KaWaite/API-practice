import React, { useState, useEffect } from "react";

export default function ListComponent(props) {
  useEffect(() => {
    fetchItems();
  }, []);

  // ****useEffect setting state for local api in server.js****
  const [Items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("/api/test");
    const Items = await data.json();
    setItems(Items);
  };
  // **********************************************************

  return (
    <div className={props.classes.area}>
      <h2>{props.title}</h2>
      <ul className={props.classes.list}>
        {Items.map(item => (
          <li key={item.id}>
            {item.id}: {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
