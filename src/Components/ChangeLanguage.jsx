import React, { useState } from "react";

export default function ChangeLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <select value={selectedLanguage} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="it">Italiano</option>
      <option value="de">German</option>
      <option value="fr">French</option>
      <option value="ar">Arabic</option>
      <option value="es">Spanish</option>
    </select>
  );
};
