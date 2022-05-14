import { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";
// import Lottie from "react-lottie";

interface Props {
  imagem: any;
  type: string;
  description: string;
  atividadeSelecionada: string;
  setAtividadeSelecionada: (nivel: string) => void;
}

export function CardAtividadeButton({
  imagem,
  type,
  description,
  atividadeSelecionada,
  setAtividadeSelecionada,
}: Props) {
  const lottieRef = useRef(null);

  const options = {
    loop: false,
    autoplay: false,
    animationData: imagem,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    lottieRef.current.stop();
  }, []);

  return (
    <button
      className={`flex flex-col items-center border-[1px] transition-colors duration-300 grow
        ease-linear rounded-lg p-2 h-[312px] basis-[100%] md:basis-[40%] lg:basis-[20%] ${
          atividadeSelecionada === type
            ? "bg-slate-200 border-slate-400"
            : "bg-slate-200/10 border-slate-200 hover:border-slate-300 hover:bg-slate-200/50"
        }`}
      onClick={() => {
        setAtividadeSelecionada(type);
        lottieRef.current.stop();
        lottieRef.current.play();
        setTimeout(() => {
          lottieRef.current.stop();
        }, 2000);
      }}
    >
      <div className="flex flex-col items-center gap-2">
        <div className="w-36">
          <Lottie
            animationData={imagem}
            lottieRef={lottieRef}
            autoPlay={false}
            loop={false}
            size={12}
          />
        </div>

        {/* <Lottie options={options} speed={2} /> */}
        <h2 className="text-xl font-bold">{type}</h2>
        <p className="text-lg">{description}</p>
      </div>
    </button>
  );
}