import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';

/** Renders a single row in the List Stuff table. See pages/ListContactsAdmin.jsx. */
const ContactAdmin = ({ contact }) => (
  <Card className="h-100">
    <Card.Header>
      <Image width={75} src={contact.image} />
      <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
      <Card.Subtitle>{contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
      <Card.Footer className="blockquote-footer">{contact.owner}</Card.Footer>
    </Card.Body>
  </Card>
);

// Require a document to be passed to this component.
ContactAdmin.propTypes = {
  contact: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    owner: PropTypes.string,
  }).isRequired,
};

export default ContactAdmin;
