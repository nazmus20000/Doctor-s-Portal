import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import dayjs from 'dayjs';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const BookingModal = ( {openBooking, handleBookingClose, booking, date } ) => { 
    const {name, time} = booking;
    const {user} = useAuth();  
    const initialInfo = {patientName : user.displayName, email: user.email, phone: ''}  
    const [bookingInfo, setBookingInfo] = useState({initialInfo}); 

    const handleOnBlur = e => {
      const field = e.target.name;
      const value = e.target.value;
      const newInfo = {...bookingInfo};
      newInfo[field] = value;
      setBookingInfo(newInfo); 

    }

    const handleBookingSubmit = (event) => {
      const dateWithFormat = dayjs(date).format('DD/MM/YYYY');
      // collcet data 
      const appointment = {
        ...bookingInfo,
        time,
        serviceName : name,
        date : dateWithFormat
      }
      // send to the server 
      console.log(appointment);


      handleBookingClose();
      event.preventDefault();
    }
    
    return (
        <>
        <Modal
        open={openBooking}
        onClose={handleBookingClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{textAlign: "center"}} id="modal-modal-title" variant="h6" component="h2">
            {name}
          </Typography>

          
            <form onSubmit={handleBookingSubmit}> 
            <TextField
            sx={{ width: '90%', mt: 1}}
            disabled
            label=""
            id="outlined-size-small"
            defaultValue={time} 
            size="small"
          />  
            <TextField
            sx={{ width: '90%', mt: 1}}
            label=""
            id="outlined-size-small"
            name='patientName'
            onBlur={handleOnBlur}
            defaultValue={user.displayName}  
            size="small"
          />  
           
            <TextField
            sx={{ width: '90%', mt: 1}}
            label=""
            id="outlined-size-small"
            name='email' 
            onBlur={handleOnBlur}
            defaultValue={user.email}  
            size="small"
          />  
           <TextField
            sx={{ width: '90%', mt: 1}} 
            label=""
            id="outlined-size-small"
            name='phone'
            onBlur={handleOnBlur} 
            defaultValue="Phone Number" 
            size="small"
          />  
            <TextField
            sx={{ width: '90%', mt: 1}}
            disabled
            label=""
            id="outlined-size-small"
            defaultValue={dayjs(date).format('DD/MM/YYYY')} 
            size="small"
          />  

<Button type='submit' sx={{ textTransform: "uppercase", mt: 2, backgroundColor: '#18D3B6', p: "8px 45px", ml: 0  }} variant="contained">send</Button>

          </form>
          
          
          
          </Box>
      </Modal>  
      </>
    );
};

export default BookingModal;