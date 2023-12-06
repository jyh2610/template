/* eslint-disable @next/next/no-img-element */
function Event() {
  const eventData = [
    { title: "농협양곡 X 쿠첸", src: "https://cuchencdn.wisacdn.com//_data/banner/49ef9d2bd59b5606a410df6f3c591923.png" },
    { title: "실리팟 X 쿠첸", src: "https://cuchencdn.wisacdn.com//_data/banner/ed66e4eddf2e3a231e1c25311c6bb926.jpg" },
    { title: "잔망루피 X 쿠첸", src: "https://cuchencdn.wisacdn.com//_data/banner/f388a5b3f9fcfb92d6c29d37b9f94b74.png" },
  ];
  return (
    <div className="flex  justify-center border border-t-2 py-24">
      {eventData.map((event) => {
        return (
          <div key={event.title}>
            <h2 className="py-5 text-xl font-black">{event.title}</h2>
            <div className="">
              <img className="w-full h-full object-cover" src={event.src} alt="event" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Event;
