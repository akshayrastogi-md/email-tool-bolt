import React, { useState } from 'react';
import { Typography, Button, List, ListItem, ListItemText, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';

const Contacts: React.FC = () => {
  const [contacts, setContacts] = useState([]);
  const [open, setOpen] = useState(false);
  const [newContact, setNewContact] = useState({ name: '', email: '' });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    setContacts([...contacts, newContact]);
    setNewContact({ name: '', email: '' });
    handleClose();
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Contacts
      </Typography>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add New Contact
      </Button>
      <List>
        {contacts.map((contact, index) => (
          <ListItem key={index}>
            <ListItemText primary={contact.name} secondary={contact.email} />
          </ListItem>
        ))}
      </List>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Contact</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            fullWidth
            value={newContact.name}
            onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            fullWidth
            value={newContact.email}
            onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleCreate}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Contacts;
