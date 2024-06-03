import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";

const CategoryBox = ({ label, icon: Icon }) => {
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    let currentQuery = { category: label };
    const url = queryString.stringifyUrl({
      url: "/",
      query: currentQuery,
    });
    navigate(url);
  };
  return (
    <div
      onClick={handleCategoryClick}
      className="flex flex-col items-center justify-center gap-2 bg-transparent text-neutral-500 hover:text-neutral-800 p-3 border-b-2 cursor-pointer"
    >
      <Icon size={26} />
      <p className="text-sm font-medium">{label}</p>
    </div>
  );
};

export default CategoryBox;
