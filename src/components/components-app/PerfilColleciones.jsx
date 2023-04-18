import SplideMainItem from "./SplideMainItem";
const PerfilColleciones = ({ auth, dataSeleccionada }) => {
  return (
    <section className="w-[90%] max-w-[1460px] my-14 mx-auto  mb-20">
      <h2 className="text-white font-bold text-xl">
        Bienvenido, {auth.nombre}.
      </h2>
      <h3 className="text-white font-bold text-xl my-10 border-b py-4">
        Lista de ver más tarde
      </h3>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 2xl:grid-cols-5 gap-x-10 gap-y-5  mx-auto">
        {dataSeleccionada.map(
          (result) =>
            result.category === "verDespues" && (
              <SplideMainItem result={result} key={result.id} />
            )
        )}
      </section>
      <h3 className="text-white font-bold text-xl my-10 border-b py-4">
        Cosas que te han gustado
      </h3>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 2xl:grid-cols-5 gap-x-10 gap-y-5  mx-auto">
        {dataSeleccionada.map(
          (result) =>
            result.category === "meGusta" && (
              <SplideMainItem result={result} key={result.id} />
            )
        )}
      </section>
    </section>
  );
};

export default PerfilColleciones;
