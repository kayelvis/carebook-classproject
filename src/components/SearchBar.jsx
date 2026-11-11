import React from 'react'
import { GoSearch } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";

function SearchBar() {
    return (
        <form className="home-search">
            <label className="home-search-field">
                <span className='sr-only'>Doctor's name</span>
                <GoSearch />
                <input type='text' placeholder="Doctor's name" />
            </label>
            <label className="home-search-field">
                <CiLocationOn />
                <span className='sr-only'>Location</span>
                <select name="" id="">
                    <option value="">Any location</option>
                    <option value="">Port Harcourt</option>
                    <option value="">Lagos</option>
                    <option value="">Abuja</option>
                    <option value="">Uyo</option>
                </select>
            </label>
            <button className='btn btn-lg'>Search</button>
        </form>
    )
}

export default SearchBar