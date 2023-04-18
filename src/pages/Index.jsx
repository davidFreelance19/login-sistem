import ScrollBar from "../components/components-app/ScrollBar";
import ScrollBarHero from "../components/components-app/ScrollBarHero";
const Index = () => {
  return (
    <>
      <ScrollBarHero busqueda="movie/top_rated" />
      <ScrollBar
        heading={"Nuevos lanzamientos"}
        height="460px"
        busqueda="movie/upcoming"
      />
      <ScrollBar
        heading={"Top 10 peliculas de la semana"}
        height="460px"
        busqueda="trending/movie/day"
      />
      <ScrollBar
        heading={"Top 10 Series de TV  de la semana"}
        height="650px"
        sectionXl={true}
        busqueda="trending/tv/week"
      />
    </>
  );
};

export default Index;
