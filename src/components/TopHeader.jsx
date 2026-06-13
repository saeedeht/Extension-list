export const TopHeader = ({ products }) => {
  const isActiveCount = products.filter((item) => item.isActive).length;

  return (
    <div className="w-full h-20 flex justify-between items-center  ">
      <h2 className="text-2xl font-extrabold">
        Extensions List ({products.length})
      </h2>
      <div className="flex justify-center items-center gap-5 ">
        <div className="bg-red-500 rounded-3xl px-4 py-2">All</div>
        <div className="bg-[rgba(255,255,255,0.3)] rounded-3xl px-4 py-2">
          Active({isActiveCount})
        </div>
        <div className=" bg-[rgba(255,255,255,0.3)] rounded-3xl px-4 py-2">
          Inactive({products.length - isActiveCount})
        </div>
      </div>
    </div>
  );
};
