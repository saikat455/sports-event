import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestResult = () => {
  return (
    <div className="flex border-blue-500 ">
      <button className="bg-green-400 text-white px-4">LATEST NEWS</button>
      <Marquee pauseOnClick={true} speed={100} className="border ">
        <Link className="mr-8 text-lg text-red-600">
          Barcelona "Get Rid Of Ghosts" With Important Win At Porto
        </Link>
        <Link className="mr-8 text-lg text-red-600">
          Newcastle United Serve PSG Dose Of Champions League Reality In Battle
          Of State-Backed Clubs
        </Link>
        <Link className="mr-8 text-lg text-red-600">
          Manchester United, Arsenal Rocked In Champions League As Inter Milan
          Edge Benfica
        </Link>
        <Link className="mr-8 text-lg text-red-600">
          Romelu Lukaku Lifts Roma As Juventus Held By Atalanta
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestResult;
