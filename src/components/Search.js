import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Search(props){

    return(
        <div className="Search">
            <h2>Expenses</h2>
            <div className="searchbar">
                <FontAwesomeIcon id="searchIcon" icon={faSearch} size="lg"/>
                <input 
                    type='text'
                    className="searchInput" 
                    placeholder="Type to search"
                    onChange = {props.handleChange}
                    >
                </input>
            </div>
        </div>
    )
}

