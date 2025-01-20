import { useState } from "react";
import { Row, Col,} from "react-bootstrap";
import { HandThumbsUp, HandThumbsUpFill} from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Job = ({ data , favourite}) => {

  const [isFavourite, setIsFavourite] = useState(favourite)

  const dispatch = useDispatch()
  




  const addToFavourite = () => {
    if(isFavourite === false){
      dispatch({
        type: 'ADD_FAVOURITES',
        payload: data
      })
      setIsFavourite(true)

    }else{
      dispatch({
        type: 'REMOVE_FAVOURITES',
        payload: data._id
      })
      setIsFavourite(false)
    }
  }


  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={7}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={2}>
        <div
          className="d-flex justify-content-center"
          onClick={() => {
            addToFavourite();
          }}
        >
          {
            isFavourite? <HandThumbsUpFill color="cornflowerblue" size={20} />: <HandThumbsUp size={20}/>

          }
        </div>
      </Col>
    </Row>
  );
};

export default Job;
