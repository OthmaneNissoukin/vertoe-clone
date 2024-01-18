import Advantages from "./../components/Advantages";
import Guide from "./../components/Guide";
import Hero from "./../components/Hero";
import Solutions from "./../components/Solutions";
import WeAreIn from "./../components/WeAreIn";
import Features from "./../components/features";

function Homepage() {
  return (
    <>
      <Hero />
      <Features />
      <Solutions />
      <Advantages />
      <Guide />
      <WeAreIn />
    </>
  );
}

export default Homepage;
