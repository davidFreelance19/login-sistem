import { useNavigate } from "react-router-dom";
export default function Categoria({ categoria, type }) {
  const navigate = useNavigate();
  return (
    <div
      key={categoria.id}
      className={`hover:cursor-pointer m-2 flex h-44 w-44 grow items-center justify-center rounded-lg p-8 text-center text-white ${
        categoria.color ? "bg-red-500" : "bg-indigo-900"
      }`}
      onClick={() =>
        navigate(`/busqueda-categorias/${categoria.categoryName}/${type}/${categoria.id}`)
      }
    >
      <p className="font-bold text-lg">{categoria.categoryName}</p>
    </div>
  );
}
