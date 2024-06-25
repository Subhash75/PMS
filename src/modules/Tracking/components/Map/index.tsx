import { locationTypes } from "../../tracking.types";
import MapRenderer from "./components/MapRenderer";

function Map({ location }: { location: locationTypes | null }) {
  return <MapRenderer location={location} />;
}

export default Map;
