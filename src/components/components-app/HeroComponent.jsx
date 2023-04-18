import InformacionPrimaria from "./informacionPrimaria";
const HeroComponent = ({ data, genreListMovies, verMasTarde, listMeGusta }) => {
  return (
    <blockquote
      className="md:h-[750px] bg-no-repeat bg-cover bg-center w-full relative z-[8]"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${data.backdrop_path})`,
      }}
    >
      <div className="py-20 w-10/12 flex-col md:flex-row flex items-center justify-between gap-10 mx-auto">
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w1280/${data.poster_path}`}
            className="rounded-xl max-w-[360px]"
            alt={`poster-${data.title}`}
          />
        </div>

        <div className="w-[90%] xl:w-[85%] mx-auto text-white">
          <h2 className="text-5xl font-bold">
            {data.title ? data.title : data.name}
          </h2>
          {genreListMovies ? (
            <p className="font-bold mt-10 text-xl">
              Genéro:{" "}
              {data.genre_ids.map((idGenre) => (
                <span
                  key={Math.random() + Date.now() + idGenre}
                  className="text-base"
                >
                  {genreListMovies.map(
                    (resultado) => resultado.id === idGenre && resultado.name
                  )}
                  {idGenre !== data.genre_ids[data.genre_ids.length - 1] && ","}{" "}
                </span>
              ))}
            </p>
          ) : (
            <p className="font-bold  mt-5 text-xl">
              Genéro:{" "}
              {data.genres.map((idGenre) => (
                <span
                  key={Math.random() + Date.now() + idGenre}
                  className="text-base"
                >
                  {idGenre.name}
                  {idGenre !== data.genres[data.genres.length - 1] && ","}{" "}
                </span>
              ))}
            </p>
          )}
          <InformacionPrimaria
            puntacion={data.vote_average}
            result={data}
            verMasTarde={verMasTarde}
            listMeGusta={listMeGusta}
          />
          <h2 className="font-bold text-xl mt-2">Synopsis</h2>
          <p className="mt-4 text-lg xl:w-10/12 lg:block hidden">
            {data.overview}
          </p>
        </div>
      </div>

      <div className="absolute top-0 bottom-0 left-0 right-0 bg-[#131212e1] z-[-1]"></div>
    </blockquote>
  );
};

export default HeroComponent;
