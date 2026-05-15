import {
  Mail,
  Phone,
  MapPin,
  Pencil,
  Leaf,
  ScanLine,
  Activity,
} from "lucide-react";

import profil from "../assets/profil.jpg";

export default function ProfilePage() {
  return (

    <div className="min-h-screen bg-[#F7F8F4] px-8 py-10">

      {/* PROFILE HEADER */}
      <div className="bg-white rounded-[40px] shadow-sm p-10 flex flex-col items-center relative">

        {/* EDIT BUTTON */}
        <button
        onClick={() => alert("Edit Profile")}
        className="absolute top-8 right-8 bg-green-500 p-4 rounded-full shadow-md"
        >

        <Pencil
        size={24}
        className="text-white"
        />

      </button>

        {/* PROFILE IMAGE */}
        <div className="w-[150px] h-[150px] rounded-full border-4 border-green-200 overflow-hidden">

        <img
         src={profil}
         alt="profile"
         className="w-full h-full object-cover object-top scale-150 translate-y-2"
          />

</div>

        {/* NAME */}
        <h1 className="text-5xl font-bold text-[#2E4B3A] mt-6">
          Hallo, Gehuun 🌱
        </h1>

        <p className="text-green-600 text-2xl mt-2">
          Petani Tomat Pemula
        </p>

      </div>

      {/* BIODATA CARD */}
      <div className="bg-[#EEF5EA] rounded-[35px] p-8 mt-10 flex flex-col gap-6">

        {/* EMAIL */}
        <div className="flex items-center gap-5">

          <div className="bg-white p-4 rounded-full">

            <Mail
              size={28}
              className="text-green-600"
            />

          </div>

          <p className="text-2xl text-gray-700">
            gehuun@gmail.com
          </p>

        </div>

        {/* PHONE */}
        <div className="flex items-center gap-5">

          <div className="bg-white p-4 rounded-full">

            <Phone
              size={28}
              className="text-green-600"
            />

          </div>

          <p className="text-2xl text-gray-700">
            085800986543
          </p>

        </div>

        {/* ADDRESS */}
        <div className="flex items-center gap-5">

          <div className="bg-white p-4 rounded-full">

            <MapPin
              size={28}
              className="text-green-600"
            />

          </div>

          <p className="text-2xl text-gray-700">
            Malang, Jawa Timur
          </p>

        </div>

      </div>

      {/* STATISTICS */}
      <div className="grid grid-cols-3 gap-6 mt-10">

        {/* CARD 1 */}
        <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center">

          <ScanLine
            size={40}
            className="text-green-600"
          />

          <h1 className="text-5xl font-bold text-[#2E4B3A] mt-4">
            12
          </h1>

          <p className="text-gray-500 text-xl mt-2">
            Total Scan
          </p>

        </div>

        {/* CARD 2 */}
        <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center">

          <Leaf
            size={40}
            className="text-green-600"
          />

          <h1 className="text-5xl font-bold text-[#2E4B3A] mt-4">
            5
          </h1>

          <p className="text-gray-500 text-xl mt-2">
            Penyakit
          </p>

        </div>

        {/* CARD 3 */}
        <div className="bg-white rounded-3xl p-8 shadow-sm flex flex-col items-center">

          <Activity
            size={40}
            className="text-green-600"
          />

          <h1 className="text-5xl font-bold text-[#2E4B3A] mt-4">
            89%
          </h1>

          <p className="text-gray-500 text-xl mt-2">
            Keberhasilan
          </p>

        </div>

      </div>

      {/* DAILY TIPS */}
      <div className="bg-[#DFF3D8] rounded-[35px] p-8 mt-10">

        <h1 className="text-3xl font-bold text-[#2E4B3A]">
          Tips Hari Ini 🌤️
        </h1>

        <p className="text-2xl text-gray-700 leading-relaxed mt-4">

          Hindari menyiram daun tomat pada malam hari
          untuk mencegah pertumbuhan jamur dan bakteri.

        </p>

      </div>

    </div>

  );
}