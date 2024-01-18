function Guide() {
  return (
    <section className="py-5">
      <div className="max-w-7xl px-5 lg:max-w-5xl md:max-w-3xl m-auto">
        <h1 className="text-2xl mb-5 font-semibold text-center md:text-start">Safety & Insurance</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 items-baseline gap-5 text-center">
          <article className="flex items-center flex-col">
            <span>
              <img src="desktop-howitworks-ic1.svg" />
            </span>
            <p className="text-sm font-semibold ">Find a Vertoe location near you and book online</p>
          </article>
          <article className="flex items-center flex-col">
            <span>
              <img src="desktop-howitworks-ic2.svg" />
            </span>
            <p className="text-sm font-semibold ">Drop your bags at a Vertoe</p>
          </article>
          <article className="flex items-center flex-col">
            <span>
              <img src="desktop-howitworks-ic3.svg" />
            </span>
            <p className="text-sm font-semibold ">Enjoy your day hassle-free!</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Guide;
