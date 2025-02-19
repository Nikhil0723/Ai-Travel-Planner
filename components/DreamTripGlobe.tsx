import React, { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

interface GlobeMapProps {
  selectedCities: { name: string; coordinates: [number, number] }[];
}

const GlobeMap = ({ selectedCities }: GlobeMapProps) => {
  const globeRef = useRef<any>(null);

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true; // Auto-rotate
      globeRef.current.controls().autoRotateSpeed = 0.5;
      globeRef.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 }); // Default position
    }
  }, []);

  return (
    <div className="w-full h-[500px] flex justify-center items-centerrounded-lg p-4">
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg" // Light theme
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png" // Dark space background
        showAtmosphere={true}
        atmosphereColor="lightblue"
        atmosphereAltitude={0.25}
        enablePointerInteraction={true} // Allows interaction
        animateIn={true} // Smooth animation when loading
        pointsData={selectedCities.map((city) => ({
          lat: city.coordinates[0],
          lng: city.coordinates[1],
          size: 1.5,
        }))}
        pointAltitude={0.05}
        pointColor={() => "#ff4d4d"} // Red markers for cities
        pointRadius={0.6}
        labelsData={selectedCities.map((city) => ({
          lat: city.coordinates[0],
          lng: city.coordinates[1],
          label: city.name,
        }))}
        labelText="label"
        labelSize={1.8}
        labelDotRadius={0.6}
        labelColor={() => "rgba(255, 255, 255, 0.85)"}
        labelResolution={3}
        width={550}
        height={500}
      />
    </div>
  );
};

export default GlobeMap;
