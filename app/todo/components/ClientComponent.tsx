"use client";

import { pingAction } from "@/actions/ping/ping.action";

const ClientComponent = () => {
  const handleClick = async () => {
    const result = await pingAction();
    console.log(result);
  };

  return (
    <div>
      client component
      <button onClick={handleClick}>test server actions</button>
    </div>
  );
};

export default ClientComponent;
