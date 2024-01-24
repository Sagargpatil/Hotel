// MyComponent.js

import React, { useState, useEffect } from 'react';
import { Card, Modal } from 'react-bootstrap';

const MyComponent = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Open the modal when the component mounts
    setShowModal(true);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const sdata = [
    {
      id: 1,
      name: "Hora Bhara Kabab",
      rate: "170",
    },
    {
      id: 2,
      name: "Chana kashmiri",
      rate: "120",
    },

    {
      id: 3,
      name: "Finger Chips",
      rate: "100",
    },
    {
      id: 4,
      name: "Sunheri Bhindi",
      rate: "120",
    },
    {
      id: 5,
      name: "Dahi",
      rate: "40",
    },
  ];

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            This is a sample card. The modal will open automatically.
          </Card.Text>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <table class="table" style={{backgroundColor:"grey"}}>
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    {/* <th scope="col">Handle</th> */}
                  </tr>
                </thead>

                <tbody>
                  {sdata.map((val, index) => {
                    console.log(val.id);
                    return (
                      <tr >
                        <th scope="row">{val.id}</th>
                        <td>{val.name}</td>
                        <td>{val.rate}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </button>
          <button className="btn btn-primary" onClick={handleCloseModal}>
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MyComponent;
