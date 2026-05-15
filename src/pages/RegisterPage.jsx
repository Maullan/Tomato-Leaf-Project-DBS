export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#F7F8F4] flex items-center justify-center px-6 py-10">
      
      <div className="w-full max-w-6xl bg-white rounded-[40px] overflow-hidden shadow-xl grid grid-cols-1 lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="bg-gradient-to-b from-green-600 to-green-700 p-14 flex flex-col justify-between relative overflow-hidden">

          <div>
            <div className="flex items-center gap-4 mb-10">

              <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center text-4xl">
                🌱
              </div>

              <div>
                <h1 className="text-white text-4xl font-bold">
                  TomatoCare
                </h1>

                <p className="text-green-100 text-lg mt-1">
                  Smart AI Plant Diagnosis
                </p>
              </div>

            </div>

            <h2 className="text-white text-6xl font-bold leading-tight max-w-xl">
              Rawat tanaman tomat lebih mudah bersama AI.
            </h2>

            <p className="text-green-100 text-2xl mt-8 leading-relaxed max-w-2xl">
              Analisis penyakit daun, pantau riwayat tanaman, dan dapatkan rekomendasi perawatan terbaik secara real-time.
            </p>
          </div>

          <div className="flex gap-6 mt-16 flex-wrap">

            <div className="bg-white/15 backdrop-blur-md px-8 py-5 rounded-3xl">
              <h3 className="text-white text-4xl font-bold">
                98%
              </h3>

              <p className="text-green-100 mt-2 text-lg">
                Akurasi Deteksi
              </p>
            </div>

            <div className="bg-white/15 backdrop-blur-md px-8 py-5 rounded-3xl">
              <h3 className="text-white text-4xl font-bold">
                24/7
              </h3>

              <p className="text-green-100 mt-2 text-lg">
                Monitoring Tanaman
              </p>
            </div>

          </div>

          <div className="absolute -bottom-24 -right-24 w-[260px] h-[260px] rounded-full bg-white/10"></div>
          <div className="absolute top-10 right-10 w-[120px] h-[120px] rounded-full bg-white/10"></div>

        </div>

        {/* RIGHT SIDE */}
        <div className="p-12 lg:p-16 flex flex-col justify-center">

          <div className="mb-10">
            <h2 className="text-5xl font-bold text-gray-800">
              Buat Akun
            </h2>

            <p className="text-gray-500 text-xl mt-4 leading-relaxed">
              Daftar untuk mulai memantau kesehatan tanaman tomatmu.
            </p>
          </div>

          <div className="space-y-6">

            {/* NAMA */}
            <div>
              <label className="text-gray-700 text-lg font-medium block mb-3">
                Nama Lengkap
              </label>

              <input
                type="text"
                placeholder="Masukkan nama lengkap"
                className="w-full bg-[#F5F7F3] rounded-2xl px-6 py-5 text-lg outline-none border-2 border-transparent focus:border-green-500 transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="text-gray-700 text-lg font-medium block mb-3">
                Email
              </label>

              <input
                type="email"
                placeholder="Masukkan email"
                className="w-full bg-[#F5F7F3] rounded-2xl px-6 py-5 text-lg outline-none border-2 border-transparent focus:border-green-500 transition"
              />
            </div>

            {/* PASSWORD */}
            <div>
              <label className="text-gray-700 text-lg font-medium block mb-3">
                Password
              </label>

              <input
                type="password"
                placeholder="Masukkan password"
                className="w-full bg-[#F5F7F3] rounded-2xl px-6 py-5 text-lg outline-none border-2 border-transparent focus:border-green-500 transition"
              />
            </div>

            {/* KONFIRMASI PASSWORD */}
            <div>
              <label className="text-gray-700 text-lg font-medium block mb-3">
                Konfirmasi Password
              </label>

              <input
                type="password"
                placeholder="Masukkan ulang password"
                className="w-full bg-[#F5F7F3] rounded-2xl px-6 py-5 text-lg outline-none border-2 border-transparent focus:border-green-500 transition"
              />
            </div>

            {/* BUTTON */}
            <button className="w-full bg-green-600 hover:bg-green-700 transition text-white text-2xl font-semibold py-5 rounded-2xl mt-4 shadow-lg shadow-green-200">
              Daftar Sekarang
            </button>

          </div>

          {/* LOGIN */}
          <div className="mt-10 text-center">
            <p className="text-gray-500 text-lg">
              Sudah punya akun?

              <a
                href="/login"
                className="text-green-600 font-semibold ml-2 hover:underline"
              >
                Masuk
              </a>
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
