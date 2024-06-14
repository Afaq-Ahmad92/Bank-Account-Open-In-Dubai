// src/components/TimelineEditor.js
"use client";
import React, { useState } from "react";
import TimelineEntry from "../shared/TimelineEntry";

const TimelineEditor = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({ title: "", description: "" });

  const handleNewEntryChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleAddEntry = () => {
    setEntries([...entries, { ...newEntry, id: Date.now() }]);
    setNewEntry({ title: "", description: "" });
  };

  const handleDeleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const handleUpdateEntry = (updatedEntry) => {
    setEntries(
      entries.map((entry) =>
        entry.id === updatedEntry.id ? updatedEntry : entry
      )
    );
  };

  return (
    <div className="timeline-editor container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Edit Post/Story Timeline</h2>
      <div className="new-entry mb-4">
        <input
          type="text"
          name="title"
          value={newEntry.title}
          onChange={handleNewEntryChange}
          className="w-full mb-2 p-2"
          placeholder="Title"
        />
        <textarea
          name="description"
          value={newEntry.description}
          onChange={handleNewEntryChange}
          className="w-full mb-2 p-2"
          placeholder="Description"
        />
        <button
          onClick={handleAddEntry}
          className="bg-green-500 text-white px-4 py-2"
        >
          Add Entry
        </button>
      </div>
      <div className="entries">
        {entries.map((entry) => (
          <TimelineEntry
            key={entry.id}
            entry={entry}
            onDelete={handleDeleteEntry}
            onUpdate={handleUpdateEntry}
          />
        ))}
      </div>
    </div>
  );
};

export default TimelineEditor;
