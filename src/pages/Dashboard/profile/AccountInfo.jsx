import './ProfileDetails.scss';
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const AccountInfo = () => {

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

  return (
    <div className="profile-container">
      <div className="section dark-card">
        <div className="form-row">
          <TextField
            label="Username"
            onChange={(e) => handleInputChange('phone', e.target.value)}
            fullWidth
            variant="outlined"
            className="form-field"
          />
         <FormControl fullWidth variant="outlined" className="form-field">
          <InputLabel>Language</InputLabel>
          <Select
            onChange={(e) => handleInputChange('country', e.target.value)}
            label="Language"
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

        <FormControl fullWidth variant="outlined" className="form-field">
          <InputLabel>Time Zone </InputLabel>
          <Select
            onChange={(e) => handleInputChange('country', e.target.value)}
            label="Time Zone "
            IconComponent={KeyboardArrowDownIcon}
          >
            <MenuItem value="Malaysia">Malaysia</MenuItem>
            <MenuItem value="Singapore">Singapore</MenuItem>
            <MenuItem value="Thailand">Thailand</MenuItem>
            <MenuItem value="Indonesia">Indonesia</MenuItem>
            <MenuItem value="Philippines">Philippines</MenuItem>
          </Select>
        </FormControl>
        <button type='button' class="btn btn-primary" style={{marginLeft:'auto'}}>ARC CHALLENGE</button>
      </div>
    </div>
  );
};

export default AccountInfo;