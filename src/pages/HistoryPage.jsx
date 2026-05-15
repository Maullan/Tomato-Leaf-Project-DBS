import {
  Bell,
  Search,
  SlidersHorizontal,
  ArrowRight,
} from "lucide-react";

import profile from "../assets/profil.jpg";
import leaf1 from "../assets/leaf1.jpg";
import leaf2 from "../assets/leaf2.jpg";
import leaf3 from "../assets/leaf3.jpg";
import { Link } from "react-router-dom";

export default function HistoryPage() {
  return (

    <div className="min-h-screen bg-[#F7F8F4]">

      {/* HEADER */}
      <div className="bg-[#EEF5EA] px-8 py-5 flex justify-between items-center">

        <Link
        to="/profile"
  className="flex items-center gap-4 cursor-pointer"
>
          <img
            src={profile}
            alt="profile"
            className="w-16 h-16 rounded-full object-cover"
          />

          <div>
            <h1 className="text-4xl font-semibold text-gray-800">
              Hallo, Gehuun
            </h1>

            <p className="text-gray-500 text-lg">
              Semua riwayat tanamanmu ada di sini
            </p>
          </div>

        </Link>

        <div
        onClick={() => alert("Notifikasi")}
        className="bg-white p-4 rounded-full shadow-sm cursor-pointer"
        >

  <Bell
    size={28}
    className="text-gray-700"
  />

</div>

      </div>

      

      {/* SEARCH */}
      <div className="px-8 mt-8">

        <div className="bg-[#EEF5EA] rounded-3xl px-6 py-5 flex justify-between items-center">

          <div className="flex items-center gap-4">

            <Search
              size={35}
              className="text-gray-500"
            />

            <input
              type="text"
              placeholder="Cari riwayat tanaman..."
              className="bg-transparent outline-none text-2xl placeholder:text-gray-400"
              onChange={(e) => console.log(e.target.value)}
            />

          </div>

          

        </div>

      </div>

    

      {/* HISTORY LIST */}
      <div className="px-8 py-10 flex flex-col gap-12">


        {/* HISTORY ITEM */}
<div className="flex gap-8 items-start">

  <img
    src={leaf1}
    alt="leaf"
    className="w-[140px] h-[140px] rounded-2xl object-cover"
  />

  <div>

    <h2 className="text-3xl font-semibold text-gray-800">
      27 April 2026
    </h2>

    <p className="text-2xl text-gray-600 mt-4 leading-relaxed max-w-4xl">
      Early blight terdeteksi dengan tingkat
      keparahan sedang pada beberapa bagian daun.
    </p>

  </div>

</div>
{/* HISTORY ITEM */}
<div className="flex gap-8 items-start">

  <img
    src={leaf2}
    alt="leaf"
    className="w-[140px] h-[140px] rounded-2xl object-cover"
  />

  <div>

    <h2 className="text-3xl font-semibold text-gray-800">
      28 April 2026
    </h2>

    <p className="text-2xl text-gray-600 mt-4 leading-relaxed max-w-4xl">
      Bacterial spot terdeteksi pada beberapa
      bagian daun tanaman tomat.
    </p>

  </div>

</div>
      </div>

    </div>
  );
}