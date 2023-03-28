"use client";
import React, { useState } from "react";

const SavingForm = () => {
  const [category, setCategory] = useState("Formación");
  const [concept, setConcept] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  const handleConceptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConcept(event.target.value);
  };

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const currentDate = new Date();
    const monthNames = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
    const currentMonth = monthNames[currentDate.getMonth()];
    alert(`Has gastado ${quantity}€ en la categoría de ${category} para el concepto ${concept} en ${currentMonth}.`);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="category">Categoría:</label>
        <select id="category" name="category" value={category} onChange={handleCategoryChange}>
          <option value="Formación">Formación</option>
          <option value="Comida">Comida</option>
          <option value="Yolanda">Yolanda</option>
          <option value="Regalos">Regalos</option>
          <option value="Ocio">Ocio</option>
          <option value="Gasoil">Gasoil</option>
          <option value="Perros">Perros</option>
        </select>
      </div>
      <div>
        <label htmlFor="concept">Concepto:</label>
        <input type="text" id="concept" name="concept" value={concept} onChange={handleConceptChange} />
      </div>
      <div>
        <label htmlFor="quantity">Cantidad:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={handleQuantityChange} />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default SavingForm;
