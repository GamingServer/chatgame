import React from "react";

const usersOnline = [
  "Maurice Lynch",
  "Polly Cooper",
  "Minnie Bowman",
  "Craig McKinney",
  "Hattie Bowen",
  "Lou Griffith",
  "Ora Doyle",
];

export default function HorizontalScrollTest() {
  return (
    <div className="bg-black min-h-screen text-white p-6">
      <h2 className="text-xl font-bold mb-4">Online Users</h2>

      <div className="overflow-x-auto">
        <div className="flex gap-4 w-max">
          {usersOnline.map((name, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0"
            >
              <div className="w-12 h-12 rounded-full bg-gray-500 mb-2" />
              <p className="text-sm whitespace-nowrap">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
