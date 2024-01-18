import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function LocationCarousel() {
  return (
    <Carousel responsive={responsive} arrows={false} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
      <article>
        <div className="h-36 overflow-hidden">
          <img src="cities/agadir.jpg" className="max-w-60 h-[100%]" />
        </div>
        <h3 className="text-2xl">Agadir</h3>
      </article>
      <article>
        <div className="h-36 overflow-hidden">
          <img src="cities/marrakech.jpg" className="max-w-60" />
        </div>
        <h3 className="text-2xl">Marrakech</h3>
      </article>
      <article>
        <div className="h-36 overflow-hidden">
          <img src="cities/fes.jpg" className="max-w-60" />
        </div>
        <h3 className="text-2xl">Fes</h3>
      </article>
      <article>
        <div className="h-36 overflow-hidden">
          <img src="cities/tanger.jpg" className="max-w-60" />
        </div>
        <h3 className="text-2xl">Tanger</h3>
      </article>
      <article>
        <div>
          <img src="cities/rabat.jpg" className="max-w-60" />
        </div>
        <h3 className="text-2xl">Rabat</h3>
      </article>
    </Carousel>
  );
}

export default LocationCarousel;
