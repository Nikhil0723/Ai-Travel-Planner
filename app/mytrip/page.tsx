// src/pages/page.tsx
import React from "react";
import TripCard from "@/components/TripCard";

const Page = () => {
  return (
    <section className="p-10">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-6">MY TRIPS</h1>

      {/* Grid Layout for Trip Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
       
          <TripCard />
       
      </div>
    </section>
  );
};

export default Page;