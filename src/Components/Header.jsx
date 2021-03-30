import React from "react";
import { ReactComponent as LockIcon } from "../Assets/lock.svg";
import SearchBar from "./SearchBar";

const Header = ({ hidden, password, togglePopUp, setSearchQuery }) => (
  <div className="header">
    <span className="logo pointer" onClick={() => window.scrollTo(0, 0)}>Shoppy</span>
    <SearchBar setSearchQuery={setSearchQuery}/>
    {password !== 'WELCOME' ? (
      <div className="lock-button pointer" onClick={() => togglePopUp(!hidden)}>
        <LockIcon className="lock-icon" />
        unlock prices
      </div>
    ) : (
      ""
    )}
  </div>
);

export default Header;
