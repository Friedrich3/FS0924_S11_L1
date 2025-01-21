import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { companyFetchAction } from "../redux/action";

const CompanySearchResults = () => {
  // const [jobs, setJobs] = useState([]);
  const params = useParams();
  const dispatch = useDispatch()

  const jobs = useSelector((store) => { return store.companySearch.companyJobs.data})
  
  useEffect(() => {
    dispatch(companyFetchAction(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";
  // const getJobs = async () => {
  //   try {
  //     const response = await fetch(baseEndpoint + params.company);
  //     if (response.ok) {
  //       const { data } = await response.json();
  //       console.log(data)
        
  //     } else {
  //       alert("Error fetching results");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          <Link to='/' className="btn btn-outline-secondary">Back to Search</Link>
          <Link to='/favourites' className="btn btn-outline-info">My Favourites</Link>
          {jobs && jobs.map(jobData => (
            <Job key={jobData._id} data={jobData} favourite={false}/>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
