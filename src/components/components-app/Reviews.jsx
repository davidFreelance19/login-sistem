import Loader from "./Loader";
import { useGetMovies } from "../../hooks/useGetMovies";
import { formatearFecha } from "../../helpers";
const Reviews = ({ id, type }) => {
  const { queryMovie } = useGetMovies(`${type}/${id}/reviews`);
  return (
    <>
      {queryMovie.isLoading ? (
        <div
          className={`w-full h-[100vh] grid place-content-center place-items-center bg-[#1D1D1D]  z-[111] relative preloader ${
            queryMovie.isLoading ? "loading" : ""
          }`}
        >
          <Loader loading={queryMovie.isLoading} />
        </div>
      ) : (
        <>
          {queryMovie.data.results.length > 0 ? (
            queryMovie.data.results.map((comment) => (
              <blockquote
                className="flex items-center gap-4 mt-8 border p-4 rounded-lg"
                key={comment.author +  Math.random().toString(32).substring(2) + Date.now().toString(32)}
              >
                <div
                  style={{
                    backgroundImage: `url(${
                      comment.author_details.avatar_path !== null
                        ? comment.author_details.avatar_path.includes("avatar")
                          ? comment.author_details.avatar_path.slice(1, -1)
                          : `https://www.gravatar.com/avatar${comment.author_details.avatar_path}`
                        : ""
                    })`,
                  }}
                  className="w-[60px] h-[60px] bg-no-repeat bg-cover bg-center rounded-full"
                ></div>
                <section className="max-w-[90%]">
                  <div className="flex items-center gap-4 justify-between">
                    <h2 className="text-white text-lg font-bold">
                      User:{" "}
                      <span className="text-base font-normal">
                        {comment.author}
                      </span>
                    </h2>
                    <p className="text-white text-base font-normal comment">
                      {formatearFecha(comment.created_at)}
                    </p>
                  </div>
                  <p className="text-white font-bold text-xl">
                    Review:{" "}
                    <span className="text-base font-normal comment">
                      {comment?.content}
                    </span>
                  </p>
                </section>
              </blockquote>
            ))
          ) : (
            <h2 className="text-white text-lg font-bold">
              Lo sentimos, por el momento no se tienen reviews
            </h2>
          )}
        </>
      )}
    </>
  );
};

export default Reviews;
