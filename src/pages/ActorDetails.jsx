import { useParams, Link } from "react-router-dom";
import { useGetMovies } from "../hooks/useGetMovies";
import Loader from "../components/components-app/Loader";
import { formatearFecha } from "../helpers";
import CardMovieActor from "../components/components-app/CardMovieActor";
const ActorDetails = () => {
  const params = useParams();
  const { queryMovie } = useGetMovies(`person/${params.id}`);
  return (
    <>
      {queryMovie.isFetching ? (
        <div
          className={`w-full h-[100vh] grid place-content-center place-items-center bg-[#1D1D1D]  z-[111] relative preloader ${
            queryMovie.isLoading ? "loading" : ""
          }`}
        >
          <Loader loading={queryMovie.isLoading} />
        </div>
      ) : (
        <>
          <header className="w-[90%] max-w-[1460px] my-14 mx-auto flex justify-end">
            <Link
              to="/"
              className="text-lg font-bold text-white h-[45px] border-b"
            >
              Go Back
            </Link>
          </header>
          <section className="w-[90%] max-w-[1460px] my-14 mx-auto flex items-center mb-20">
            <div className="flex-col flex gap-y-4 w-4/12  items-center">
              <img
                src={`https://image.tmdb.org/t/p/w500/${queryMovie.data.profile_path}`}
                height="300"
                width="300"
                className="rounded-lg"
              />
              <div>
                <h1 className="text-4xl font-bold text-white text-center">
                  {queryMovie.data.name}
                </h1>
                <p className="text-xl font-bold text-white text-center my-3">
                  Birthday:{" "}
                  <span className="text-lg font-normal">
                    {formatearFecha(queryMovie.data.birthday)}
                  </span>
                </p>
              </div>
            </div>
            <div className="w-8/12 grid">
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">
                  Biography:
                </h2>
                <p className="text-white text-lg">
                  {queryMovie.data.biography}
                </p>
              </div>
            </div>
          </section>
          <h2 className="text-white text-4xl font-bold w-[90%] max-w-[1460px] my-14 mx-auto border-b py-4">
            Movies Credits
          </h2>
          <CardMovieActor id={params.id} movie={true} />
          <h2 className="text-white text-4xl font-bold w-[90%] max-w-[1460px] my-14 mx-auto border-b py-4">
            Series Credits
          </h2>
          <CardMovieActor id={params.id} />
        </>
      )}
    </>
  );
};

export default ActorDetails;
