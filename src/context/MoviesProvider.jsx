import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/clienteAxios";
const MovieContext = createContext();
const MovieProvider = ({ children }) => {
  const [dataSeleccionada, setDataSeleccionada] = useState({});
  const [cargandoMovies, setCargando] = useState(true);
  const [modal, setModal] = useState(false);
  useEffect(() => {
    const obtenerMovies = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios.get("/movies", config);
        setDataSeleccionada(data);
      } catch (error) {
        console.log(error);
      }
      setCargando(false);
    };
    obtenerMovies();
  }, [dataSeleccionada]);

  const handleClickMovie = async (proyecto) => {
    if (proyecto.seleccionada) {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        await clienteAxios.delete(`/movies/${proyecto.eliminar}`, config);
      } catch (error) {
        console.log(error);
      }
    } else {
      for (let i of dataSeleccionada) {
        if ((Number(i.id) === proyecto.id) & (i.category === proyecto.category))
          return;
      }
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        await clienteAxios.post("/movies", proyecto, config);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleClickMeGusta = async (proyecto) => {
    if (proyecto.seleccionada) {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        await clienteAxios.delete(`/movies/${proyecto.eliminar}`, config);
      } catch (error) {
        console.log(error);
      }
    } else {
      for (let i of dataSeleccionada) {
        if ((Number(i.id) === proyecto.id) & (i.category === proyecto.category))
          return;
      }
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        await clienteAxios.post("/movies", proyecto, config);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleFormularioList = async (lista, data) => {
    console.log(lista);
    console.log(data)
  };
  return (
    <MovieContext.Provider
      value={{
        dataSeleccionada,
        handleClickMovie,
        cargandoMovies,
        handleClickMeGusta,
        modal,
        handleFormularioList,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
export { MovieProvider };
export default MovieContext;
