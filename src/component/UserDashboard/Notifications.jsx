import React, { useState } from 'react';

const Notification = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      requester: 'Jerremy Doe',
      bloodType: 'AB+',
      details: 'Urgent need of AB+ blood for surgery.',
      contact: 'john.doe@example.com',
      location : "Jamsherpur"
    },
    {
      id: 2,
      requester: 'Watson Smith',
      bloodType: 'O-',
      details: 'Looking for O- blood for accident victim.',
      contact: 'jane.smith@example.com',
      location: "amritsar",
    },
    {
      id: 3,
      requester: 'Gabbery Smith',
      bloodType: 'O+',
      details: 'Looking for O- blood for accident victim.',
      contact: 'jane.smith@example.com',
      location: "amritsar",
    },
  ]);

  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleShowDetails = (id) => {
    const selected = requests.find((request) => request.id === id);
    setSelectedRequest(selected);
  };

  return (
    <div>
    <h1>Blood Requests</h1>
    {requests.map((request) => (
      <div key={request.id} className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" defaultChecked={request.id === 1} /> 
        <div className="collapse-title text-xl font-medium" onClick={() => handleShowDetails(request.id)}>
          {request.requester} is looking for {request.bloodType} blood
        </div>
        <div className="collapse-content"> 
          <p>{request.details}</p>
          <p>Contact: {request.contact}</p>
        </div>
      </div>
    ))}
    {selectedRequest && (
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" checked /> 
        <div className="collapse-title text-xl font-medium" onClick={() => setSelectedRequest(null)}>
          {selectedRequest.requester} is looking for {selectedRequest.bloodType} blood
        </div>
        <div className="collapse-content"> 
          <p>{selectedRequest.details}</p>
          <p>Contact: {selectedRequest.contact}</p>
        </div>
      </div>
    )}
  </div>
  );
};

export default Notification;
