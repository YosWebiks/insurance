import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewPolicy } from "../../../redux/store";

export default function AddNewPolicy() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(30);
  const [price, setPrice] = useState(100);
  const dispatch = useDispatch()

  const handleSubmit = () => {
    dispatch(addNewPolicy({name,age,price}))
    setName("")
  };

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={age}
        placeholder="Age"
        onChange={(e) => setAge(e.target.valueAsNumber)}
      />
      <input
        type="number"
        value={price}
        placeholder="Price"
        onChange={(e) => setPrice(e.target.valueAsNumber)}
      />
      <button onClick={handleSubmit}>Book a Policy</button>
    </div>
  );
}
