import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Job from "./Job";

const FavouriteList = function () {
    
    const arrReduxState = useSelector((store) =>{return store.companies.favourites})


  return (
  <Container>
    <Row>
    <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">My Favourites</h1>
        <Link to='/' className="btn btn-outline-info">Home</Link>
        </Col>
    </Row>
    <Row>
    <Col xs={10} className="mx-auto my-3">
        {
            arrReduxState.map( jobData => {
                return(
                    <Job key={jobData._id} data={jobData} favourite={true}/>
                )
        })
        }
    </Col>
    </Row>
  </Container>
  );
};

export default FavouriteList;
