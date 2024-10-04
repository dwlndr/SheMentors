import React, { useEffect, useState } from "react";
import MentorCard from "../card/MentorCard"; // Pastikan path ini sesuai dengan lokasi MentorCard.jsx

const MentorList = () => {
  const [mentorsData, setMentorsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch(
          "https://66ffd40a4da5bd2375522207.mockapi.io/mentors"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMentorsData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMentors();
  }, []); // Kosong array dependencies untuk menjalankan efek hanya sekali

  if (loading) {
    return <div>Loading...</div>; // Loading state
  }

  if (error) {
    return <div>Error: {error}</div>; // Error handling
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-5">
      <h1 className="text-5xl font-bold text-main-950">Daftar Mentor</h1>
      <p>Pilih mentor sesuai dengan minat dan keinginan karirmu. </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {mentorsData.slice(0, 3).map(
          (
            mentor // Menampilkan hanya 3 mentor
          ) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          )
        )}
      </div>
      <button className="px-2 py-2 underline font-semibold text-main-800 mt-6">
        Lihat Selengkapnya
      </button>
    </div>
  );
};

export default MentorList;
