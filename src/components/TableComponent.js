import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { connect } from "react-redux";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "No",

    headerStyle: () => {
      return { width: "6%" };
    },
    sort: true,
  },
  {
    dataField: "nim",
    text: "Nim",
    headerStyle: () => {
      return { width: "9%" };
    },
  },
  {
    dataField: "nama",
    text: "Nama",
    headerStyle: () => {
      return { width: "15%" };
    },
  },
  {
    dataField: "umur",
    text: "Umur",
    headerStyle: () => {
      return { width: "6%" };
    },
  },
  {
    dataField: "alamat",
    text: "Alamat",
    headerStyle: () => {
      return { width: "8%" };
    },
  },
  {
    dataField: "aksi",
    text: "Action",
    headerStyle: () => {
      return { width: "18%" };
    },
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"details/" + row.id}>
            <Button color="dark" className="mr-3">
              <FontAwesomeIcon icon={faInfo} />
              Detail
            </Button>
          </Link>
          <Link to={"edit/" + row.id}>
            <Button color="primary" className="mr-3">
              <FontAwesomeIcon icon={faEdit} />
              Edit
            </Button>
          </Link>
          <Button color="danger" className="mr-3">
            <FontAwesomeIcon icon={faTrash} />
            Delete
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,
  };
};
const TableComponent = (props) => {
  return (
    <div className="mt-3">
      <Container>
        {props.getUsersList ? (
          <ToolkitProvider
            bootstrap4
            keyField="id"
            data={props.getUsersList}
            columns={columns}
            defaultSorted={defaultSorted}
            search
          >
            {(props) => (
              <div>
                <Row>
                  <Col>
                    <Link to={"/create"}>
                      <Button color="primary" className="mr-3">
                        <FontAwesomeIcon icon={faUserPlus} />
                        Create User
                      </Button>
                    </Link>
                  </Col>
                  <Col>
                    <div className="float-right">
                      <SearchBar
                        {...props.searchProps}
                        placeholder="Search..."
                      />
                    </div>
                  </Col>
                </Row>
                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory()}
                />
              </div>
            )}
          </ToolkitProvider>
        ) : (
          <div className="text-center">
            {props.errorUsersList ? (
              <h1>{props.errorUsersList}</h1>
            ) : (
              <Spinner color="dark" />
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
