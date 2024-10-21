"use client";

import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";

const TodoListItem = ({ todo, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [userInput, setUserInput] = useState(todo.content ?? "");

  const onStartEdit = () => {
    setIsEdit(true);
  };
  // 수정 완료
  const onFinishEdit = () => {
    onUpdate(todo.id, userInput);
    setIsEdit(false);
  };

  // 삭제
  const onClickDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li className=" min-h-[60px] bg-[#b280d9] border border-black rounded-2xl font-bold group">
      <article className=" min-h-[60px] p-4 flex flex-col gap-4 sm:flex-row">
        {isEdit ? (
          <input
            className=" flex-1 text-[18px] "
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        ) : (
          <div
            onClick={onStartEdit}
            className=" flex-1 text-[18px] cursor-pointer"
          >
            {todo.content}
          </div>
        )}

        <div
          onClick={onFinishEdit}
          className=" w-fit hidden group-hover:flex self-end gap-[8px] "
        >
          {isEdit ? (
            <div
              onClick={onFinishEdit}
              className=" h-[45px] w-[45px] flex justify-center items-center bg-[#7ebb95] border border-black rounded-2xl cursor-pointer "
            >
              <CiCircleCheck size={30} />
            </div>
          ) : (
            <div
              onClick={onStartEdit}
              className=" h-[45px] w-[45px] flex justify-center items-center bg-[#7ebb95] border border-black rounded-2xl cursor-pointer "
            >
              <CiEdit size={30} />
            </div>
          )}
          <div
            onClick={onClickDelete}
            className=" h-[45px] w-[45px] flex justify-center items-center bg-[#ed7461] border border-black rounded-2xl cursor-pointer "
          >
            <AiOutlineDelete size={30} />
          </div>
        </div>
      </article>
    </li>
  );
};

export default TodoListItem;
