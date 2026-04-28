"use client";

import { colleges } from "@/data/colleges";

export default function ComparePage() {
  const first = colleges[0];
  const second = colleges[1];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Compare Colleges</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border p-4 rounded">
          <h2 className="text-xl font-bold">{first.name}</h2>
          <p>Fees: {first.fees}</p>
          <p>Rating: {first.rating}</p>
          <p>Placement: {first.placement}</p>
        </div>

        <div className="border p-4 rounded">
          <h2 className="text-xl font-bold">{second.name}</h2>
          <p>Fees: {second.fees}</p>
          <p>Rating: {second.rating}</p>
          <p>Placement: {second.placement}</p>
        </div>
      </div>
    </div>
  );
}