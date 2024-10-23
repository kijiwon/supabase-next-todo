"use client";

const TodoListItemReadonly = ({ todo }) => {
  return (
    <li className=" min-h-[60px] bg-[#b280d9] border border-black rounded-2xl font-bold group">
      <article className=" min-h-[60px] p-4 flex flex-col gap-4 sm:flex-row">
        <div
          onClick={onStartEdit}
          className=" flex-1 text-[18px] cursor-pointer"
        >
          {todo.content}
        </div>
      </article>
    </li>
  );
};

export default TodoListItemReadonly;
