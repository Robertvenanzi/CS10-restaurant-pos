import React from 'react';
import PropTypes from 'prop-types';

import Clock from '../Clock';
import Date from '../Date';
import CurrentUser from '../CurrentUser';

import * as s from './styles';

export default function Topbar(props) {
  const { name, logoutEmployee, role, loggedIn, landing } = props;

  if (landing) {
    return (
      <s.Topbar alignEnd>
        <s.StyledLink to="/login">(Login)</s.StyledLink>
        <s.StyledLink to="/register">(Register)</s.StyledLink>
      </s.Topbar>
    );
  }

  return (
    <s.Topbar blur={props.blur}>
      <div>
        <Clock />
        <Date />
      </div>
      <h1>Main Course</h1>
      {loggedIn ? <CurrentUser name={name} role={role} action={logoutEmployee} /> : <div />}
    </s.Topbar>
  );
}

Topbar.propTypes = {
  blur: PropTypes.bool,
  name: PropTypes.string,
  role: PropTypes.string,
  loggedIn: PropTypes.bool,
  landing: PropTypes.bool,
  logoutEmployee: PropTypes.func,
};

Topbar.defaultProps = {
  blur: false,
  name: 'Please login',
  role: 'none',
  loggedIn: false,
  landing: false,
  logoutEmployee: () => {},
};