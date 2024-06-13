


import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../footer/Footer";

import worldCup from '../details/world-cup.jpg'
import uefa from '../details/uefa.jpg'
import copa from '../details/copa.jpg'
import copaLiberta from '../details/cope-libertadores.jpg'
import nationsCup from '../details/nations-cup.jpg'
import euro from '../details/euro.jpg'
import copaDelRey from '../details/cope-del-rey.jpg'
import clubWorldCup from '../details/club-world-cup.jpg'
import iSL from '../details/isl.jpg'

const EventDetails = () => {
  const { id } = useParams();

  
  const fetchDataById = (id) => {
    
    const data = {
      1: {
        id: 1,
        name: "FIFA World Cup",
        title: "The Pinnacle of International Football",
        description: "The FIFA World Cup is the pinnacle of football excellence, bringing together nations from every corner of the globe in a mesmerizing display of skill, teamwork, and national pride. This month-long extravaganza unites fans worldwide in a shared passion for the beautiful game, with unforgettable moments etching themselves into the annals of sporting history. It's a stage where legends are born, and the world's finest athletes demonstrate their prowess, making it a truly unparalleled spectacle in the world of sports.",
        image: worldCup,
        MemorableMoments: "The FIFA World Cup is replete with indelible moments, including legendary goals, dramatic matches, and historic triumphs that have left an enduring mark on the world of football.",
        GlobalFanBase: "With a colossal global following, the World Cup unites fans from every corner of the globe, captivating viewers with its universal appeal and the prospect of witnessing national teams compete for the ultimate prize.",
        FormatAndStructure: "The tournament's format involves group stages followed by knockout rounds, culminating in the final match that crowns the world champion. This structure ensures the utmost excitement and anticipation, as nations come together to vie for football's most coveted trophy.",
      },
      2: {
        id: 2,
        name: "UEFA Champions League",
        title: "Europe's Premier Club Competition",
        description: "The UEFA Champions League stands as the pinnacle of club football, where Europe's elite teams collide in epic battles of skill, strategy, and determination. It's a competition that consistently delivers heart-stopping moments and iconic performances, etching its place in football history. Legends are not only born but solidified here, as the world witnesses the clash of titans vying for the coveted trophy. With its electrifying atmosphere and unparalleled prestige, the Champions League remains a captivating showcase of the best football has to offer, where dreams are realized and the footballing world is left in awe.",
        image: uefa,
        MemorableMoments: "The UEFA Champions League is synonymous with iconic moments, from historic comebacks to breathtaking goals, creating lasting memories that resonate with football fans worldwide.",
        GlobalFanBase: "The Champions League boasts a massive global fan base, transcending borders and attracting millions of viewers who eagerly tune in to witness the pinnacle of European club football.",
      },
      FormatAndStructure: "The competition's format involves group stages followed by knockout rounds, culminating in a grand final. This structure ensures intense matchups and keeps fans on the edge of their seats, making the Champions League the most prestigious club tournament in the world.",
      3: {
        id: 3,
        name: "Copa America",
        title: "South America's Football Showpiece",
        description: "Copa America, steeped in tradition and history, is a footballing extravaganza that showcases the vibrant spirit of South American soccer. With a legacy dating back to 1916, it stands as the oldest international football tournament, where the continent's top teams converge to battle for supremacy. This competition is more than just a sporting event; it's a cultural phenomenon, renowned for its passionate fans and breathtaking displays of footballing artistry. Copa America serves as a testament to the rich footballing heritage of South America, where each match is a celebration of the beautiful game.",
        image: copa,
        MemorableMoments: "Copa America has a storied history filled with unforgettable moments, from stunning goals to intense rivalries, showcasing the passion and skill of South American football.",
        GlobalFanBase: " While centered in South America, Copa America boasts a dedicated global fan base, drawing enthusiasts from around the world who are captivated by the tournament's exciting matches and the opportunity to witness top-class football talent.",
        FormatAndStructure: "The tournament follows a format with group stages leading to knockout rounds, allowing participating nations to compete for continental glory. Its structure guarantees fierce competition and electrifying matches that captivate audiences worldwide.",
      },
      4: {
        id: 4,
        name: "Copa Libertadores",
        title: "The Quest for South American Glory",
        description: "Copa Libertadores, often dubbed the by fans, stands as the epitome of South American club football, where the continent's finest teams vie for the ultimate glory. This prestigious competition is not just about winning titles; it's a journey of skill, determination, and unwavering passion for the sport. The Copa Libertadores stage has witnessed legendary encounters that have left an indelible mark on the history of football, captivating fans across the region and beyond. It's more than a tournament; it's a symphony of talent and ambition that elevates South American club football to extraordinary heights.",
        image: copaLiberta,
      
      MemorableMoments: "Copa Libertadores has been the stage for countless unforgettable moments, including thrilling comebacks, fierce rivalries, and historic victories, solidifying its status as South America's premier club competition.",
      GlobalFanBase: "While deeply rooted in South America, Copa Libertadores has garnered a passionate global following, with fans from various continents tuning in to witness the intense matches and extraordinary skill displayed by the participating clubs.",
      FormatAndStructure: "The competition's format includes group stages and knockout rounds, providing a rigorous test for the top club teams in South America. The structure guarantees high-stakes matches and captivating football action throughout the tournament.",
    },
      5: {
        id: 5,
        name: "African Cup of Nations",
        title: "Africa's Football Extravaganza",
        description: "The Africa Cup of Nations (AFCON) is not only a prestigious football tournament but also a celebration of the rich diversity and passion for the sport across the African continent. With a history dating back to 1957, AFCON has grown to become one of the most-watched sporting events globally, capturing the hearts of millions of football enthusiasts. This tournament serves as a testament to the unity and camaraderie among African nations, fostering a sense of pride and belonging as teams compete fiercely for the coveted title. It also offers a unique platform for emerging talents to showcase their skills and potentially secure contracts with top clubs worldwide, further elevating African football on the international stage. AFCON is not just a competition; it's a vibrant cultural exchange that unites nations and highlights the remarkable talent and resilience of Africa's footballing stars.",
        image: nationsCup,
        MemorableMoments: "The African Cup of Nations has witnessed unforgettable moments, from remarkable goals to spirited underdog performances, contributing to its rich footballing history and legacy.",
        GlobalFanBase: "While primarily an African tournament, the AFCON boasts a passionate global fan base that includes football enthusiasts from around the world, drawn to the competition's electrifying matches and the chance to witness African football talent in action.",
        FormatAndStructure: "The tournament typically features group stages followed by knockout rounds, showcasing the best national teams from the African continent. Its format provides a platform for nations to compete on a grand stage and vie for the prestigious title.",
      },
      6: {
        id: 6,
        name: "UEFA European Championship",
        title: "Europe's Battle for Supremacy",
        description: "The UEFA European Championship, affectionately known as the Euro, is a quadrennial football spectacle that unites the continent in a fervent celebration of the beautiful game. This premier international tournament showcases the immense talent and diversity of Europe's national teams as they compete for the coveted championship title. With a storied history dating back to 1960, the Euro has become a symbol of unity and rivalry, where nations come together to create unforgettable moments, leaving an indelible mark on football history. It's a grand stage where heroes are born, legends are made, and the thrill of international football reaches its zenith.",
        image: euro,
        MemorableMoments: "The UEFA European Championship has gifted football fans with iconic moments, including dramatic penalty shootouts, stunning goals, and unforgettable clashes between rival nations, forever etching its place in football history.",
        GlobalFanBase: "The Euro boasts a massive global fan base that transcends borders, uniting people from diverse backgrounds under the banner of football. Its popularity extends far beyond Europe, making it one of the most-watched sporting events worldwide.",
      
      FormatAndStructure: "The tournament follows a format with group stages followed by knockout rounds, culminating in a thrilling final match. This structure ensures that each participating nation has a chance to shine, creating a rollercoaster of emotions for fans and players alike.",
    },
      7: {
        id: 7,
        name: "Copa del Rey",
        title: "Spain's Premier Cup Competition",
        description: "The Copa del Rey, Spain's premier domestic cup competition, serves as a thrilling showcase of footballing drama and passion. It brings together La Liga's heavyweights and underdogs, providing a stage where the giants of the sport can be humbled, and unsung heroes can rise to the occasion. Throughout its storied history, the tournament has witnessed countless memorable upsets and Cinderella stories, where smaller clubs have triumphed against the odds, etching their names in Spanish football lore. The Copa del Rey represents the essence of competition, where every match is a chance for unexpected glory and a testament to the enduring magic of the beautiful game.",
        image: copaDelRey,
        MemorableMoments: " Copa del Rey has been a stage for countless memorable moments, with underdog teams toppling giants and dramatic finals that have etched themselves in Spanish football history.",
        GlobalFanBase: " While primarily a Spanish competition, Copa del Rey's passionate fan base extends worldwide, attracting football enthusiasts who relish the excitement and unpredictability of the tournament.",
        FormatAndStructure: "The competition follows a knockout format, where teams from various tiers of Spanish football compete for the coveted title. The single-elimination rounds create an atmosphere of anticipation and exhilaration, making every match a potential upset in this prestigious domestic cup competition.",
      },
      8: {
        id: 8,
        name: "FIFA Club World Cup",
        title: "The Clash of Club Champions",
        description: "The FIFA Club World Cup stands as the ultimate test of club football supremacy, where champions from every corner of the globe converge to compete on a global scale. It's a tournament that transcends borders, showcasing the immense talent and passion that defines football worldwide. For club teams, winning the Club World Cup is an honor that solidifies their legacy and affirms their status as the best on the planet. Each edition of this prestigious competition is a thrilling spectacle, offering fans a taste of international club football at its finest, and a chance for teams to etch their names into history.",
        image: clubWorldCup,
        MemorableMoments: "The FIFA Club World Cup has gifted football fans with unforgettable moments, including stunning goals, dramatic comebacks, and historic victories by underdog teams. These instances showcase the competition's capacity to deliver thrilling and emotional spectacles on the global stage.",
      
      GlobalFanBase: "The tournament boasts a diverse and passionate global fan base, uniting football enthusiasts from all corners of the world. Fans eagerly follow their favorite club teams as they vie for international recognition, fostering a sense of unity and camaraderie among supporters worldwide.",
      FormatAndStructure: "The FIFA Club World Cup features a straightforward structure, with champion clubs from each continent competing in a knockout-style tournament. The format ensures intense matchups and allows fans to witness their club heroes take on the best from around the globe in pursuit of ultimate glory.",
    },
      9: {
        id: 9,
        name: "Indian Super League (ISL)",
        title: "India's Football Revolution",
        description: "The Indian Super League (ISL) has indeed transformed the football landscape in India, igniting a newfound passion for the sport across the nation. With a blend of domestic talent and international stars, the ISL has elevated the quality of football on Indian soil to unprecedented heights. This rapidly growing league has not only revitalized Indian football but has also emerged as a formidable presence in Asian football, captivating fans nationwide and setting the stage for a bright and promising future for the beautiful game in India. As the ISL continues to expand and evolve, it serves as a testament to the power of sport in uniting and inspiring communities.",
        image: iSL,
        FormatAndStructure: "The Indian Super League (ISL) adopts a dynamic football format, with teams competing in a round-robin league followed by knockout playoffs. The structure ensures every match holds significance as teams aim to secure a coveted playoff spot, making it a thrilling and competitive spectacle.",
        GlobalFanBase: "The ISL has cultivated a passionate global fan base, drawing enthusiasts from diverse backgrounds who are captivated by the blend of domestic and international football talent on display. The league's appeal extends beyond India's borders, making it a widely followed football competition.",
        MemorableMoments: "The ISL has witnessed a plethora of memorable moments, from last-minute goals to unexpected upsets. These instances fuel the league's excitement and provide fans with enduring memories of exhilarating matches and remarkable individual performances.",
      },
      
    };

    return data[id] || {}; 
  };

  const eventData = fetchDataById(id);

  return (
    <div>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-3 gap-4 mt-5 mb-6">
  <div className="md:col-span-1">
    <img src={eventData.image} alt={eventData.name} className="w-full h-auto mx-auto lg:w-full" />
  </div>
  <div className="md:col-span-2">
    <h1 className="text-2xl font-bold lg:text-5xl mb-4 text-red-500">Event Details</h1>
    <p className="text-xl text-orange-700">Name: <span className="text-black text-base">{eventData.name}</span> </p>
    <p className="text-xl text-orange-700">Title: <span className="text-black text-base">{eventData.title}</span> </p>
    <p className="text-xl text-orange-700">Description: <span className="text-black text-base">{eventData.description}</span> </p>
    <p className="text-xl text-orange-700">Format And Structure: <span className="text-black text-base">{eventData.FormatAndStructure}</span> </p>
    <p className="text-xl text-orange-700">Global Fan Base: <span className="text-black text-base">{eventData.GlobalFanBase}</span> </p>
    <p className="text-xl text-orange-700">Memorable Moments: <span className="text-black text-base">{eventData.MemorableMoments}</span> </p>
  </div>
</div>


      <Footer></Footer>
    </div>
  );
};

export default EventDetails;


