import React from "react";
import { useSelector } from "react-redux";
import { Claim } from "../types/redux";

export default function Header() {
  const treasure = useSelector((state: any) => state.treasure);
  const claims = useSelector((state: any) => state.claims);
  const policies = useSelector((state: any) => state.policies);

  const calcRatio = () => {
    const sum = claims.length;
    const approved = claims.filter((c: Claim) => c.approved).length;
    return (100 * approved) / sum;
  };

  return (
    <div className="full">
      <h1>${treasure.toFixed(2)}</h1>
      <div className="stats">
        <div className="customers">
          <h1>{policies.length}</h1>
          <h4>Active customers</h4>
        </div>
        <div className="open-claims">
          <h1>{claims.length}</h1>
          <h4>Open Claims</h4>
        </div>
        <div className="approved">
          <h1>{calcRatio()}%</h1>
          <h4>Approved ratio</h4>
        </div>
      </div>
    </div>
  );
}
