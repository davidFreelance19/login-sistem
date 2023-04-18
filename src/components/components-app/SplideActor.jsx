import { SplideSlide } from "@splidejs/react-splide";
import { useNavigate } from "react-router-dom";
const SplideActor = ({ actor, height }) => {
  const navigate = useNavigate();
  return (
    <SplideSlide>
      <blockquote
        className={`w-full bg-no-repeat bg-cover bg-center text-6xl relative rounded-lg hover:cursor-pointer p-4 px-10`}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${actor.profile_path})`,
          height: `${height}`,
        }}
        onClick={() =>
          navigate(`/busqueda/actor/${actor.name.trim()}/${actor.id}`)
        }
      >
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0ae8] py-8 px-4 items-end flex z-[1] rounded-lg">
          <div className="text-white ">
            <h3 className="text-3xl font-bold">{actor.name}</h3>
            <p className="text-base">{actor.character}</p>
          </div>
        </div>
      </blockquote>
    </SplideSlide>
  );
};

export default SplideActor;
