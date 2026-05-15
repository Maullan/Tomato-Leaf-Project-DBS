import { useState, useRef } from "react";
import {
  ArrowLeft,
  Camera,
  ImagePlus,
  Info,
  Sparkles,
  X,
} from "lucide-react";
import logo from "../assets/logo.png";
import leaf1 from "../assets/leaf1.jpg";
import leaf2 from "../assets/leaf2.jpg";
import leaf3 from "../assets/leaf3.jpg";

export default function DiagnosisPage() {
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([
  leaf1,
  leaf2,
  leaf3,
]);
  return (
    <>
      
      <div className="min-h-screen bg-[#F7F8F4] flex flex-col">

  {/* HEADER */}
<div className="flex items-start justify-between p-8">

  <div className="flex gap-4">

    <ArrowLeft
      size={40}
      className="text-green-800 cursor-pointer"
    />

    <div>
      <h1 className="text-3xl font-semibold text-gray-800">
        Diagnosis Daun
      </h1>

      <p className="text-green-500 text-sm">
        Unggah satu atau lebih gambar daun
        tomat untuk dianalisis oleh AI
      </p>
    </div>

  </div>

  <img
    src={logo}
    alt="logo"
    className="w-16 h-16 object-contain"
  />

</div>

  {/* UPLOAD AREA */}
  <input
  type="file"
  accept="image/*"
  capture="environment"
  multiple
  ref={fileInputRef}
  className="hidden"

  onChange={(e) => {

    const files = Array.from(e.target.files);

    const imageUrls = files.map((file) =>
      URL.createObjectURL(file)
    );

    setImages((prev) => [...prev, ...imageUrls]);

  }}
/>
  <div
  onClick={() => fileInputRef.current.click()}
  onDragOver={(e) => e.preventDefault()}
 onDrop={(e) => {

  e.preventDefault();

  const files = Array.from(e.dataTransfer.files);

  const imageUrls = files.map((file) =>
    URL.createObjectURL(file)
  );

  setImages((prev) => [...prev, ...imageUrls]);

}}
  className="mx-8 bg-[#EAF1E7] rounded-[40px] py-20 flex flex-col items-center justify-center border-2 border-dashed border-green-300 cursor-pointer"
>

    <h2 className="text-3xl text-gray-700">
      Seret gambar ke sini
    </h2>

    <p className="text-green-500 text-xl mt-2">
      atau klik untuk unggah
    </p>

    <div className="mt-6 bg-[#DCE9D8] px-8 py-3 rounded-xl text-gray-700">
      JPG, PNG Maks 10 MB/gambar
    </div>

  </div>

  {/* ACTION BUTTONS */}
  <div className="flex justify-center gap-40 mt-10">

    <div className="flex flex-col items-center cursor-pointer">

      <div
  onClick={() => fileInputRef.current.click()}
  className="bg-white shadow-md p-6 rounded-2xl cursor-pointer"
>
        <Camera size={45} className="text-green-600" />
      </div>

      <p className="mt-3 text-gray-700">
        Ambil Foto
      </p>

    </div>

    <div className="flex flex-col items-center cursor-pointer">

      <div
  onClick={() => fileInputRef.current.click()}
  className="bg-white shadow-md p-6 rounded-2xl cursor-pointer"
>
        <ImagePlus size={45} className="text-green-600" />
      </div>

      <p className="mt-3 text-gray-700">
        Pilih dari Galeri
      </p>

    </div>

  </div>

  {/* IMAGE SECTION */}
  <div className="px-10 mt-14">

    <div className="flex justify-between items-center">

      <p className="text-2xl text-gray-700">
        Gambar yang diunggah (3/10)
      </p>

      <p className="text-red-500 cursor-pointer">
        Hapus semua
      </p>

    </div>

    {/* IMAGE PREVIEW */}
<div className="flex justify-center gap-8 mt-8 flex-wrap">

  {images.map((image, index) => (

    <div
      key={index}
      className="relative"
    >

      <img
        src={image}
        alt="leaf"
        className="w-[160px] h-[200px] object-cover rounded-2xl shadow-md"
      />

      <button
        onClick={() =>
          setImages(images.filter((_, i) => i !== index))
        }
        className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full p-2"
      >

        <X size={18} />

      </button>

    </div>

  ))}

</div>
{/* TIPS */}
<div className="mx-8 mt-14 bg-[#EAF1E7] rounded-2xl p-6 flex items-center gap-4">

  <Info size={35} className="text-green-600" />

  <p className="text-gray-700 text-lg">
    Tips terbaik untuk hasil akurat:
    Pastikan gambar jelas, fokus pada daun,
    dan pencahayaan cukup baik
  </p>

</div>

  {/* ANALYZE BUTTON */}
  <div className="mt-auto">

    <button className="w-full bg-green-600 hover:bg-green-700 transition text-white text-3xl py-6 flex items-center justify-center gap-4">

      <Sparkles size={35} />

      Analisis Sekarang (3 gambar)

    </button>

  </div>

</div>
      

  {/* HASIL ANALISIS */}
<div className="w-full px-20 mt-20 mb-20">

  {/* HEADER */}
  <div className="flex justify-between items-center mb-10">

    <h1 className="text-4xl font-semibold text-gray-800">
      Hasil analisis sementara
    </h1>

    <button className="bg-[#EEF5EA] text-green-500 px-8 py-3 rounded-xl">
      Lihat Semua
    </button>

  </div>

  {/* ANALYSIS LIST */}
<div className="flex flex-col gap-8 w-full">

  {/* CARD 1 */}
  <div className="bg-white rounded-3xl border border-gray-200 p-8 flex gap-8 items-start shadow-sm">

    <img
      src={leaf1}
      alt="leaf"
      className="w-[160px] h-[190px] object-cover rounded-2xl"
    />

    <div className="flex-1 grid grid-cols-2 gap-8">

      {/* LEFT SIDE */}
      <div>

        <h2 className="text-3xl font-semibold text-gray-700">
          1. Early Blight
        </h2>

        <div className="flex justify-between items-center mt-6">

          <p className="text-gray-400 text-lg">
            Keparahan
          </p>

          <span className="bg-yellow-100 text-yellow-600 px-4 py-1 rounded-lg text-base">
            Sedang
          </span>

        </div>

        <div className="flex items-center gap-4 mt-3">

          <div className="flex-1 bg-gray-200 h-4 rounded-full overflow-hidden">

            <div className="bg-yellow-500 h-full w-[45%]"></div>

          </div>

          <span className="text-gray-500 text-lg">
            45%
          </span>

        </div>

        <div className="flex justify-between items-center mt-6">

          <p className="text-gray-400 text-lg">
            Confidence
          </p>

          <span className="text-gray-500 text-lg">
            92%
          </span>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="bg-[#F7FAF5] rounded-2xl p-6 border border-[#E3E8DF]">

        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Penyebab Kerusakan
        </h3>

        <p className="text-gray-500 leading-relaxed text-lg">
          Penyakit ini biasanya disebabkan oleh kelembapan tinggi,
          sirkulasi udara buruk, dan infeksi jamur pada daun tomat.
        </p>

      </div>

    </div>

  </div>

  {/* CARD 2 */}
  <div className="bg-white rounded-3xl border border-gray-200 p-8 flex gap-8 items-start shadow-sm">

    <img
      src={leaf2}
      alt="leaf"
      className="w-[160px] h-[190px] object-cover rounded-2xl"
    />

    <div className="flex-1 grid grid-cols-2 gap-8">

      {/* LEFT SIDE */}
      <div>

        <h2 className="text-3xl font-semibold text-gray-700">
          2. Bacterial Spot
        </h2>

        <div className="flex justify-between items-center mt-6">

          <p className="text-gray-400 text-lg">
            Keparahan
          </p>

          <span className="bg-red-100 text-red-500 px-4 py-1 rounded-lg text-base">
            Tinggi
          </span>

        </div>

        <div className="flex items-center gap-4 mt-3">

          <div className="flex-1 bg-gray-200 h-4 rounded-full overflow-hidden">

            <div className="bg-red-500 h-full w-[38%]"></div>

          </div>

          <span className="text-gray-500 text-lg">
            38%
          </span>

        </div>

        <div className="flex justify-between items-center mt-6">

          <p className="text-gray-400 text-lg">
            Confidence
          </p>

          <span className="text-gray-500 text-lg">
            91%
          </span>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="bg-[#F7FAF5] rounded-2xl p-6 border border-[#E3E8DF]">

        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Penyebab Kerusakan
        </h3>

        <p className="text-gray-500 leading-relaxed text-lg">
          Penyakit ini disebabkan oleh bakteri yang berkembang
          pada kondisi lembap dan menyebar melalui percikan air.
        </p>

      </div>

    </div>

  </div>

  {/* CARD 3 */}
  <div className="bg-white rounded-3xl border border-gray-200 p-8 flex gap-8 items-start shadow-sm">

    <img
      src={leaf3}
      alt="leaf"
      className="w-[160px] h-[190px] object-cover rounded-2xl"
    />

    <div className="flex-1 grid grid-cols-2 gap-8">

      {/* LEFT SIDE */}
      <div>

        <h2 className="text-3xl font-semibold text-gray-700">
          3. Septoria Leaf Spot
        </h2>

        <div className="flex justify-between items-center mt-6">

          <p className="text-gray-400 text-lg">
            Keparahan
          </p>

          <span className="bg-lime-100 text-lime-600 px-4 py-1 rounded-lg text-base">
            Rendah
          </span>

        </div>

        <div className="flex items-center gap-4 mt-3">

          <div className="flex-1 bg-gray-200 h-4 rounded-full overflow-hidden">

            <div className="bg-green-500 h-full w-[38%]"></div>

          </div>

          <span className="text-gray-500 text-lg">
            38%
          </span>

        </div>

        <div className="flex justify-between items-center mt-6">

          <p className="text-gray-400 text-lg">
            Confidence
          </p>

          <span className="text-gray-500 text-lg">
            91%
          </span>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="bg-[#F7FAF5] rounded-2xl p-6 border border-[#E3E8DF]">

        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Penyebab Kerusakan
        </h3>

        <p className="text-gray-500 leading-relaxed text-lg">
          Penyakit ini muncul akibat kelembapan tinggi,
          sirkulasi udara buruk, dan infeksi jamur pada daun.
        </p>

      </div>

    </div>

  </div>

</div>
  </div>

    </div>

  </>
  );
}