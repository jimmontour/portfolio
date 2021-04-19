import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function Header({ siteTitle }) {
  const HeaderStyle = styled.div`
    a {
      font-weight: 600;
    }
    .navbar-transparent {
      background-color: rgba(255, 255, 255, 0);
      transition: background-color 0.2s;
    }
    .navbar-white {
      background-color: rgba(234, 236, 239, 0.81);
      transition: background-color 0.2s;
    }
    .brand {
      color: #363636 !important;
    }
    .nav-link {
      transition: color, 0.2s;
    }
    .toggler {
      border: none;
      padding: 4px;
      border-radius: 4px;
      &:focus {
        outline: none;
        background-color: rgba(0, 0, 0, 0.05);
      }
    }
    .socialicons {
      color: white;
      padding-left: 5px;
      padding-right: 5px;
      transition: all 0.8s;
      margin: 4px;
      &:hover {
        color: black;
        padding-left: 5px;
        padding-right: 5px;
        transition: all 0.8s;
        margin: 4px;
      }
    }
  `;

  return (
    <HeaderStyle>
      <div className="fixed-top navbar-white">
        <div className="brand" href="/#home">
          JIM MONTOUR
        </div>
      </div>
    </HeaderStyle>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};
