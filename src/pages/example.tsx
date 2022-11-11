import { useRouter } from "next/router";
import React from "react";

export default function example() {
  const router = useRouter();
  return (
    <div>
      <h1>Example</h1>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go back
      </button>
    </div>
  );
}
