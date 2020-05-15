import React from "react";

export default function SearchInput({ onSearchSubmit, searchTerm, setTerm }) {

    return (<form onSubmit={onSearchSubmit} className="navigation-form-container">
        <input
            type="text"
            placeholder="What do you want to read?"
            autoComplete="off"
            value={searchTerm}
            onChange={setTerm}
        />
        <input type="submit" value="Search" />
    </form>)
}