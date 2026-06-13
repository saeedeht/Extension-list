export const TopHeader = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center  ">
      <h2 className="text-2xl font-extrabold">Extensions List (12)</h2>
      <div className="flex justify-center items-center gap-5 ">
        <div className="bg-red-500 rounded-3xl px-4 py-2">All</div>
        <div className="bg-[rgba(255,255,255,0.3)] rounded-3xl px-4 py-2">
          Active(8)
        </div>
        <div className=" bg-[rgba(255,255,255,0.3)] rounded-3xl px-4 py-2">
          Inactive(4)
        </div>
      </div>
    </div>
  );
};
