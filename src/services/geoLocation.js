export async function getPosition(setPosition) {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const cords = pos.coords;

      setPosition({ lat: cords.latitude, lng: cords.longitude });
    },
    (err) => {
      console.log(err);
    }
  );
}
