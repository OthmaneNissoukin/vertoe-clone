function Advantages() {
  return (
    <section className="py-5">
      <div className="max-w-7xl md:max-w-3xl lg:max-w-5xl m-auto">
        <h1 className="text-2xl mb-2">Safety & Insurance</h1>
        <div className="flex flex-col md:flex-row justify-between text-center space-y-5">
          <article>
            <span className="inline-block">
              <img src="desktop_safety&insu_ic1.svg" />
            </span>
            <h2 className="text-blue-500 font-semibold">$5000</h2>
            <p className="text-sm">Insurance</p>
          </article>

          <article>
            <span className="inline-block">
              <img src="desktop_safety&insu_ic2.svg" />
            </span>
            <h2 className="text-blue-500 font-semibold">Tamper-proof</h2>
            <p className="text-sm">Security seals</p>
          </article>
          <article>
            <span className="inline-block">
              <img src="desktop_safety&insu_ic3.svg" />
            </span>
            <h2 className="text-blue-500 font-semibold">Verified</h2>
            <p className="text-sm">Locations</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Advantages;
