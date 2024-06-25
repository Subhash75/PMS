import EngineerListing from "./components/EngineerListing";
import Map from "./components/Map";
import useTracking from "./useTracking";

function Tracking() {
  const { handleEngineerFocus, location } = useTracking();
  return (
    <>
      <EngineerListing handleEngineerFocus={handleEngineerFocus} />
      <Map location={location} />
    </>
  );
}

export default Tracking;
