import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const MentorDetail = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const [mentor, setMentor] = useState(null);
  const navigate = useNavigate(); // Menambahkan useNavigate untuk navigasi

  useEffect(() => {
    const fetchMentor = async () => {
      const response = await fetch(`https://66ffd40a4da5bd2375522207.mockapi.io/mentors/${id}`);
      const data = await response.json();
      setMentor(data);
    };

    fetchMentor();
  }, [id]);

  if (!mentor) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-2xl font-bold text-gray-600">Loading...</p>
      </div>
    ); // Menampilkan loading state saat data sedang diambil
  }

  // Fungsi untuk handle ketika klik hire
  const handleHire = () => {
    navigate('/payment', { state: { mentor } }); // Meneruskan data mentor ke halaman payment
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4 lg:px-20">
      <div className="mx-auto flex flex-col lg:flex-row">
        {/* Mentor Image */}
        <div className="lg:w-1/3">
          <img
            src={mentor.url_photos}
            alt={mentor.nama}
            className="w-full h-80 object-cover lg:h-full rounded-xl"
          />
        </div>

        {/* Mentor Details */}
        <div className="lg:w-2/3 p-6 lg:p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{mentor.nama}</h1>
          <h2 className="text-lg text-main-800 font-semibold mb-4">{mentor.expertise.join(', ')}</h2>
          
          <p className="text-gray-700 text-lg mb-6">{mentor.bio}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center">
              <span className="font-semibold text-gray-600 w-28">Email:</span>
              <span className="text-gray-900">{mentor.email}</span>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-gray-600 w-28">Telepon:</span>
              <span className="text-gray-900">{mentor.no_telfon}</span>
            </div>
          </div>

          {/* Hire Button */}
          <div className="mt-8">
            <button
              onClick={handleHire}
              className="bg-main-800 hover:bg-main-600 text-white px-6 py-3 rounded-md font-semibold transition duration-300 ease-in-out"
            >
              Hire {mentor.nama}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetail;
