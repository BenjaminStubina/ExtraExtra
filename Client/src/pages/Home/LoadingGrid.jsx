import loadingImage from "../../assets/images/online-news-lg.png";

export default function LoadingGrid() {
  const LoadingUnit = () => {
    return (
      <article
        className={`_w-full relative overflow-hidden rounded border-4 border-gray-600 animate-pulse`}
      >
        <div className="flex aspect-square _w-full">
          <img
            src={loadingImage}
            className={`_max-w-full object-contain object-center`}
          />
        </div>
      </article>
    );
  };

  return (
    <>
      {Array(18)
        .fill(true)
        .map((item, index) => (
          <LoadingUnit key={index} />
        ))}
    </>
  );
}
