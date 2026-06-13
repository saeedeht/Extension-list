export const Card = ({ data: { name, logo, description, isActive } }) => {
  return (
    <>
      <div className="w-[calc(33.333%-1rem)] bg-[#2F364B] p-6 rounded-3xl">
        <div className="flex justify-between gap-4 mb-8">
          <img className="w-20 h-20" src={logo} alt={name} />
          <div>
            <h3 className="font-bold">{name}</h3>
            <p className="font-thin">{description}</p>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <button className="bg-[#545969] p-4 rounded-3xl">Remove</button>
          <input type="checkbox" checked={isActive} readOnly />
        </div>
      </div>
    </>
  );
};
