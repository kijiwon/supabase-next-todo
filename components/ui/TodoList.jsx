import { IoShareSocialOutline } from "react-icons/io5";
import { useCopyToClipboard } from "usehooks-ts";
import { IoSearchOutline } from "react-icons/io5";
import TodoListItem from "./TodoListItem";
import { useState } from "react";
import TodoListItemReadonly from "./TodoListItemReadOnly";

const TodoList = ({
  sharedUserFulName = "",
  ownerUserId = "",
  loading = false,
  todoListData = [],
  isReadOnly = false,
  onCreate = () => {},
  onUpdate = (id, updatedContent) => {},
  onDelete = (id) => {},
  onSearch = (terms) => {},
}) => {
  const [copiedText, copy] = useCopyToClipboard();
  const [userSearchInput, setUserSearchInput] = useState("");

  const handleSearchEnd = () => {
    onSearch(userSearchInput);
    setUserSearchInput("");
  };
  const handleCopy = () => {
    const shareLink = `${process.env.NEXT_PUBLIC_AUTH_REDIRECT_TO_HOME}/share/${ownerUserId}`;
    copy(shareLink)
      .then(() => {
        window.alert(`공유 링크 ${shareLink}`);
      })
      .catch((error) => {
        console.log("failed to copy", error);
      });
  };

  return (
    <div className=" min-h-[70vh] bg-[#69CFCF] ">
      <div className=" w-full max-w-[800px] p-[20px] mx-auto">
        <article className=" flex flex-row justify-between items-center">
          <div className=" font-bold text-[32px]">
            {sharedUserFulName && <div>{sharedUserFulName}</div>}
            Things to do
          </div>
          {ownerUserId && (
            <div
              onClick={handleCopy}
              className=" font-bold text-[20px] flex flex-row items-center cursor-pointer"
            >
              Share
              <IoShareSocialOutline />
            </div>
          )}
        </article>
        {!isReadOnly && (
          <article className=" flex flex-col sm:flex-row gap-4 mt-8">
            <div className=" flex flex-1 h-[60px]">
              <input
                value={userSearchInput}
                onChange={(e) => setUserSearchInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleSearchEnd();
                }}
                className=" p-4 flex-1 bg-[#f7cb66] border border-black rounded-l-2xl font-bold"
              />
              <div
                onClick={() => handleSearchEnd()}
                className=" w-[60px] flex justify-center items-center bg-black rounded-r-2xl cursor-pointer "
              >
                <IoSearchOutline size={40} color="#fff" />
              </div>
            </div>
            <div
              onClick={onCreate}
              className=" h-[60px] w-[200px] flex justify-center items-center bg-[#7ebb95] border border-black rounded-2xl font-bold cursor-pointer text-[20px]"
            >
              New Task
            </div>
          </article>
        )}

        <div className="h-[2px] my-10 bg-black"></div>
        {todoListData?.length >= 1 ? (
          <ul className=" flex flex-col gap-6">
            {/* todoListData가 존재하지 않으면 빈 배열을 기본값으로 넘김 */}
            {(todoListData ?? []).map((todo) => {
              if (isReadOnly)
                return <TodoListItemReadonly key={todo?.id} todo={todo} />;
              return (
                <TodoListItem
                  key={todo?.id}
                  todo={todo}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              );
            })}
          </ul>
        ) : (
          <div>{loading ? "loading..." : "Empty!"}</div>
        )}
      </div>
    </div>
  );
};

export default TodoList;
