import { pingAction } from "@/actions/ping/ping.action";
import { sleep } from "@/lib/utils";
import ClientComponent from "./components/ClientComponent";

const page = async () => {
  console.log(">>SSR Start");
  const result = await pingAction();
  await sleep(1500);
  return (
    <div>
      todo page {result}
      <ClientComponent />
    </div>
  );
};

export default page;
