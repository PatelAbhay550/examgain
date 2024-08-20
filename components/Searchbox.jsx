"use client";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

const Searchbox = ({ suggestions }) => {
  const [input, setInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  // Function to handle input change and filter suggestions
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    // Filter suggestions based on user input
    const filtered = suggestions.filter((suggestion) =>
      suggestion.question.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredSuggestions(filtered);
  };

  // Function to clear the search box
  const clearSearch = () => {
    setInput("");
    setFilteredSuggestions([]);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="flex items-center bg-white shadow-md rounded-full border border-blue-500">
        {/* Search Icon */}
        <div className="pl-4 text-gray-500">
          <AiOutlineSearch size={24} />
        </div>

        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          className="w-full px-4 py-2 rounded-full focus:outline-none"
          placeholder="Search for questions & chapters..."
        />

        {input && (
          <button
            onClick={clearSearch}
            className="px-4 text-gray-500 hover:text-blue-600"
          >
            &#10005; {/* Close (X) Icon */}
          </button>
        )}
      </div>

      {/* Display dropdown suggestions */}
      {input && filteredSuggestions.length > 0 && (
        <ul className="absolute top-full left-0 w-full bg-white border border-blue-500 rounded-lg mt-2 shadow-md max-h-60 overflow-auto z-10">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-blue-100 cursor-pointer"
            >
              <Link href={`/questions/${suggestion.slug}`}>
                {suggestion.question}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* Display when no suggestions found */}
      {input && filteredSuggestions.length === 0 && (
        <div className="absolute top-full left-0 w-full bg-white border border-blue-500 rounded-lg mt-2 shadow-md px-4 py-2 text-gray-500">
          No results found.
        </div>
      )}
    </div>
  );
};

export default Searchbox;
