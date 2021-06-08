import { yupResolver } from '@hookform/resolvers/yup';
import { LinearProgress } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import InputFeild from '../../components/form-control/InputFeild';
import PasswordField from '../../components/form-control/PasswordField';



RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};
 

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
 
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#d33b33",
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function RegisterForm(props) {
  const classes = useStyles();

  const schema = yup.object().shape({
    fullName: yup.string()
      .required('Please enter your fullname')
      .min(2, 'Name must be larger than 2 characters  '),
    email: yup.string()
      .required('Please enter your email')
      .email('Please input valid email'),
    password: yup.string()
      .required('Please enter your password')
      .min(6, 'At least 6 characters'),
    retypePassword: yup.string()
      .required('Please retype your password')
      .oneOf([yup.ref('password')], 'Password does not match'),
  });
  const registerForm = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = async (values) => {
     console.log(' FORM: ', values);
    const { onSubmit } = props;
    if (onSubmit) {
      await onSubmit(values);
    }
  };
  const {isSubmitting} = registerForm.formState;

  return (
    <div>
      {isSubmitting && <LinearProgress />}
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon  />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
        </Typography>
          <form className={classes.form} noValidate onSubmit={registerForm.handleSubmit(handleSubmit)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <InputFeild
                  autoComplete="fname"
                  name="fullName"
                  id="fullName"
                  label="Full Name"
                  form={registerForm}
                  autoFocus

                />
              </Grid>

              <Grid item xs={12}>
                <InputFeild
                  id="email"
                  label="Email"
                  name="email"
                  form={registerForm}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <PasswordField
                  name="password"
                  label="Password"
                  id="password"
                  form={registerForm}
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <PasswordField

                  name="retypePassword"
                  label="Retype Password"
                  form={registerForm}
                  id="retypePassword"
                  autoComplete="current-retypePassword"
                />
              </Grid>
            </Grid>
            <button type="submit" className="btn hvr-hover"
            style={{marginLeft: 162, width: 80, marginBottom: 40, marginTop: 40, height: 40, border: 'none'}}
            >Register</button>
             
          </form>
        </div>
         
      </Container>
    </div>
  );
}

export default RegisterForm;