import React from "react";
import { SubNavBar } from "../components/navBar/SubNavBar";

export const SearchPage = () => {
  const handleSearchBar = () => {
    console.log("검색바 출력");
  };
  return (
    <>
      <SubNavBar children={"검색"} search={true} handleFunc={handleSearchBar} />
      <div>SearchPage</div>
    </>
  );
};
