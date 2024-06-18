"use client";
import React, { useState, useEffect } from "react";

const SavingForm = () => {
  const [category, setCategory] = useState("Caprichos");
  const [concept, setConcept] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponse, setApiResponse] = useState("");

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
    const currentMonth = monthNames[currentDate.getMonth()];
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (isSubmitting) {
      const currentDate = new Date();
      const currentMonth = monthNames[currentDate.getMonth()];

      fetch(
        `https://hook.eu1.make.com/m2geunx9mps96a3v5jos6bu5dp1kq6xz?concepto=${concept}&categoria=${category}&cantidad=${quantity.replace(".",",")}&mes=${currentMonth}`
      )
        .then((response) => response.text())
        .then((data) => setApiResponse(data))
        .catch((error) => console.log(error));

      setIsSubmitting(false);
    }
  }, [isSubmitting]);

  useEffect(() => {
    if (apiResponse) {
      alert(apiResponse);
      setApiResponse("");
    }
  }, [apiResponse]);

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="category">Categoría:</label>
        <select id="category" name="category" value={category} onChange={handleCategoryChange}>
          <option value="Caprichos">Caprichos</option>
          <option value="Formación">Formación</option>
          <option value="Comida">Comida</option>
          <option value="David">David</option>
          <option value="Regalos">Regalos</option>
          <option value="Ocio">Ocio</option>
          <option value="Gasoil">Gasoil</option>
          <option value="Perros">Perros</option>
          <option value="Casa">Casa</option>
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
