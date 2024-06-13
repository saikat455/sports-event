// import Navbar from "../Shared/Navbar/Navbar";
// import Footer from "../footer/Footer";
// import barca from "../tour/barca.png";
// import image1 from "../tour/image1no.webp";
// import image2 from "../tour/image2no.webp";
// import image3 from "../tour/image3no.webp";
// import image4 from "../tour/image4no.webp";
// import image5 from "../tour/image5no.webp";
// import image6 from "../tour/image6no.webp";
// import image7 from "../tour/image7no.webp";
// import image8 from "../tour/image8no.webp";
// import image9 from "../tour/image9no.webp";
// import image10 from "../tour/image10no.webp";
// import image11 from "../tour/image11no.webp";
// import image12 from "../tour/image12no.webp";

// const BarcelonaTour = () => {
//   const lines = [
//     "Travelers recommend",
//     "Culture & history",
//     "Family-friendly activities",
//     "Extreme sports & adrenaline",
//     "Shows & musicals",
//     "Day trips",
//     "Cruises & boat tours",
//     "Sightseeing on wheels",
//   ];

//   return (
//     <div>
//       <Navbar></Navbar>
//       <div className="flex items-center text-center mt-4">
//         <div>
//           <p className="text-2xl font-semibold">Things to do in</p>
//           <p className="text-7xl font-bold mb-3">Barcelona</p>
//           <p className="text-xl">
//             Otherworldly architecture, colorful markets, and tasty tapas await
//             you in the Catalan capital.
//           </p>
//         </div>
//         <div>
//           <img src={barca} alt="" />
//         </div>
//       </div>

//       <div className="flex justify-center mt-6 mb-6 gap-2">

//         {[image1, image2, image3, image4, image5, image6, image7, image8].map(
//           (image, index) => (
//             <div
//               key={index}
//               className="image-container transform transition-transform hover:scale-110 relative"
//             >
//               <img
//                 src={image}
//                 alt={`Image ${index + 1}`}
//                 className="w-40 h-40 object-cover rounded-md"
//               />
//               <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2">
//                 {lines[index]}
//               </div>
//             </div>
//           )
//         )}
//       </div>

//         <p className="text-3xl font-bold">Top sights in Barcelona</p>
//         <div className="flex justify-center flex-wrap mt-6 mb-6 gap-4">

//         {[image9, image10, image11, image12].map((image, index) => (
//           <div
//             key={index}
//             className="image-container animate__animated animate__zoomIn"
//             style={{ animationDelay: `${index * 0.5}s` }}
//           >
//             <img
//               src={image}
//               alt={`Image ${index + 5}`}
//               className="w-40 h-40 object-cover rounded-md"
//             />
//           </div>
//         ))}
//       </div>

//       <Footer></Footer>
//     </div>
//   );
// };

// export default BarcelonaTour;

import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../footer/Footer";
import barca from "../tour/barca.png";
import image1 from "../tour/image1no.webp";
import image2 from "../tour/image2no.webp";
import image3 from "../tour/image3no.webp";
import image4 from "../tour/image4no.webp";
import image5 from "../tour/image5no.webp";
import image6 from "../tour/image6no.webp";
import image7 from "../tour/image7no.webp";
import image8 from "../tour/image8no.webp";
import image9 from "../tour/image9no.webp";
import image10 from "../tour/image10no.webp";
import image11 from "../tour/image11no.webp";
import image12 from "../tour/image12no.webp";
import barcelona from "../tour/barcelona.jpg";

const BarcelonaTour = () => {
  const lines = [
    "Travelers recommend",
    "Culture & history",
    "Family-friendly activities",
    "Extreme sports & adrenaline",
    "Shows & musicals",
    "Day trips",
    "Cruises & boat tours",
    "Sightseeing on wheels",
  ];

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center text-center mt-4">
        <div>
          <p className="text-2xl font-semibold">Things to do in</p>
          <p className="text-7xl font-bold mb-3">Barcelona</p>
          <p className="text-xl">
            Otherworldly architecture, colorful markets, and tasty tapas await
            you in the Catalan capital.
          </p>
        </div>
        <div>
          <img src={barca} alt="" />
        </div>
      </div>

      <div className="flex justify-center mt-6 mb-6 gap-2">
        {[image1, image2, image3, image4, image5, image6, image7, image8].map(
          (image, index) => (
            <div
              key={index}
              className="image-container transform transition-transform hover:scale-110 relative"
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-40 h-40 object-cover rounded-md"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2">
                {lines[index]}
              </div>
            </div>
          )
        )}
      </div>

      <p className="text-3xl font-bold">Top sights in Barcelona</p>
      <div className="flex justify-center flex-wrap mt-6 mb-6 gap-8">
        {[image9, image10, image11, image12].map((image, index) => (
          <div
            key={index}
            className="image-container transform transition-transform hover:scale-110 animate__animated animate__zoomIn"
            style={{ animationDelay: `${index * 0.5}s` }}
          >
            <img
              src={image}
              alt={`Image ${index + 5}`}
              className="w-60 h-60 object-cover rounded-md"
            />
            <p className="absolute top-0 left-0 right-0 bg-black bg-opacity-70 text-white text-center py-2">
              {`${index + 1}. ${
                [
                  "Park Güell",
                  "Montjuic Cable Car",
                  "Sagrada Familia",
                  "Casa Batlló",
                ][index]
              }`}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center text-center bg-rose-400">
        <div>
          <img src={barcelona} alt="" />
        </div>
        <div className="">
          <p className="text-3xl font-bold text-center mb-4">
            Your Barcelona itinerary is waiting.
          </p>
          <p className="text-xl font-semibold mb-4">
            Receive a curated 48-hour itinerary featuring the most iconic
            experiences in Barcelona, straight to your inbox.
          </p>
          <div className="flex items-center">
  <div className="relative p-4">
    <input
      type="text"
      placeholder="Email"
      className="w-full py-2 pr-10 pl-4 border rounded-md "
    />
    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </div>
  <button className="btn btn-info ml-4">Info</button>
</div>

          
        </div>
      </div>
      <p className="mt-1 mb-4 text-sm text-slate-600">
        By signing up, you agree to receive promotional emails on activities and
        insider tips. You can unsubscribe or withdraw your consent at any time
        with future effect. For more information, read our <span className="text-sky-600">Privacy statement</span> 
      </p>

      <Footer></Footer>
    </div>
  );
};

export default BarcelonaTour;
