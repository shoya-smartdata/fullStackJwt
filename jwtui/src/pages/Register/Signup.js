import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './signup.module.css'; 

const SignupModal = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName={styles.modalDialogRight}
      className={styles.neumorphicModal}
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <Form className={styles.mono_modelBox}>
          <Form.Group controlId="formBasicFirstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" required />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" required />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="Enter phone number" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Button variant="primary" type="submit" className={styles.mono_btn}>
            Sign Up
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SignupModal;
