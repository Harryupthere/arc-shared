import React, { useState } from 'react';
import './ProfileDetails.scss';
import {
  Avatar,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Alert,
  IconButton,
} from '@mui/material';
import { Edit, Add } from '@mui/icons-material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const ProfileDetails = () => {
  const [formData, setFormData] = useState({
    firstName: 'Kunika',
    lastName: 'Kero',
    title: 'Ms.',
    phone: '+919753204929',
    email: 'kunikakero2001@gmail.com',
    country: 'Malaysia',
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header dark-card">
        <div className="profile-header-content">
          <div className="profile-info">
            <Avatar className="profile-avatar">
              KK
            </Avatar>
            <div className="profile-details">
              <div className="profile-name">
                <Typography variant="h5" className="name-text">
                  Kunika Kero
                </Typography>
                <IconButton size="small" className="edit-icon">
                  <Edit fontSize="small" />
                </IconButton>
              </div>
              <Typography variant="body2" className="email-text">
                kunikakero2001@gmail.com
              </Typography>
              <Typography variant="body2" className="points-text">
                0 ARC Points
              </Typography>
            </div>
          </div>
          <Button variant="outlined" className="edit-nickname-btn">
            Edit nickname
          </Button>
        </div>
      </div>

      {/* Profile Picture Settings */}
      <div className="section dark-card">
        <Typography variant="h6" className="section-title">
          Profile picture settings
        </Typography>

        <Alert severity="info" className="upload-warning">
          Please do not upload pictures (such as ID) or any documents containing sensitive or corrupted data. Your profile picture may be visible to third persons when using selected services.
        </Alert>

        <Box className="upload-area">
          <Add className="upload-icon" />
          <Typography variant="body1" className="upload-text">
            Drag and drop file here or click
          </Typography>
        </Box>
      </div>

      {/* Client Information */}
      <div className='main-heading'><h2>Client</h2></div>
      <div className="section dark-card">
        <div className="form-row">
          <TextField
            label="First Name"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            fullWidth
            variant="outlined"
            className="form-field"
          />
          <TextField
            label="Last Name"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            fullWidth
            variant="outlined"
            className="form-field"
          />
        </div>

        <FormControl fullWidth variant="outlined" className="form-field">
          <InputLabel>Title</InputLabel>
          <Select
            value={formData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            label="Title"
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value="Mr.">Mr.</MenuItem>
            <MenuItem value="Ms.">Ms.</MenuItem>
            <MenuItem value="Mrs.">Mrs.</MenuItem>
            <MenuItem value="Dr.">Dr.</MenuItem>
          </Select>
        </FormControl>
      </div>

      {/* Contact Info */}
      <div className='main-heading'><h2>Contact Info</h2></div>

      <div className="section dark-card">
        <div className="form-row">
          <TextField
            label="Contact Phone"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            fullWidth
            variant="outlined"
            className="form-field"
          />
          <TextField
            label="E-mail address"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            fullWidth
            variant="outlined"
            className="form-field"
          />
        </div>

        <FormControl fullWidth variant="outlined" className="form-field">
          <InputLabel>Country of residence</InputLabel>
          <Select
            value={formData.country}
            onChange={(e) => handleInputChange('country', e.target.value)}
            label="Country of residence"
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value="Malaysia">Malaysia</MenuItem>
            <MenuItem value="Singapore">Singapore</MenuItem>
            <MenuItem value="Thailand">Thailand</MenuItem>
            <MenuItem value="Indonesia">Indonesia</MenuItem>
            <MenuItem value="Philippines">Philippines</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default ProfileDetails;