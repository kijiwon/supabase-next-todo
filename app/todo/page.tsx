import { sleep } from "@/lib/utils";
import ClientComponent from "./components/ClientComponent";
import { getTodoAction } from "@/actions/todo/todo.action";

const page = async () => {
  console.log(">>SSR Start");
  const result = await getTodoAction();
  await sleep(1500);
  return (
    <div>
      todo page {JSON.stringify(result)}
      <ClientComponent />
    </div>
  );
};

export default page;
