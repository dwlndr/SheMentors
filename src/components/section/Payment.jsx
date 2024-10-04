import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Gunakan useLocation untuk mengambil data mentor

const Payment = () => {
  const location = useLocation(); // Mengambil state yang diteruskan
  const navigate = useNavigate();
  const mentor = location.state?.mentor; // Mendapatkan data mentor dari state

  const handlePayment = (e) => {
    e.preventDefault();
    // Logika pembayaran di sini
    alert('Payment Successful!');
    navigate('/chat', { state: { mentor } }); // Redirect ke halaman chat dengan data mentor
  };

  if (!mentor) {
    return <p className="text-center">Data mentor tidak ditemukan!</p>;
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Pembayaran</h1>
        
        {/* Ringkasan Pembayaran */}
        <div className="mb-6 border-b pb-4">
          <h2 className="text-lg font-semibold mb-2">Ringkasan Pembayaran</h2>
          <div className="flex justify-between">
            <span className="text-gray-700">Mentor:</span>
            <span className="text-gray-900 font-bold">{mentor.nama}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-700">Biaya:</span>
            <span className="text-gray-900 font-bold">Rp 500,000</span>
          </div>
        </div>

        {/* Formulir Pembayaran */}
        <form onSubmit={handlePayment}>
          {/* Input fields */}
          <button
            type="submit"
            className="w-full bg-main-700 hover:bg-main-800 text-white py-3 rounded-md font-semibold transition duration-300 ease-in-out"
          >
            Konfirmasi Pembayaran
          </button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
