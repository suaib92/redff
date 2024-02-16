import React from 'react';

function BusBookingForm() {
  // Retrieve booking data from local storage
  const bookingData = JSON.parse(localStorage.getItem('bookingData'));

  // Retrieve selected bus data from local storage
  const selectedBus = JSON.parse(localStorage.getItem('selectedBus'));

  // Check if booking data or selected bus data exists
  if (!bookingData || !selectedBus) {
    return <div>No booking data found.</div>;
  }

  // Destructure booking data
  const { selectedSeats, searchDetails, selectedSeatPrices } = bookingData;

  return (
    <div className="bg-gray-100 p-8">
      {/* Render the booking details using the retrieved data */}
      <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
      <div>
        <h3 className="text-lg font-semibold mb-2">Boarding & Dropping</h3>
        <p>From: {`${searchDetails.fromLocation.state} - ${searchDetails.fromLocation.district}`}</p>
        <p>To: {`${searchDetails.toLocation.state} - ${searchDetails.toLocation.district}`}</p>
        <p>Date: {searchDetails.selectedDate}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mt-4 mb-2">Selected Seats</h3>
        <ul>
          {selectedSeats.map((seat, index) => (
            <li key={seat}>{seat} - ₹{selectedSeatPrices[index]}</li>
          ))}
        </ul>
      </div>

      {/* Render the selected bus details */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Selected Bus Details</h2>
      <div>
        <h3 className="text-lg font-semibold mb-2">Bus Name: {selectedBus.name}</h3>
        <p>Rating: {selectedBus.rating}</p>
        <p>Type: {selectedBus.type}</p>
        <p>Seats Left: {selectedBus.seatsLeft}</p>
        <p>Windows Left: {selectedBus.windowsLeft}</p>
        <p>Start Time: {selectedBus.startTime}</p>
        <p>Duration: {selectedBus.duration}</p>
        <p>End Time: {selectedBus.endTime}</p>
        <p>Cost: {selectedBus.cost}</p>
        {/* You can add more details as needed */}
      </div>
    </div>
  );
}

export default BusBookingForm;
