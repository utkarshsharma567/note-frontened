import React, { useContext, useState } from "react";
import { NoteContext } from "../context/NoteContext";
import { toast } from "react-toastify";

function Notecard({ note }) {
  const { deleteNote, updateNote } = useContext(NoteContext);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: note.title,
    content: note.content,
  });

  const handleUpdate = () => {
    updateNote(note._id, editData);
    setIsEditing(false);
    toast.success("Note updated successfully! 👌");
  };

  return (
    <div className="bg-gray-800 text-white border border-gray-700 rounded-xl shadow-lg hover:shadow-xl transition-all p-5 flex flex-col">
      {isEditing ? (
        <>
          {/* Edit Mode */}
          <input
            type="text"
            className="border border-gray-500 rounded-lg p-2 w-full mb-3 
                       focus:ring-2 focus:ring-blue-400 outline-none
                       bg-gray-700 text-white"
            value={editData.title}
            onChange={(e) =>
              setEditData({ ...editData, title: e.target.value })
            }
          />

          <textarea
            className="border border-gray-500 rounded-lg p-2 w-full mb-3
                       focus:ring-2 focus:ring-blue-400 outline-none
                       bg-gray-700 text-white"
            rows="3"
            value={editData.content}
            onChange={(e) =>
              setEditData({ ...editData, content: e.target.value })
            }
          />

          <div className="flex gap-2">
            <button
              onClick={handleUpdate}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg transition"
            >
              Save
            </button>

            <button
              onClick={() => {
                setIsEditing(false);
                toast.info("Edit cancelled");
              }}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-1.5 rounded-lg transition"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          {/* View Mode */}
          <h2 className="text-xl font-semibold">{note.title}</h2>

          <p className="text-gray-300 mt-2 flex-1">{note.content}</p>

          {/* Footer */}
          <div className="mt-4 flex items-center justify-between text-sm text-gray-400">
            <span>
              {new Date(note.createdAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>

            <div className="flex gap-2">
              <button
                onClick={() => setIsEditing(true)}
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-3 py-1 rounded-lg transition"
              >
                Edit
              </button>

              <button
                onClick={() => {
                  deleteNote(note._id);
                  toast.success("Note deleted successfully!");
                }}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Notecard;

