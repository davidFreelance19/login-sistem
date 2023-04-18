export default function FormularioBusqueda({ setCategoria }) {
  return (
    <form className="flex flex-col lg:flex-row mt-6 gap-10 justify-between grow pb-6 md:pb-10">
      <div className="flex items-center  lg:w-3/5 gap-3">
        <input
          className="w-8/12 p-2 bg-[#1D1D1D] border-b-2 border-slate-100"
          name="busqueda"
          type="text"
          placeholder="Haga busqueda por el titulo de la pelicula"
        ></input>
      </div>
      <div className="flex gap-6 items-center">
        <label className="text-white font-bold">Seleccione la categoria:</label>
        <select
          name="select"
          id="categoriaId"
          className="p-2 bg-[#1D1D1D] border-b-2 border-slate-100 text-white"
          onChange={(e) => setCategoria(e.target.value)}
        >
          <option value="movie">Peliculas</option>
          <option value="tv-shows">Series de TV</option>
        </select>
      </div>
    </form>
  );
}
