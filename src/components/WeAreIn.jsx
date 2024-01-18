import LocationCarousel from "./LocationCaroussel";

function WeAreIn() {
  return (
    <section className="py-5">
      <div className="max-w-7xl lg:max-w-5xl md:max-w-3xl m-auto">
        <h1 className="text-2xl mb-2">We Are In</h1>
        <LocationCarousel />
      </div>
    </section>
  );
}

export default WeAreIn;
