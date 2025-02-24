import React from "react";
import ActivityCard from "./ActivityCard";
import { Trip } from "@/types/Trip";

const Activity = ({trip}: {trip : Trip}) => {
  return (
    <div>
      <ActivityCard trip={trip}
      />
    </div>
  );
};

export default Activity;
