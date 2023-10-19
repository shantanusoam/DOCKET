import React from "react";

const DocketList = ({ dockets}) => {
    console.log(dockets)
  return (
   
    <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-semibold mb-2">Dockets List</h2>
      <ul className="list-none p-0 m-0">
        {dockets.map((docket, index) => (
            <>
            <li key={index} className="mb-2">
            <strong>{docket.name}</strong> - {docket.startTime} to {docket.endTime} ({docket.hoursWorked} hours) @ ${docket.ratePerHour}/hour
          </li>
             
          {   docket.purchaseOrders.map((order, orderIndex) => (
               <div key={orderIndex}>{order.Description
               }</div>
             ))
           }
            </>
          
        ))}
      </ul>
    </div>
  );
};

export default DocketList;