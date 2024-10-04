import React from 'react';
import { Link } from 'react-router-dom'; // Import Link dari react-router-dom

const MentorCard = ({ mentor }) => {
  return (
    <div className="relative bg-white shadow-lg rounded-lg overflow-hidden mx-auto">
      {/* Image section */}
      <img
        src={mentor.url_photos}
        alt={mentor.nama}
        className="w-96 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-red-500 to-transparent opacity-50" />
      <div className="absolute inset-0 flex flex-col justify-end items-center p-4">
        <h2 className="text-xl font-semibold text-white text-center mb-1">
          {mentor.nama}
        </h2>
        <p className="text-sm text-white text-center mb-2">
          {mentor.expertise.join(', ')}
        </p>
        <Link to={`/mentors/${mentor.id}`}>
          <button className="bg-white text-red-500 px-4 py-2 rounded-md font-medium shadow-md transition duration-300 ease-in-out transform hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:text-white">
            Detail Mentor
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MentorCard;
