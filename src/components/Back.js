import React from 'react'
import { Col, Row } from 'reactstrap'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {Button} from 'reactstrap'

const Back = () => {
    return (
        <Row>
            <Col className="mb-3 mt-3">
            <Link to={"/"}>
            <Button color="white">
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </Button>
          </Link>
            </Col>
        </Row>
    )
}

export default Back
