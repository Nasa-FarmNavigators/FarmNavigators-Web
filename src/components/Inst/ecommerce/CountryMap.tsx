import React, { useEffect, useRef, useState, useMemo } from "react";
import {
  GoogleMap,
  LoadScript,
  Circle,
  Autocomplete,
  OverlayView
} from "@react-google-maps/api";
import axios from "axios";
import ZoneModal from "./ZoneModal";

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

const containerStyle = {
  position: "absolute" as const,
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};

type RiskZone = {
  id: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  imageUrl: string;
  status: string;
  createdAt: string;
};

type PredictedZone = {
  id: string;
  latitude: number;
  longitude: number;
  reason: string;
  createdAt: string;
  expiresAt: string;
};

const getRiskColor = (status: string) => {
  switch (status.toUpperCase()) {
    case "LOW": return "#00FF00";
    case "MEDIUM": return "#FFD700";
    case "HIGH": return "#FF0000";
    default: return "#ff6363";
  }
};

const areZonesOverlapping = (a: RiskZone, b: RiskZone, radius = 200) => {
  const R = 6371e3;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const φ1 = toRad(a.latitude);
  const φ2 = toRad(b.latitude);
  const Δφ = toRad(b.latitude - a.latitude);
  const Δλ = toRad(b.longitude - a.longitude);
  const aVal = Math.sin(Δφ / 2) ** 2 + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(aVal), Math.sqrt(1 - aVal));
  const distance = R * c;
  return distance <= radius * 2;
};

const clusterKey = (lat: number, lng: number) => `${(lat * 100).toFixed(0)}-${(lng * 100).toFixed(0)}`;

const CountryMap: React.FC = () => {
  const [currentPosition, setCurrentPosition] = useState<{ lat: number; lng: number } | null>(null);
  const [riskZones, setRiskZones] = useState<RiskZone[]>([]);
  const [predictedZones, setPredictedZones] = useState<PredictedZone[]>([]);
  const [activeZone, setActiveZone] = useState<RiskZone | null>(null);
  const [relatedZones, setRelatedZones] = useState<RiskZone[]>([]);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [zoom, setZoom] = useState(14);
  const [isLoading, setIsLoading] = useState(true);

  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setCurrentPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
            },
            () => {
              setCurrentPosition({ lat: -11.2027, lng: 17.8739 });
            }
          );
        } else {
          setCurrentPosition({ lat: -11.2027, lng: 17.8739 });
        }

        const [resReports, resPredicted] = await Promise.all([
          axios.get<RiskZone[]>(`${apiUrl}/report`),
          axios.get<PredictedZone[]>(`${apiUrl}/predicted-risk-zones`)
        ]);

        setRiskZones(resReports.data);
        setPredictedZones(resPredicted.data);

      } catch (err) {
        console.error("Erro ao buscar zonas:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleZoneClick = (zone: RiskZone) => {
    const overlapping = riskZones.filter(z => z.id !== zone.id && areZonesOverlapping(zone, z));
    setActiveZone(zone);
    setRelatedZones(overlapping);
  };

  const onPlaceChanged = () => {
    if (autocompleteRef.current && map) {
      const place = autocompleteRef.current.getPlace();
      if (place.geometry && place.geometry.location) {
        const location = place.geometry.location;
        map.panTo({ lat: location.lat(), lng: location.lng() });
        map.setZoom(14);
      }
    }
  };

  const getAdjustedRadius = (lat: number, lng: number): number => {
    if (!map) return 200;

    const projection = map.getProjection();
    if (!projection) return 200;

    const centerPoint = projection.fromLatLngToPoint(new google.maps.LatLng(lat, lng));
    const offsetPoint = projection.fromLatLngToPoint(new google.maps.LatLng(lat + 0.001, lng));

    if (!centerPoint || !offsetPoint) return 200;

    const distanceInWorld = Math.sqrt(
      (centerPoint.x - offsetPoint.x) ** 2 +
      (centerPoint.y - offsetPoint.y) ** 2
    );

    const scale = Math.pow(2, map.getZoom() ?? 14); // fallback zoom = 14
    return 200 / (distanceInWorld * scale); // ajusta proporcionalmente
  };


  const clusteredZones = useMemo(() => {
    const grouped = new Map<string, RiskZone[]>();
    for (const zone of riskZones) {
      const key = clusterKey(zone.latitude, zone.longitude);
      if (!grouped.has(key)) grouped.set(key, []);
      grouped.get(key)!.push(zone);
    }
    return Array.from(grouped.values()).map(group => ({
      ...group[0],
      count: group.length
    }));
  }, [riskZones]);

  if (isLoading || !currentPosition) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <svg className="animate-spin h-8 w-8 text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
        </svg>
        <span className="mt-2 text-gray-600">Carregando reportes...</span>
      </div>
    );
  }

  return (
    <LoadScript googleMapsApiKey={googleMapsApiKey} libraries={["places"]}>
      <div style={{ position: "absolute", zIndex: 10, top: 10, left: "50%", transform: "translateX(-50%)" }}>
        <Autocomplete
          onLoad={(autocomplete) => autocompleteRef.current = autocomplete}
          onPlaceChanged={onPlaceChanged}
        >
          <input
            type="text"
            placeholder="Buscar local..."
            ref={inputRef}
            className="w-[300px] px-4 py-2 rounded-lg shadow-md border border-gray-300 focus:outline-none"
          />
        </Autocomplete>
      </div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition}
        zoom={zoom}
        onLoad={(mapInstance) => {
          setMap(mapInstance);
          setZoom(mapInstance.getZoom() ?? 14);
        }}
        onZoomChanged={() => setZoom(map?.getZoom() ?? 14)}
      >
        <Circle
          center={currentPosition}
          radius={20}
          options={{ fillColor: "#4285F4", fillOpacity: 1, strokeWeight: 0 }}
        />

        {clusteredZones.map((zone) => (
          <>
            <Circle
              key={zone.id}
              center={{ lat: zone.latitude, lng: zone.longitude }}
              radius={getAdjustedRadius(zone.latitude, zone.longitude)}
              options={{
                strokeColor: getRiskColor(zone.status),
                strokeOpacity: 0.5,
                strokeWeight: 1,
                fillColor: getRiskColor(zone.status),
                fillOpacity: 0.2
              }}
              onClick={() => handleZoneClick(zone)}
            />
            {zone.count > 1 && (
              <OverlayView
                position={{ lat: zone.latitude, lng: zone.longitude }}
                mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
              >
                <div className="text-xs px-2 py-1 rounded shadow border border-gray-300">
                  {zone.count}
                </div>
              </OverlayView>
            )}
          </>
        ))}

        {activeZone && (
          <ZoneModal
            key={activeZone.id}
            zone={activeZone}
            relatedZones={relatedZones}
            onClose={() => {
              setActiveZone(null);
              setRelatedZones([]);
            }}
            onSelectRelated={(zone) => handleZoneClick(zone)}
            onUpdateStatus={(id, newStatus) => {
              setRiskZones((prev) =>
                prev.map((zone) =>
                  zone.id === id ? { ...zone, status: newStatus } : zone
                )
              );
            }}
          />
        )}
        {predictedZones.map((p) => (
          <Circle
            key={p.id}
            center={{ lat: p.latitude, lng: p.longitude }}
            radius={Math.max(400, 200 - (zoom - 14) * 10)}
            options={{
              strokeColor: "#999",
              fillColor: "#ccc",
              strokeWeight: 0.3,
              strokeOpacity: 0.3,
              fillOpacity: 0.3
            }}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default CountryMap;
