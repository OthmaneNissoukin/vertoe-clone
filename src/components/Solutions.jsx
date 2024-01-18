function Solutions() {
  return (
    <section className="py-5">
      <div className="flex px-5 flex-col md:flex-row lg:max-w-5xl m-auto max-w-7xl md:max-w-3xl text-center">
        <article className="flex flex-col items-center justify-end">
          <span>
            <img src="plane-ic.svg" />
          </span>
          <h2 className="text-blue-500 font-semibold">Travel</h2>
          <p className="text-sm">Lugging bags before check in or after check out of your Airbnb or hotel?</p>
        </article>
        <article className="flex flex-col items-center justify-end">
          <span>
            <img src="camera-ic.svg" />
          </span>
          <h2 className="text-blue-500 font-semibold">Equipment</h2>
          <p className="text-sm">Are you a professional, lugging your work equipment in the city?</p>
        </article>
        <article className="flex flex-col items-center justify-end">
          <span>
            <img src="people-ic.svg" />
          </span>
          <h2 className="text-blue-500 font-semibold">Meetings</h2>
          <p className="text-sm">Tired of lugging your bags from meeting to meeting?</p>
        </article>
        <article className="flex flex-col items-center justify-end">
          <span>
            <img src="calendar-ic.svg" />
          </span>
          <h2 className="text-blue-500 font-semibold">Events</h2>
          <p className="text-sm">Cant take bags inside a show, concert, or sports game venue?</p>
        </article>
      </div>
    </section>
  );
}

export default Solutions;
