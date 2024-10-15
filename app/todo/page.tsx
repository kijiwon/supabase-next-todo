import { pingAction } from "@/actions/ping/ping.action";
import { sleep } from "@/lib/utils";

const page = async () => {
  console.log(">>SSR Start");
  const result = await pingAction();
  await sleep(1500);
  return <div>todo page {result}</div>;
};

export default page;
