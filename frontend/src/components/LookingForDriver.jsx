import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehicleFound(false);
        }}
        className="p-1 text-center w-full absolute top-0"
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>

      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-40"
          src="https://tb-static.uber.com/prod/udam-assets/2612256b-fe40-4f78-b94c-d2ffdec56a23.png"
          alt=""
        />
      </div>

      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
          <i className="text-lg ri-map-pin-user-line"></i>
          <div>
            <h3 className="text-lg font-medium">563/11-A</h3>
            <p className="text-sm -mt-1 text-gray-600">
              Kankariya Talab, Bhopla
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
          <i className="text-lg ri-map-pin-fill"></i>
          <div>
            <h3 className="text-lg font-medium">563/11-A</h3>
            <p className="text-sm -mt-1 text-gray-600">
              Kankariya Talab, Bhopla
            </p>
          </div>
        </div>

        <div className="flex items-center gap-5 p-3 border-gray-200">
          <i className="text-lg ri-currency-line"></i>
          <div className="">
            <h3 className="text-lg font-medium">₹193.20</h3>
            <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LookingForDriver