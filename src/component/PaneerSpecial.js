import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { paneerspecial } from './Data';

const PaneerSpecial=() =>{
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      // Open the modal when the component mounts
      setShowModal(true);
    }, []);
  
    const handleCloseModal = () => {
      setShowModal(false);
      navigate("/");
    };
  return (
    <div>
        <Modal
          show={showModal}
          onHide={handleCloseModal}
          className="modal modal-dialog-scrollable"
        >
          <Modal.Header closeButton>
            <Modal.Title>Paneer Special Menu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table className="table table-dark table-hover">
              <thead className="thead-gold">
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Menu</th>
                  <th scope="col">Rate</th>
                  {/* <th scope="col">Handle</th> */}
                </tr>
              </thead>

              <tbody>
                {paneerspecial.map((val, index) => {
                  console.log(val.id);
                  return (
                    <tr>
                      <th scope="row">{val.id}</th>
                      <td>{val.name}</td>
                      <td>{val.rate}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Modal.Body>
          <Modal.Footer
            style={{
              backgroundColor: "#4d5253",
              color: "goldenrod",
              textAlign: "center",
              justifyContent: "center",
              textTransform: "uppercase",
            }}
          >
            Thank you 🙂
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default PaneerSpecial
