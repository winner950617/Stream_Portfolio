import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import emailjs from '@emailjs/browser'
import { motion } from 'motion/react';

const Contact = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wbk8n58', 'template_cd72onu', e.target, 'D6YlJfjXbdiipAnl2')
    alert('Your Message Sended successfully!')
  }

  const variants={
    hidden:{opacity:0,y:50},
    visible:{opacity:1,y:0},
}

  return (
    <motion.section 
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:0.5}} 
    className="text-white mb-0 flex flex-col md:w-full items-center justify-center p-40 md:pt-30 pt-20" id="contact">
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Box
      sx={{ 
  minHeight: '40vh', 
  minWidth:'400px',
  background: 'linear-gradient(to top, #000000, #4B0082, #000000, #000000)', 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  padding: '3rem',
  backgroundSize: '100% 100%, 100% 100%', 
  backgroundPosition: 'center center, left center', 
  backgroundRepeat: 'no-repeat',
}}>

          <div className="w-full max-w-md mx-4" >
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h6" sx={{ color: 'white', mb: 1 }}>
                Get in touch
              </Typography>
              <Typography variant="h2" sx={{ color: 'white', fontWeight: 'bold' }}>
                Contact Me
              </Typography>
            </Box>

            <form onSubmit={onSubmit} className="space-y-4" >
              <div>
                <TextField
                  size='small'
                  label="Enter Name"
                  name="name"
                  required
                  fullWidth
                  variant="outlined"
                  sx={{
                    marginBottom: '16px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    '& .MuiInputBase-root': {
                      borderRadius: '8px',
                    },
                  }}
                />
              </div>

              <div>
                <TextField
                  label="Enter Email"
                  name="email"
                  size='small'
                  required
                  fullWidth


                  variant="outlined"
                  sx={{
                    marginBottom: '16px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    
                    '& .MuiInputBase-root': {
                      borderRadius: '8px',
                    },
                  }}
                />
              </div>

              <div>
                <TextField
                  label="Enter Message"
                  name="message"
                  required
                  multiline
                
                  rows={5}
                  fullWidth
                  variant="outlined"
                  sx={{
                    marginBottom: '16px',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    '& .MuiInputBase-root': {
                      borderRadius: '8px',
                    },
                    width: '100%',
                  }}
                />
              </div>

              <div className="flex justify-center pt-0">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    padding: '10px 20px',
                    borderRadius: '8px',
                    background: 'linear-gradient(45deg, #6a1b9a, #8e24aa)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #8e24aa, #6a1b9a)',
                    },
                  }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Box>
      </Container>
    </React.Fragment>
    </motion.section>
  );
};

export default Contact;