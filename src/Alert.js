import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function AlertDismissible({ showAlert }) {
    return (
      <>
        <Alert show={showAlert} variant="success">
          <Alert.Heading>Congrats..!</Alert.Heading>
          <p>
            You have successfully created your account on Workstream
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me
            </Button>
          </div>
        </Alert>
      </>
    );
  }
  
export default AlertDismissible;