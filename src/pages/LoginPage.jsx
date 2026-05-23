import tomatoBg from "../assets/tomato-bg.jpg";
import { Mail, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {

  return (

    <div
      className="
      min-h-screen
      bg-cover
      bg-center
      flex
      items-center
      justify-center
      relative
      px-6
      "
      style={{
        backgroundImage: `url(${tomatoBg})`,
      }}
    >

      {/* OVERLAY */}
      <div className="
      absolute
      inset-0
      bg-black/30
      backdrop-blur-[2px]
      "></div>

      {/* CONTENT */}
      <div className="
      relative
      z-10
      w-full
      flex
      flex-col
      justify-center
      ">

        {/* TITLE */}
        <h1 className="
        text-5xl
        md:text-6xl
        font-bold
        text-white
        mb-16
        leading-tight
        ">
          Tomato <br />
          LeafGuard
        </h1>

        {/* EMAIL */}
        <div className="mb-8">

          <label className="
          text-white
          text-2xl
          block
          mb-3
          ">
            Masukan E-mail
          </label>

          <div className="
          bg-white/20
          backdrop-blur-md
          rounded-2xl
          px-5
          py-4
          flex
          items-center
          ">

            <input
              type="email"
              placeholder="Email"
              className="
              bg-transparent
              outline-none
              text-white
              placeholder:text-white/70
              text-lg
              w-full
              "
            />

            <Mail className="text-white" />

          </div>

        </div>

        {/* PASSWORD */}
        <div className="mb-8">

          <label className="
          text-white
          text-2xl
          block
          mb-3
          ">
            Masukan Password
          </label>

          <div className="
          bg-white/20
          backdrop-blur-md
          rounded-2xl
          px-5
          py-4
          flex
          items-center
          ">

            <input
              type="password"
              placeholder="Password"
              className="
              bg-transparent
              outline-none
              text-white
              placeholder:text-white/70
              text-lg
              w-full
              "
            />

            <Eye className="text-white" />

          </div>

        </div>

        {/* LINKS */}
        <div className="
        text-center
        mb-10
        ">

          <p className="
          text-white
          text-lg
          ">

            Belum punya akun?

            <Link
              to="/register"
              className="
              ml-2
              font-bold
              text-green-200
              "
            >
              Daftar
            </Link>

          </p>

          <Link
            to="/forgot-password"
            className="
            block
            mt-4
            text-white
            underline
            "
          >
            Lupa Password?
          </Link>

        </div>

        {/* BUTTON */}
        <button className="
        w-full
        py-4
        rounded-2xl
        bg-green-600
        hover:bg-green-700
        text-white
        text-xl
        font-semibold
        transition
        shadow-xl
        ">

          Masuk

        </button>

      </div>

    </div>
  );
}