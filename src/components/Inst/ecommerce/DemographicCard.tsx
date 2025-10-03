import CountryMap from "./CountryMap";

export default function DemographicCard() {

  return (
    <div className="">

      <div className="">
        <div
          id="mapOne"
          className="relative h-[500px] w-full"
        >
          <CountryMap />
        </div>
      </div>
    </div>
  );
}
