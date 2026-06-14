export const TopHeader = ({ displayData, setFilter }) => {
  const isActiveCount = displayData.filter((item) => item.isActive).length;

  return (
    <div className="w-full h-20 flex justify-between items-center  ">
      <h2 className="text-2xl font-extrabold">
        Extensions List ({displayData.length})
      </h2>
      <div className="flex justify-center items-center gap-5 ">
        <button
          onClick={() => {
            setFilter("all");
          }}
          className="bg-red-500 rounded-3xl px-4 py-2">
          All
        </button>
        <button
          className="bg-[rgba(255,255,255,0.3)] rounded-3xl px-4 py-2"
          onClick={() => {
            setFilter("active");
            console.log("active clicked");
          }}>
          Active({isActiveCount})
        </button>
        <button
          onClick={() => {
            setFilter("inActive");
            console.log("inActive clicked ");
          }}
          className=" bg-[rgba(255,255,255,0.3)] rounded-3xl px-4 py-2">
          Inactive({displayData.length - isActiveCount})
        </button>
      </div>
    </div>
  );
};
