import tomatoBg from "../assets/tomato-bg.jpg";
import { Mail, Eye } from "lucide-react";

export default function LoginPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${tomatoBg})`,
      }}
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>

      {/* LOGIN BOX */}
      <div className="relative z-10 flex flex-col items-center">

        {/* TITLE */}
      <h1 className="text-5xl font-bold text-[#355E3B] tracking-tight mb-16">
       Tomato LeafGuard
      </h1>

        {/* EMAIL */}
        <div className="w-[400px] mb-8">

          <label className="text-white text-3xl">
            Masukan E-mail
          </label>

          <div className="mt-3 bg-white/20 backdrop-blur-md rounded-full px-6 py-2 flex items-center justify-between">

            <input
              type="email"
              placeholder="Email"
              className="bg-transparent outline-none text-white placeholder:text-white/70 text-lg w-full"
            />

            <Mail size={35} className="text-white" />

          </div>

        </div>

        {/* PASSWORD */}
        <div className="w-[400px] mb-6">

          <label className="text-white text-3xl">
            Masukan Password
          </label>

          <div className="mt-3 bg-white/20 backdrop-blur-md rounded-full px-6 py-2 flex items-center justify-between">

            <input
              type="password"
              placeholder="Password"
              className="bg-transparent outline-none text-white placeholder:text-white/70 text-lg w-full"
            />

            <Eye size={35} className="text-white" />
          </div>

        </div>
{/* LINKS */}
<div className="flex flex-col items-center mb-10">

  <p className="text-white text-2xl">
    Belum punya akun?

    <a
      href="/register"
      className="text-2xl font-bold text-green-900 ml-2 hover:underline"
    >
      Daftar
    </a>

  </p>

  <a
    href="/forgot-password"
    className="text-white text-2xl underline mt-4 cursor-pointer hover:text-green-200"
  >
    Lupa Password?
  </a>

</div>
        {/* BUTTON */}
       <button className="w-[260px] py-3 rounded-full text-xl font-semibold bg-green-600 hover:bg-green-700 hover:scale-105 transition text-white shadow-xl shadow-green-900/30">
       Masuk
      </button>

      </div>

    </div>
  );
}