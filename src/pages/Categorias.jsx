import BusquedaCategorias from "../components/components-app/BusquedaCategoria";

export default function Categorias() {
  return (
    <main className="w-[100vw] grid place-content-center">
      <section className="flex flex-col py-6 px-4 w-[90%] mx-auto lg:max-w-[1200px] justify-center  lg:grow">
        <BusquedaCategorias />
      </section>
    </main>
  );
}
