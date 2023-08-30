import Card from 'react-bootstrap/Card';

function WithHeaderAndQuoteExample() {
  return (
    <Card>
      <Card.Header>Quote</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Complete your profile{' '}
          </p>
          <footer className="blockquote-footer">
          Please add your Kin's information in your profile. <cite title="Source Title"></cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderAndQuoteExample;