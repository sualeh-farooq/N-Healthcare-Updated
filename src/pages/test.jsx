import React, { useState } from 'react';
import { Table, Input } from 'reactstrap';

const CustomTable = ({ columns, data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(10);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.filter((row) => {
    return Object.values(row).some(
      (value) =>
        value.toString().toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
    );
  }).slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
    <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-3"
      />
      <Table striped>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <tr key={index}>
              {columns.map((column, columnIndex) => (
                <td key={columnIndex}>{row[column.dataField]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <nav>
        <ul className="pagination">
          {[...Array(Math.ceil(data.length / rowsPerPage)).keys()].map(
            (number) => (
              <li key={number} className="page-item">
                <button
                  onClick={() => paginate(number + 1)}
                  className="page-link"
                >
                  {number + 1}
                </button>
              </li>
            )
          )}
        </ul>
      </nav>
    </div>
  );
};





const columns2 = [
  {
    dataField: "created_at",
    text: "Date",
    sort: true,
  },
  {
    dataField: "customer_firstname",
    text: "First Name",
    sort: true,
  },
  {
    dataField: "customer_lastname",
    text: "Last Name",
    sort: true,
  },
  {
    dataField: "order_status",
    text: "Order Status",
    sort: true,
  },
  {
    dataField: "order_city",
    text: "City",
    sort: true,
  },
  {
    dataField: "payment_status",
    text: "Payment Status",
    sort: true,
  },
  {
    dataField: "order_total",
    text: "Amount",
    sort: true,
  },
];

const data = [
  { id: 1, created_at: "2024-05-12", customer_firstname: "John", customer_lastname: "Doe", order_status: "Completed", order_city: "New York", payment_status: "Paid", order_total: "$100" },
  { id: 2, created_at: "2024-05-11", customer_firstname: "Jane", customer_lastname: "Smith", order_status: "Pending", order_city: "Los Angeles", payment_status: "Unpaid", order_total: "$50" },
  { id: 1, created_at: "2024-05-12", customer_firstname: "John", customer_lastname: "Doe", order_status: "Completed", order_city: "New York", payment_status: "Paid", order_total: "$100" },
  { id: 2, created_at: "2024-05-11", customer_firstname: "Jane", customer_lastname: "Smith", order_status: "Pending", order_city: "Los Angeles", payment_status: "Unpaid", order_total: "$50" },
  { id: 1, created_at: "2024-05-12", customer_firstname: "John", customer_lastname: "Doe", order_status: "Completed", order_city: "New York", payment_status: "Paid", order_total: "$100" },
  { id: 2, created_at: "2024-05-11", customer_firstname: "Jane", customer_lastname: "Smith", order_status: "Pending", order_city: "Los Angeles", payment_status: "Unpaid", order_total: "$50" },
  { id: 1, created_at: "2024-05-12", customer_firstname: "John", customer_lastname: "Doe", order_status: "Completed", order_city: "New York", payment_status: "Paid", order_total: "$100" },
  { id: 2, created_at: "2024-05-11", customer_firstname: "Jane", customer_lastname: "Smith", order_status: "Pending", order_city: "Los Angeles", payment_status: "Unpaid", order_total: "$50" },
  { id: 1, created_at: "2024-05-12", customer_firstname: "John", customer_lastname: "Doe", order_status: "Completed", order_city: "New York", payment_status: "Paid", order_total: "$100" },
  { id: 2, created_at: "2024-05-11", customer_firstname: "Jane", customer_lastname: "Smith", order_status: "Pending", order_city: "Los Angeles", payment_status: "Unpaid", order_total: "$50" },
  { id: 1, created_at: "2024-05-12", customer_firstname: "John", customer_lastname: "Doe", order_status: "Completed", order_city: "New York", payment_status: "Paid", order_total: "$100" },
  { id: 2, created_at: "2024-05-11", customer_firstname: "Jane", customer_lastname: "Smith", order_status: "Pending", order_city: "Los Angeles", payment_status: "Unpaid", order_total: "$50" },
  { id: 1, created_at: "2024-05-12", customer_firstname: "John", customer_lastname: "Doe", order_status: "Completed", order_city: "New York", payment_status: "Paid", order_total: "$100" },
  { id: 2, created_at: "2024-05-11", customer_firstname: "Jane", customer_lastname: "Smith", order_status: "Pending", order_city: "Los Angeles", payment_status: "Unpaid", order_total: "$50" },

  // Add more data here...
];

const App = () => {
  return <CustomTable columns={columns2} data={data} />;
};

export default App;
