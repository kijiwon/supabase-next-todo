import { sleep } from "@/lib/utils";

const page = async () => {
  await sleep(1500);
  return <div>page</div>;
};

export default page;
