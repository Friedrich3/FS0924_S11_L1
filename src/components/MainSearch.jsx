import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Spinner, Alert } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { clearSearchAction, dataFetchAction } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState(""); //controllo form
  const jobs = useSelector((store) => {
    return store.fetchData.fetchedData.data;
  });
  const isLoading = useSelector((store)=>{ return store.fetchData.isLoading})
  const isError = useSelector((store)=>{ return store.fetchData.isError})

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearSearchAction([]));
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";
  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(baseEndpoint + query + "&limit=20");
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       setJobs(data);
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(dataFetchAction(query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
          <div className="d-flex">
            <Link to="/favourites" className="btn btn-outline-info">
              My Favourites
            </Link>
            <Link to="/history" className="btn btn-outline-secondary ms-auto">
              History
            </Link>
          </div>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">

        {
          isLoading && 
          <Row >
            <Col className="text-center mt-5 pt-5">
              <Spinner variant="info" ></Spinner><span>Loading...</span>
            </Col>
          </Row>
        }
        {
          isError &&  
          <Row >
          <Col className="text-center">
            <Alert variant="danger" dismissible={true}>
              <Alert.Heading>Error 404 - not Found</Alert.Heading>
              <p>La ricerca non ha riportato risultati </p>
              <p>Ricarica la pagina oppure riprova a digitare correttamente </p>
            </Alert>
          </Col>
        </Row>
        }




          {jobs &&
            jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} favourite={false} />
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
