import Link from "next/link";

import localFont from "next/font/local";

const baksoSapi = localFont({ src: "./BaksoSapi.otf" });

const groupedEvents = {
  "Saturday 9/2": [
    {
      name: "Korean BBQ",
      start_time: "1:00 PM",
      end_time: "3:00 PM",
      type: "Lunch",
      description:
        "Come try our signature homemade Korean barbecue. There's no better meal to start Rush off right!",
      host: "Theta Xi",
      location: "64 Bay State Road, Boston",
      group: "Theta Xi",
    },
    {
      name: "Theta Xi Arcade",
      start_time: "3:00 PM",
      end_time: "6:00 PM",
      type: "Casual",
      description:
        "Come chill and play our favorite games with us: League, Valorant, Tetris, chess, pool, foosball, and much more!",
      host: "Theta Xi",
      location: "64 Bay State Road, Boston",
      group: "Theta Xi",
    },
    {
      name: "Steak and Lobster",
      start_time: "6:00 PM",
      end_time: "8:00 PM",
      type: "Dinner",
      description: "Enjoy a meal of steak and lobster cooked to perfection!",
      host: "Theta Xi",
      location: "64 Bay State Road, Boston",
      group: "Theta Xi",
    },
    {
      name: "Karaoke Party + Late Night Boba",
      start_time: "8:00 PM",
      end_time: "12:00 AM",
      type: "Party",
      description:
        "Satisfy both your body and your mind with a limitless supply of bubble tea, and sing your heart out to your favorite songs!",
      host: "Theta Xi",
      location: "64 Bay State Road, Boston",
      group: "Theta Xi",
    },
  ],
  "Sunday 9/3": [
    {
      name: "Flaming Grill and Buffet",
      start_time: "11:00 AM",
      end_time: "2:00 PM",
      type: "Lunch",
      description: "Join us for lunch at the Flaming Grill and Buffet!",
      host: "Flaming Grill and Buffet Malden",
      location: "52 Broadway, Malden",
      group: "Theta Xi",
    },
    {
      name: "Rock Climbing",
      start_time: "2:00 PM",
      end_time: "6:00 PM",
      type: "Jaunt",
      description:
        "Come join us for an afternoon of adventurous rock climbing at MetroRock Boston. Learn how to scale professional rock walls, then test your skills and experience the thrill of scaling indoor walls up to 45 feet high. All skill levels welcome, no previous rock-climbing experience necessary.",
      host: "MetroRock Everett",
      location: "69 Norman St #9, Everett",
      group: "Theta Xi",
    },
    {
      name: "Thai Food Dinner + House Tours",
      start_time: "6:00 PM",
      end_time: "8:00 PM",
      type: "Dinner",
      description:
        "Enjoy some delicious Thai food and get acquainted with our two brownstone mansions.",
      host: "Theta Xi",
      location: "64 Bay State Road, Boston",
      group: "Theta Xi",
    },
    {
      name: "Glow in the Dark Capture the Flag",
      start_time: "8:00 PM",
      end_time: "12:00 AM",
      type: "Jaunt",
      description:
        "A Theta Xi classic. Meet at the house, and we’ll head to a top secret location for an epic game of glow in the dark Capture the Flag. Think you’ve already got this game figured out? Theta Xi style is filled with surprises and twists that will make you rethink your strategy.",
      host: "Castle Island",
      location: "Secret Location",
      group: "Theta Xi",
    },
  ],
  "Monday 9/4 (Labor Day)": [
    {
      name: "Skyzone Trampoline Dodgeball",
      start_time: "11:00 AM",
      end_time: "4:00 PM",
      type: "Jaunt",
      description:
        "Let go of gravity and show off your inner acrobat playing dodgeball at the Skyzone trampoline park!",
      host: "Skyzone Everett",
      location: "69 Norman St, Everett, MA",
      group: "Theta Xi",
    },
    {
      name: "Raising Canes + Bowling",
      start_time: "4:00 PM",
      end_time: "8:00 PM",
      type: "Jaunt",
      description:
        "Enjoy some fried chicken and Texas toast from Raising Cane's, and show us your bowling skills at Townline Luxury Lanes!",
      host: "Townline Luxury Lanes",
      location: "665 Broadway, Malden, MA",
      group: "Theta Xi",
    },
    {
      name: "B.A.S.H.",
      start_time: "8:00 PM",
      end_time: "12:00 AM",
      type: "Jaunt",
      description:
        "Bring a camera and a friend, but leave your inhibitions behind. Compete for great prizes as you tour Boston on a wild mission to complete crazy tasks and retrieve zany items. Guaranteed to be a memorable part of your rush experience! Departure is at 8:15, dont be late!",
      host: "Everywhere ",
      location: "64 Bay State Road, Boston",
      group: "Theta Xi",
    },
  ],
  "Tuesday 9/5 (Registration Day)": [
    {
      name: "North End Pizza Tasting",
      start_time: "6:00 PM",
      end_time: "8:00 PM",
      type: "Invite Only",
      description:
        "Which of the North End’s famous pizza joints actually has the best pizza? See for yourself as we order many pizzas for dinner before minigolf. ",
      host: "Theta Xi",
      location: "64 Bay State Road, Boston",
      group: "Theta Xi",
    },
    {
      name: "Minigolf",
      start_time: "8:00 PM",
      end_time: "11:00 PM",
      type: "Invite Only",
      description:
        "Mini-golf made Happy Gilmore a world-class golfer, and it can do the same for you. Come join the brothers of Theta Xi for a round of this American pastime, and reward yourself with ice cream afterwards.",
      host: "Golf Country Middleton",
      location: "160 S Main St, Middleton",
      group: "Theta Xi",
    },
  ],
  "Wednesday 9/6 (First Day of Classes)": [
    {
      name: "Combat Archery",
      start_time: "5:30 PM",
      end_time: "8:00 PM",
      type: "Invite Only",
      description:
        "Archery Games brings you combat archery, a combination of dodgeball and archery in a fast-paced game designed to get you moving and your adrenaline flowing!",
      host: "Archery Games Boston",
      location: "120 Pond St, Ashland",
      group: "Theta Xi",
    },
    {
      name: "Late Night IHOP",
      start_time: "8:00 PM",
      end_time: "10:00 PM",
      type: "Invite Only",
      description:
        "Hungry? There’s no better place to be than IHOP if you’re looking to satisfy your late night cravings.",
      host: "IHOP Revere",
      location: "105 Squire Road, Revere",
      group: "Theta Xi",
    },
  ],
  "Thursday 9/7": [
    {
      name: "Level99",
      start_time: "5:00 PM",
      end_time: "10:00 PM",
      type: "Invite Only",
      description:
        "For the adventure seeker, play over 40 themed challenge rooms designed to test your team of 2-6 players both physically and mentally as you work together to master challenges and earn rewards at this 48000 square foot arcade.",
      host: "Level99 Natick",
      location: "Level99 (Natick)",
      group: "Theta Xi",
    },
  ],
};

