import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from 'react-bootstrap-table2-paginator';

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
          <Button color="dark" className="mr-3">
            <FontAwesomeIcon icon={faInfo} />
            Detail
          </Button>
          <Button color="dark" className="mr-3">
            <FontAwesomeIcon icon={faEdit} />
            Edit
          </Button>
          <Button color="dark" className="mr-3">
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

const TableComponent = (props) => {
  return (
    <div className="mt-3">
      <Container>

        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.users}
          columns={columns}
          defaultSorted={defaultSorted}
          
          search
        >
          {(props) => (
            <div>
                <div className="float-right">
                <SearchBar {...props.searchProps} placeholder="Search..." />
                </div>
              <BootstrapTable {...props.baseProps}  pagination={ paginationFactory() }/>
            </div>
          )}
        </ToolkitProvider>
      </Container>
    </div>
  );
};

export default TableComponent;
