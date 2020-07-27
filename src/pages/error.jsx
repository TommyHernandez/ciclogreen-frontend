import React from 'react';
import { Result, Button } from 'antd';
import { withRouter } from 'react-router';

const Error = ({ history }) => {
  const volver = () => {
    history.push('/');
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Parece que ha hecho algo mal :)"
      extra={
        <Button onClick={() => volver()} type="primary">
          Volver
        </Button>
      }
    />
  );
};
export default withRouter(Error);
