import { useState } from "react";
import { coordinatesTypes, locationTypes } from "./tracking.types";

function useTracking() {
  const [location, setLocation] = useState<locationTypes | null>(null);

  const handleEngineerFocus = ({
    latitude,
    longitude,
  }: coordinatesTypes) => {
    setLocation([latitude, longitude]);
  };

  return { handleEngineerFocus, location };
}

export default useTracking;
