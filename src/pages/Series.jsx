import ScrollBar from "../components/components-app/ScrollBar";
import ScrollBarHero from "../components/components-app/ScrollBarHero";
export default function Series() {
  return (
    <>
      <ScrollBarHero busqueda="tv/top_rated" />
      <ScrollBar
        heading={"Nuestras recomendaciones"}
        height="460px"
        busqueda="trending/tv/week"
      />
      <ScrollBar
        heading={"Series animadas"}
        height="460px"
        busqueda="tv/37854/recommendations"
      />
      <ScrollBar
        heading={"Las series mas populares"}
        height="460px"
        busqueda="tv/1399/recommendations"
      />
      <ScrollBar
        heading={"Series al aire"}
        height="650px"
        sectionXl={true}
        busqueda="tv/on_the_air"
      />
    </>
  );
}
