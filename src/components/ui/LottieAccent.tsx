"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

// Abstract geometric motion
const LOTTIE_URL = "https://assets9.lottiefiles.com/packages/lf20_w51pcehl.json";

export const LottieAccent = () => {
  const [animationData, setAnimationData] = useState<any>(null);

  useEffect(() => {
    fetch(LOTTIE_URL)
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error(err));
  }, []);

  if (!animationData) return null;

  return (
    <div className="absolute top-0 right-0 w-[400px] h-[400px] opacity-20 pointer-events-none mix-blend-screen">
      <Lottie
        animationData={animationData}
        loop={true}
      />
    </div>
  );
};
