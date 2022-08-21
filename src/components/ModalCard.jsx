import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, Button, Modal } from "react-bootstrap";

const ModalCard = (props) => {
  const { title, picture, children } = props;

  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Card onClick={toggleModal}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title className="mb-0">
            <h4>{title}</h4>
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={toggleModal} centered>
        <Modal.Header>
          <Modal.Title>
            <h3>{title}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={picture} alt="" />
        </Modal.Body>
        <Modal.Footer>
          {children}
          <Button variant="primary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

ModalCard.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  picture: PropTypes.string.isRequired
};

export default ModalCard;
