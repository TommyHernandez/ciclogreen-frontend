import React from 'react';
import { Button, TextField } from '@material-ui/core';

export const LoginForm = ({ loginFunction, error }) => {
  return (
    <div className="login-component">
      <form
        onSubmit={(e) => {
          loginFunction(e);
        }}
      >
        <TextField
          id="mail"
          label="Email"
          placeholder="mail@mymail.com"
          required={true}
        />
        <TextField
          id="pswd"
          label="Password"
          type="password"
          autoComplete="current-password"
          required={true}
        />

        <Button variant="contained" color="primary" type="submit">
          Login
        </Button>
        <span className="error">{error.length ? error : ''}</span>
      </form>
    </div>
  );
};
