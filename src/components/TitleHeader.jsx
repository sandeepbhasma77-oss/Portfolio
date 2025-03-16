const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="bg-black-200 py-2 px-4 rounded-full">
        <p>{sub}</p>
      </div>
      <div className="">
        <h1 className="font-semibold md:text-5xl text-3xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
