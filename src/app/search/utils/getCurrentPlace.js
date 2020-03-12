import { geocodeByAddress } from './geoCoding';

const getPosition = () =>
  new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej);
  });

const getCurrentCoords = async () => {
  try {
    const position = await getPosition();
    const coords = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    return coords;
  } catch (error) {
    return error;
  }
};

export const getCurrentPlace = async () => {
  const coords = await getCurrentCoords();
  const address = await geocodeByAddress({ location: coords });
  return address;
};
