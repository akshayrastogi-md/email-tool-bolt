import React, { useState } from 'react';
import { Typography, TextField, Button, Grid } from '@mui/material';

const Settings: React.FC = () => {
  const [smtpSettings, setSmtpSettings] = useState({
    host: '',
    port: '',
    username: '',
    password: '',
  });

  const handleSave = () => {
    // Implement save logic
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            SMTP Configuration
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="SMTP Host"
            value={smtpSettings.host}
            onChange={(e) => setSmtpSettings({ ...smtpSettings, host: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="SMTP Port"
            value={smtpSettings.port}
            onChange={(e) => setSmtpSettings({ ...smtpSettings, port: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="SMTP Username"
            value={smtpSettings.username}
            onChange={(e) => setSmtpSettings({ ...smtpSettings, username: e.target.value })}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="SMTP Password"
            type="password"
            value={smtpSettings.password}
            onChange={(e) => setSmtpSettings({ ...smtpSettings, password: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save Settings
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Settings;
