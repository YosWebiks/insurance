import React from "react";
import { Policy } from "../../../types/redux";
import { Link } from "react-router-dom";

interface Props {
  policy: Policy;
}

export default function PolicyItem({ policy }: Props) {
  return (
    <div>
      <h3>
        {policy.name}({policy.age}), ${policy.price}{" "}
        <Link to={`/policies/${policy.id}`}>Details</Link>
      </h3>
    </div>
  );
}
