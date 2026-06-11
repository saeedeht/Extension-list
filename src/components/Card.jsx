export const Card = () => {
  return (
    <>
      <div className="w-100 bg-[#2F364B] p-6  rounded-3xl">
        <div className="flex justify-between gap-4 mb-8">
          <img className="w-20 h-20" />
          <div>
            <h3 className="font-bold">DevLens</h3>
            <p className="font-thin">
              Quickly inspect page layouts and visualize element boundaries.
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-4">
          <button className="bg-[#545969] p-4 rounded-3xl">Remove</button>
          <input type="checkbox"></input>
        </div>
      </div>
    </>
  );
};
