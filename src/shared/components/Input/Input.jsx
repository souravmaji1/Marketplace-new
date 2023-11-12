import React from "react";

export const Input = ({
  type = "text",
  onChange,
  value,
  placeholder,
  icon,
}) => {
  return (
    <div className="w-full h-full bg-white rounded-2xl border border-zinc-500 justify-start items-center gap-3 inline-flex px-5 py-4 ">
      {icon ? <div className="w-5 h-5 relative">{icon}</div> : null}
      <div className="grow shrink basis-0 text-zinc-800 text-[16px] font-normal leading-snug">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full h-full border-none outline-none focus:outline-none focus:ring-white`}
        />
      </div>
    </div>
  );
};
