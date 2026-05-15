import logo from "../assets/logo.png";
import { CheckCircle2, Menu } from "lucide-react";
import { useState } from "react";

export default function SolutionPage() {
  const [step1Done, setStep1Done] = useState(true);
  const [step2Done, setStep2Done] = useState(false);
  const [step3Done, setStep3Done] = useState(true);
  const [step4Done, setStep4Done] = useState(false);
  return (

    <div className="min-h-screen bg-[#F7F8F4] px-8 py-6">

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-10">

        <img
          src={logo}
          alt="logo"
          className="w-14 h-14"
        />

        <h1 className="text-4xl font-bold tracking-tight text-[#2E4B3A]">
          Rekomendasi Perawatan
        </h1>

      </div>

      {/* LIST */}
      <div className="flex flex-col gap-12">

        {/* ITEM */}
        <div className="flex items-center gap-5">

          {/* ICON */}
          <div
  onClick={() => setStep1Done(!step1Done)}
  className={`w-[55px] h-[55px] rounded-full flex items-center justify-center text-2xl cursor-pointer transition

  ${
    step1Done
      ? "bg-green-500 text-white"
      : "bg-[#B8D4B3] text-gray-800"
  }
  `}
>

  {step1Done ? "✓" : "1"}

</div>
          {/* CARD */}
          <div className="flex-1 bg-[#DFF0DA] rounded-2xl px-6 py-5 flex justify-between items-center">

            <p className="text-2xl text-gray-800 max-w-4xl">
              Memperbaiki drainase dan memberikan
              pupuk bernutrisi seimbang.
            </p>

            

          </div>

        </div>

        {/* ITEM */}
        <div className="flex items-center gap-5">

         <div
        onClick={() => setStep2Done(!step2Done)}
        className={`w-[55px] h-[55px] rounded-full flex items-center justify-center text-2xl cursor-pointer transition

        ${
         step2Done
        ? "bg-green-500 text-white"
        : "bg-[#B8D4B3] text-gray-800"
       }
     `}
      >

  {step2Done ? "✓" : "2"}

</div>

          <div className="flex-1 bg-[#EDF4EA] rounded-2xl px-6 py-5 flex justify-between items-center">

            <p className="text-2xl text-gray-800 max-w-4xl">
              Membuang daun yang terinfeksi parah.
            </p>

            

          </div>

        </div>

        {/* ITEM */}
        <div className="flex items-center gap-5">

          <div
  onClick={() => setStep3Done(!step3Done)}
  className={`w-[55px] h-[55px] rounded-full flex items-center justify-center text-2xl cursor-pointer transition

  ${
    step3Done
      ? "bg-green-500 text-white"
      : "bg-[#B8D4B3] text-gray-800"
  }
  `}
>

  {step3Done ? "✓" : "3"}

</div>

          <div className="flex-1 bg-[#DFF0DA] rounded-2xl px-6 py-5 flex justify-between items-center">

            <p className="text-2xl text-gray-800 max-w-4xl">
              Gunakan insektisida atau fungisida organik.
            </p>

            
          </div>

        </div>

        {/* ITEM */}
        <div className="flex items-center gap-5">

          <div
       onClick={() => setStep4Done(!step4Done)}
       className={`w-[55px] h-[55px] rounded-full flex items-center justify-center text-2xl cursor-pointer transition

      ${
    step4Done
      ? "bg-green-500 text-white"
      : "bg-[#B8D4B3] text-gray-800"
  }
  `}
>

  {step4Done ? "✓" : "4"}

</div>

          <div className="flex-1 bg-[#EDF4EA] rounded-2xl px-6 py-5 flex justify-between items-center">

            <p className="text-2xl text-gray-800 max-w-4xl">
              Siram saat tanah mulai kering dan hindari
              menyiram langsung pada daun.
            </p>

            
          </div>

        </div>

      </div>

    </div>
  );
}