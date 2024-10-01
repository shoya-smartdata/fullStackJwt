import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import styles from './LoginForm.module.css';

const LoginModal = ({ show, handleClose, handleShowSignup }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      dialogClassName={styles.modalDialogRight}
      className={styles.neumorphicModal}
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <Form className={styles.mono_modelBox}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" required />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          
          <Button variant="primary" type="submit" className={styles.mono_btn}>
            Login
          </Button>

          {/* Sign Up Link */}
          <p className={styles.signupLink} onClick={handleShowSignup}>
            Don't have an account? Sign Up
          </p>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
