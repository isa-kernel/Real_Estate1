import { useEffect, useState } from "react";

import AdminLayout from "../layouts/AdminLayout";
import Spinner from "../components/common/Spinner";

import { getInquiries } from "../services/inquiryService";

import "../styles/manageInquiries.css";

function ManageInquiries() {

  const [loading, setLoading] = useState(true);
  const [inquiries, setInquiries] = useState([]);
  const [selectedInquiry, setSelectedInquiry] = useState(null);

  useEffect(() => {

    fetchInquiries();

  }, []);

  const fetchInquiries = async () => {

    try {

      const token = localStorage.getItem("token");

      const data = await getInquiries(token);

      setInquiries(data);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  };

  if (loading) {

    return <Spinner />;

  }

  return (

    <AdminLayout>

      <h1>Manage Inquiries</h1>

      {inquiries.length === 0 ? (

        <p>No inquiries yet.</p>

      ) : (

        <table className="inquiry-table">

          <thead>

            <tr>

              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date</th>
              <th>Action</th>

            </tr>

          </thead>

          <tbody>

            {

              inquiries.map((inquiry) => (

                <tr key={inquiry._id}>

                  <td>{inquiry.name}</td>

                  <td>{inquiry.phone}</td>

                  <td>{inquiry.email || "-"}</td>

                  <td>

                    {new Date(
                      inquiry.createdAt
                    ).toLocaleDateString()}

                  </td>

                  <td>

                    <button

                      onClick={() =>
                        setSelectedInquiry(inquiry)
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

      )}

      {

        selectedInquiry && (

          <div className="inquiry-modal">

            <div className="modal-content">

              <h2>Inquiry Details</h2>

              <p><strong>Name:</strong> {selectedInquiry.name}</p>

              <p><strong>Phone:</strong> {selectedInquiry.phone}</p>

              <p><strong>Email:</strong> {selectedInquiry.email}</p>

              <p><strong>Property ID:</strong> {selectedInquiry.propertyId}</p>

              <p><strong>Message:</strong></p>

              <p>{selectedInquiry.message}</p>

              <button

                onClick={() =>
                  setSelectedInquiry(null)
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

export default ManageInquiries;