import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Declaration = () => {
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
          <Modal.Title>Declaration And Notes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            <li><h1>Declaration as per F.A.D.A Rules</h1>
            <ol>
              <li>We do not sale Milk</li>
              <li>We use mixmilk and added water as per required in our milk product</li>
              <li>We use Edible Oil (best available) Venaspati ghee for production</li>
              <li>We use ready made Dairy production like ice cream, Paneer, Extra.</li>
              <li>We use renowned mill products for our Tandoor</li>
              <li>We purchase all required row moterial for food preparation from renewed Merchant</li>
              <li>We do not manufacture any Row Materials.</li>
            </ol></li>
            <li><h1>Notes</h1>
            <ol>
            <li>All Items will be served subject to Seasonal availability</li>
            <li>Outside Eatables are not Allowed</li>
            <li>Order once Placed will not be Cancelled</li>
            <li>Kindly bear with, us for 20 Minutes, since we cook fresh food</li>
            <li>Hotel premises is strictly Non-Alcoholic and No 🚭 Smoking Zone.</li>
            </ol></li>
          </ul>
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
  );
};

export default Declaration;
