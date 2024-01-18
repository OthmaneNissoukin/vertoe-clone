import { useState, useEffect } from "react";

function useGeoLocation(position) {
  const [address, setAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getAddress() {
      setIsLoading(true);
      const req = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.lat}&longitude=${position.lng}`
      );

      const res = await req.json();
      console.log(res);
      setAddress(`${res?.locality}, ${res?.city} ${res?.postcode}, ${res?.countryName}`);
      setIsLoading(false);
    }

    if (position) getAddress();
  }, [position]);

  return { address, isLoading, setAddress };
}

export default useGeoLocation;
