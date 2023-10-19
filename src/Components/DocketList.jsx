import React, { useState } from "react";
import Popup from "./popup";

const DocketList = ({ dockets}) => {
    const [isPopupVisible, setPopupVisible] = useState(false);

    const togglePopup = () => {
      setPopupVisible(!isPopupVisible);
    };
    console.log(dockets)
  return (
   
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-semibold mb-2">Dockets List</h2>
      <ul className="list-none p-0 m-0">
        {dockets.map((docket, index) => (
            <>
            <li key={index} className="mb-2" onClick={togglePopup} className='cursor-pointer bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 hover:bg-slate-300 flex flex-col'>
            <strong>{docket.name}</strong> - {docket.startTime} to {docket.endTime} ({docket.hoursWorked} hours) @ ${docket.ratePerHour}/hour
          </li>
          {isPopupVisible && (
          <Popup onClose={togglePopup}>
          <div className="flex flex-row">
          {   docket.purchaseOrders.map((order, orderIndex) => (
              <div key={orderIndex} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300 flex flex-col">
                {Object.entries(order).map(([key, value]) => {
                if (key && value && key !== "Record Type" && key !== "Amount Invoiced" && key !== "") {
                    // Skip specific keys (empty key, "Record Type", "Amount Invoiced")
                    return (
                        <div className="mb-2" key={key}>
                            <span className="text-gray-600">{key}:</span> {value}
                        </div>
                    );
                }
                return null;
            })}
          </div>
             ))
           }
          </div>
          </Popup>
        )}
        
            </>
          
        ))}
      </ul>
    </div>
  );
};

export default DocketList;