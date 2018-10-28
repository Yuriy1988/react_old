import React from 'react';

const isUserLoggedIn = false;

const Unavailable = () => <div>YOU CAN'T VIEW THIS PAGE</div>;

function withUserPermission(WrappedComponent) {
  if (isUserLoggedIn) {
    return WrappedComponent;
  }
  return Unavailable;
}

export default withUserPermission;
