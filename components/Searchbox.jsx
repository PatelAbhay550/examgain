"use client";
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Link from "next/link";

const Searchbox = ({ suggestions }) => {
  const [input, setInput] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);
    setHighlightedIndex(-1);

    if (value.trim()) {
      const filtered = suggestions.filter((suggestion) =>
        suggestion.question.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 8));
      setIsOpen(true);
    } else {
      setFilteredSuggestions([]);
      setIsOpen(false);
    }
  };

  const clearSearch = () => {
    setInput("");
    setFilteredSuggestions([]);
    setIsOpen(false);
    setHighlightedIndex(-1);
    inputRef.current?.focus();
  };

  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < filteredSuggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : -1));
        break;
      case "Enter":
        e.preventDefault();
        if (highlightedIndex >= 0) {
          window.location.href = `/questions/${filteredSuggestions[highlightedIndex].slug}`;
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={searchRef}>
      <div className="flex items-center bg-white shadow-lg rounded-lg border-2 border-transparent hover:border-blue-300 focus-within:border-blue-500 transition-colors">
        <div className="pl-4 text-gray-400 flex-shrink-0">
          <AiOutlineSearch size={20} aria-hidden="true" />
        </div>

        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => input && setIsOpen(true)}
          className="w-full px-4 py-3 rounded-lg focus:outline-none text-gray-900 placeholder-gray-500"
          placeholder="Search questions, topics, chapters..."
          aria-label="Search for exam questions"
          aria-autocomplete="list"
          aria-controls="search-results"
          aria-expanded={isOpen}
        />

        {input && (
          <button
            onClick={clearSearch}
            className="px-4 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded transition-colors"
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>

      {isOpen && filteredSuggestions.length > 0 && (
        <ul
          id="search-results"
          className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg mt-2 shadow-xl max-h-96 overflow-y-auto z-20"
          role="listbox"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={suggestion.slug}
              role="option"
              aria-selected={index === highlightedIndex}
              className={`px-4 py-3 cursor-pointer transition-colors border-b border-gray-100 last:border-b-0 ${
                index === highlightedIndex
                  ? "bg-blue-50 text-blue-700 font-medium"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() =>
                (window.location.href = `/questions/${suggestion.slug}`)
              }
            >
              <Link href={`/questions/${suggestion.slug}`} className="block">
                {suggestion.question}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {isOpen && input && filteredSuggestions.length === 0 && (
        <div className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-lg mt-2 shadow-lg px-4 py-4 text-center text-gray-500 z-20">
          <p>No questions found matching your search.</p>
          <p className="text-sm mt-2">Try different keywords.</p>
        </div>
      )}
    </div>
  );
};

export default Searchbox;
