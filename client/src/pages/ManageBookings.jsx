import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";
import Spinner from "../components/common/Spinner";

import { getBookings } from "../services/bookingService";

import "../styles/manageBookings.css";

function ManageBookings() {

    const [loading, setLoading] = useState(true);

    const [bookings, setBookings] = useState([]);

    const [selectedBooking, setSelectedBooking] = useState(null);

    useEffect(() => {

        fetchBookings();

    }, []);

    const fetchBookings = async () => {

        try {

            const token = localStorage.getItem("token");

            const data = await getBookings(token);

            setBookings(data);

        }
        catch (error) {

            console.log(error);

        }
        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return <Spinner />;

    }

    return (

        <AdminLayout>

            <h1>Manage Bookings</h1>

            {

                bookings.length === 0 ?

                    (

                        <p>No bookings yet.</p>

                    )

                    :

                    (

                        <table className="booking-table">

                            <thead>

                                <tr>

                                    <th>Name</th>
                                    <th>Phone</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Action</th>

                                </tr>

                            </thead>

                            <tbody>

                                {

                                    bookings.map((booking) => (

                                        <tr key={booking._id}>

                                            <td>{booking.name}</td>

                                            <td>{booking.phone}</td>

                                            <td>{booking.date}</td>

                                            <td>{booking.time}</td>

                                            <td>

                                                <button

                                                    onClick={() =>
                                                        setSelectedBooking(booking)
                                                    }

                                                >

                                                    View

                                                </button>

                                            </td>

                                        </tr>

                                    ))

                                }

                            </tbody>

                        </table>

                    )

            }

            {

                selectedBooking && (

                    <div className="booking-modal">

                        <div className="modal-content">

                            <h2>Booking Details</h2>

                            <p><strong>Name:</strong> {selectedBooking.name}</p>

                            <p><strong>Phone:</strong> {selectedBooking.phone}</p>

                            <p><strong>Email:</strong> {selectedBooking.email}</p>

                            <p><strong>Date:</strong> {selectedBooking.date}</p>

                            <p><strong>Time:</strong> {selectedBooking.time}</p>

                            <p><strong>Property ID:</strong> {selectedBooking.propertyId}</p>

                            <button

                                onClick={() =>
                                    setSelectedBooking(null)
                                }

                            >

                                Close

                            </button>

                        </div>

                    </div>

                )

            }

        </AdminLayout>

    );

}

export default ManageBookings;