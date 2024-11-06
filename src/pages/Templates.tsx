import React, { useState } from 'react';
import { Typography, Button, Grid, Card, CardContent, CardActions } from '@mui/material';

const Templates: React.FC = () => {
  const [templates, setTemplates] = useState([]);

  const handleCreateTemplate = () => {
    // Implement template creation logic
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Email Templates
      </Typography>
      <Button variant="contained" color="primary" onClick={handleCreateTemplate}>
        Create New Template
      </Button>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        {templates.map((template, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{template.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {template.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Edit</Button>
                <Button size="small">Delete</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Templates;
