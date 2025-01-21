import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HistoryPage = function () {

    const companyList = useSelector((store)=> {return store.companySearch.companyCrono})


  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className=" display-1">Research History</h1>
          <div>
          <Link to="/" className="btn btn-outline-primary">
              Home
            </Link>
            <Link to="/favourites" className="btn btn-outline-info">
              My Favourites
            </Link>
                </div>
                </Col>
              </Row>
              <Container fluid>

                {
                    companyList && companyList.map((element,i) => {
                        return (
                        <Row key={i} className="mx-0 mt-3 p-3"
                        style={{ border: "1px solid #00000033", borderRadius: 4 }}>
                            <Col>
                                <Link to={`/${element}`}>{element}</Link>
                            </Col>
                        </Row>
                        )
                    })
                }
              </Container>
            

          
    </Container>
  );
};

export default HistoryPage;




