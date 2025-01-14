import React, { useState } from "react";
import "./StreamList.css";
import { FaTrashAlt, FaEdit, FaCheck } from "react-icons/fa";

function StreamList() {
  const [input, setInput] = useState(""); // User input for new events
  const [events, setEvents] = useState([]); // List of events
  const [editingIndex, setEditingIndex] = useState(null); // Index of the event being edited
  const [editingText, setEditingText] = useState(""); // Temporary state for editing text

  // Handle input change for new events
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  // Handle form submission for adding events
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setEvents([...events, { text: input, completed: false }]); // Add new event
      setInput(""); // Clear input field
    }
  };

  // Toggle event completion
  const toggleComplete = (index) => {
    const updatedEvents = events.map((event, i) =>
      i === index ? { ...event, completed: !event.completed } : event
    );
    setEvents(updatedEvents);
  };

  // Handle event deletion
  const handleDelete = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  // Start editing an event
  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingText(events[index].text);
  };

  // Handle editing input change
  const handleEditingChange = (e) => {
    setEditingText(e.target.value);
  };

  // Save the edited event
  const saveEditing = () => {
    const updatedEvents = events.map((event, i) =>
      i === editingIndex ? { ...event, text: editingText } : event
    );
    setEvents(updatedEvents);
    setEditingIndex(null); // Exit editing mode
    setEditingText("");
  };

  return (
    <div className="streamlist-container">
      <h1>StreamList Events</h1>
      <form onSubmit={handleSubmit} className="event-form">
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Enter an event..."
          className="event-input"
        />
        <button type="submit" className="submit-btn">Add Event</button>
      </form>

      <ul className="event-list">
        {events.map((event, index) => (
          <li
            key={index}
            className={`event-item ${event.completed ? "completed" : ""}`}
          >
            {editingIndex === index ? (
              // Editing Mode
              <div className="editing-container">
                <input
                  type="text"
                  value={editingText}
                  onChange={handleEditingChange}
                  className="editing-input"
                />
                <button className="save-btn" onClick={saveEditing}>
                  <FaCheck />
                </button>
              </div>
            ) : (
              // Display Mode
              <div className="event-content">
                <span onClick={() => toggleComplete(index)}>
                  {event.text}
                </span>
                <div className="event-actions">
                  <FaEdit
                    className="edit-icon"
                    onClick={() => startEditing(index)}
                  />
                  <FaTrashAlt
                    className="delete-icon"
                    onClick={() => handleDelete(index)}
                  />
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;
