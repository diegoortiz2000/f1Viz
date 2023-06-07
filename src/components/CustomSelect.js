import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const CustomSelect = ({ label, labelId, value, options, onChange }) => (
    <FormControl fullWidth sx={{ height: '100%' }}>
        <InputLabel id={labelId}>{label}</InputLabel>
        <Select
            value={value}
            label={label}
            labelId={labelId}
            sx={{
                borderRadius: '40px',
                color: 'primary.main',
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'primary.main',
                },
                '& .MuiSvgIcon-root': {
                    color: 'primary.main',
                },
            }}
            onChange={onChange}
        >
            {options.map((option, index) => (
                <MenuItem key={index} value={option}>
                    {option}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);

export default CustomSelect;
