import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Policy } from "../../../types/redux";

export default function PolicyDetails() {
  const { id } = useParams();
  const policy = useSelector((state:any)=> state.policies.find((p:Policy)=>p.id === id))

  return <div>
    Policy Details for {id} 
    <p>{JSON.stringify(policy)}</p>
    </div>;
}
