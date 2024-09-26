import React from "react";
import { useSelector } from "react-redux";
import { useGetAppointmentsQuery } from "../../slices/appointmentsApiSlice";
import { Table, Button, Row, Col } from "react-bootstrap";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const AppointmentListScreen = () => {
  const { data: appointments, isLoading, error } = useGetAppointmentsQuery();

  return (
    <>
      <Row className="align-items-center my-5 mx-3">
        <Col>
          <h1>Appointments</h1>
        </Col>
      </Row>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm mx-4">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>STATUS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment._id}</td>
                <td>{appointment.user?.name}</td>
                <td>{appointment.createdAt.substring(0, 10)}</td>
                <td>
                  {appointment.isApproved ? (
                    <>
                      <FaCheckCircle style={{ color: "green" }} /> Approved on {appointment.ApprovedAt.substring(0, 10)}
                    </>
                  ) : appointment.rejectedAt ? (
                    <>
                      <FaTimes style={{ color: "red" }} /> Rejected on {appointment.rejectedAt.substring(0, 10)}
                    </>
                  ) : (
                    "Pending"
                  )}
                </td>
                <td>
                  <Button variant="warning" className="btn-sm" >
                    Details
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default AppointmentListScreen;
