import { useState } from "react";
import { movieCategorias, tvShowsCategorias } from "../../db";
import Categoria from "./Categoria";
import FormularioBusqueda from "./FormularioBusqueda";

export default function BusquedaCategorias() {
  const [categoriaForm, setCategoria] = useState("movie");
  return (
    <>
      <FormularioBusqueda setCategoria={setCategoria} />
      <div className="flex flex-wrap justify-between mt-8">
        {categoriaForm === "movie"
          ? movieCategorias.map((categoria) => (
              <Categoria
                type={categoriaForm}
                key={categoria.id}
                categoria={categoria}
              />
            ))
          : tvShowsCategorias.map((categoria) => (
              <Categoria
                key={categoria.id}
                type={categoriaForm}
                categoria={categoria}
              />
            ))}
      </div>
    </>
  );
}
