import { InputField } from "./InputField";
import { useState } from "react";

/*
Zadání: Vyřešte tento úkol podobně jako předchozí, pouze s tím rozdílem, že tentokrát budete mít
  dvě pole, do kterých uživatel může psát jméno a příjmení. Výsledné jméno a příjmení se mají
  zobrazit pod nadpisem oddělené mezerou. Budete tedy potřebovat dva stavy, každý pro jedno pole.
*/

export const Ukol5 = () => {
  const [name,setName] = useState("");
  const [surname, setSurname] = useState("")
  return (
    <>
      <p>Jméno: {name} {surname} </p>
      <InputField label="Jméno" type="text" value={name} onValueChange={setName}/>
      <InputField label="Příjmení" type="text" value={surname} onValueChange={setSurname}/>
    </>
  );
};
