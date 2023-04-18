import ScrollBar from "../components/components-app/ScrollBar";
import ScrollBarHero from "../components/components-app/ScrollBarHero";
export default function Movies() {
  return (
    <>
      <ScrollBarHero busqueda="movie/upcoming" />
      <ScrollBar
        heading={"Nuestras recomendaciones"}
        height="460px"
        busqueda='movie/315162/recommendations'
      />
      <ScrollBar
        heading={"Peliculas animadas"}
        height="460px"
        busqueda="movie/810/recommendations"
      />
      
      <ScrollBar
        heading={"Peliculas de Acción"}
        height="460px"
        busqueda="movie/1024546/recommendations"
      />
      <ScrollBar
        heading={"Peliculas Romanticas"}
        height="460px"
        busqueda="movie/703451/recommendations"
      />
      <ScrollBar
        heading={"aclamas por el público"}
        height="650px"
        sectionXl={true}
        busqueda="movie/top_rated"
      />
    </>
  );
}
