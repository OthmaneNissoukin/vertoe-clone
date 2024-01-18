function Features() {
  return (
    <section className="py-5 ">
      <div className="flex m-auto justify-between items-center max-w-7xl md:max-w-3xl lg:max-w-5xl">
        <div>
          <ul className="space-y-5 font-semibold">
            <li className="flex items-center gap-2">
              <span>
                <img src="loc-box.svg" />
              </span>
              1000+ locations in 65+ cities
            </li>
            <li className="flex items-center gap-2">
              <span>
                <img src="dollar-box.svg" />
              </span>
              $5.95 /day/item
            </li>
            <li className="flex items-center gap-2">
              <span>
                <img src="like-box.svg" />
              </span>
              4.8 /5 (+1,064,380 ratings)
            </li>
          </ul>
        </div>
        <div>
          <img src="girl-with-cycle.svg" />
        </div>
      </div>
    </section>
  );
}

export default Features;
