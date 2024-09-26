import Blood from "../../components/Blood";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import { useGetBloodsQuery } from "../../slices/bloodsApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import SearchBox from "../../components/SearchBox";
import FormContainer from "../../components/FormContainer";
import { ListGroup, Button, Col } from "react-bootstrap";

const BloodScreen = () => {
  const navigate = useNavigate();
  const { keyword } = useParams();

  const { data, isLoading, error } = useGetBloodsQuery({ keyword });

  const DonorPage = () => {
    navigate("/requestblood");
  }

  return (
    <>
      <h1 className="text-center mb-5">Blood/ Organ Donor Details </h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant={"danger"}>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <FormContainer>
            {/* Center the button using Bootstrap's flex utilities */}
            <div className="d-flex justify-content-center mb-3">
              <Button className="btn-block" type="button" onClick={DonorPage}>
                Request Blood/Organ
              </Button>
            </div>
            <Col>
              <SearchBox />
            </Col>
          </FormContainer>
          <div className="d-flex justify-content-center row mb-4">
            {data.bloods.length > 0 &&
              data.bloods.map((blood) => <Blood blood={blood} />)}
          </div>
        </>
      )}
    </>
  );
};

export default BloodScreen;