function EventsList({ groupedEvents }) {
  // Grouped events have been extracted outside for brevity
  return (
    <div style={{ padding: "16px" }}>
      {Object.entries(groupedEvents).map(([date, eventsForDay]) => (
        <DayEvents key={date} date={date} events={eventsForDay} />
      ))}
    </div>
  );
}

function DayEvents({ date, events }) {
  return (
    <div>
      <h2
        style={{
          width: "100%",
          textAlign: "center",
          fontSize: "42px",
          color: "#fcebae",
          textShadow: "-4px 3px 0px #963345",
        }}
      >
        {date}
      </h2>
      <div
        style={{
          display: "flex",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {events.map((event) => (
          <div
            key={event.name}
            style={{
              position: "relative",
              minWidth: "280px",
              maxWidth: "360px",
              margin: "16px",
              backgroundColor: "#fcebae",
              borderRadius: "16px",
              padding: "16px",
              boxShadow: "-6px 4px 0px #963345",
            }}
          >
            <h3 style={{ fontSize: "28px" }}>{event.name}</h3>
            <div
              style={{ fontFamily: ["Alata", "sans-serif"], fontSize: "16px" }}
            >
              <p style={{ fontSize: "24px" }}>
                {event.start_time} - {event.end_time}
              </p>
              <p style={{ fontSize: "16px" }}>{event.description}</p>
              <div
                style={{
                  position: "absolute",
                  top: "-12px",
                  right: "-12px",
                  backgroundColor: "navy",
                  borderRadius: "4px",
                  width: "fit-content",
                  padding: "2px 8px",
                }}
              >
                <p style={{ color: "white", margin: 0 }}>
                  {" "}
                  {event.location == "64 Bay State Road, Boston"
                    ? "Theta Xi House"
                    : event.location}
                </p>
              </div>
              {event.type == "Invite Only" && (
                <div
                  style={{
                    position: "absolute",
                    top: "-12px",
                    left: "-12px",
                    backgroundColor: "maroon",
                    borderRadius: "4px",
                    width: "fit-content",
                    padding: "2px 8px",
                  }}
                >
                  <p style={{ color: "white", margin: 0 }}>Invite Only</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const Rush = (props) => {
  return (
    <div
      className={baksoSapi.className}
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        backgroundColor: "#6899ba",
      }}
    >
      <Link href="/">
        <span
          style={{
            position: "absolute",
            zIndex: 1,
            fontSize: "32px",
            color: "#fcebae",
            textShadow: "-4px 3px 0px #963345",
            left: "40px",
          }}
        >
          BACK TO HOME
        </span>
      </Link>
      <div
        style={{
          width: "100vw",
          padding: "16px",
          marginTop: "16px",
        }}
      >
        <h1
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "4.5em",
            color: "#fcebae",
            textShadow: "-8px 3px 0px #963345",
          }}
        >
          Rush Theta Xi
        </h1>
        <h2
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "28px",
            color: "#fcebae",
            textShadow: "-4px 3px 0px #963345",
          }}
        >
          Need a Ride? Text Us:
        </h2>
        <h3
          style={{
            width: "100%",
            textAlign: "center",
            fontFamily: ["Alata", "sans-serif"],
            fontSize: "24px",
            color: "#fcebae",
            textShadow: "-4px 3px 0px #963345",
          }}
        >
          650-867-0800 or 415-510-1021
        </h3>
        <h3
          style={{
            width: "100%",
            textAlign: "center",
            fontFamily: ["Alata", "sans-serif"],
            fontSize: "24px",
            color: "#fcebae",
            textShadow: "-4px 3px 0px #963345",
          }}
        >
          Instagram: thetaximit
        </h3>
        <EventsList groupedEvents={groupedEvents} />
      </div>
    </div>
  );
};

export default Rush;
