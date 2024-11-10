import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onDeletePlant, onUpdatePlant }) {
  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList
        plants={plants}
        onDeletePlant={onDeletePlant}
        onUpdatePlant={onUpdatePlant}
      />
    </main>
  );
}

export default PlantPage;
