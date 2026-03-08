const LocationSearchPanel = (props) => {

  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "22C, Near Malholtra's cafe, Sheryians Coding School, Bhopal",
    "20B, Near Singhai's cafe, Sheryians Coding School, Bhopal",
    "18A, Near Sharma's cafe, Sheryians Coding School, Bhopal",
  ];

  return (
    <div>
      {/* this is a just a sample data */}
      {locations.map(function (elem,idx) {
        return (
          <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className="flex gap-4 border-gray-50 active:border-black border-2 p-3 rounded-xl item-center my-2 justify-start">
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-meduim">{elem}</h4>
          </div>
        );
      })}

    </div>
  );
};

export default LocationSearchPanel;
