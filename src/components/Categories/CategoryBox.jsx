import React from "react";

const CategoryBox = ({ label, icon: Icon }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 bg-transparent text-neutral-500 hover:text-neutral-800 p-3 border-b-2 cursor-pointer">
      <Icon size={26} />
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default CategoryBox;
