import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

import * as s from './styles';

export default function Server(props) {
  const { server, push } = props;

  return (
    <s.ServerBox onClick={() => push(`/tables/${server.name.replace(/\s/, '_')}/${server._id}`)}>
      <div>Name: {server.name}</div>
      <div>
        Parties ({server.parties.length}
        ):
      </div>
      {server.parties.map((party, i) => (
        <div key={shortid.generate()}>
          {i + 1}: table(s):{' '}
          {party.tables.map((table) => (
            <span key={shortid.generate()}>{table.number}, </span>
          ))}
        </div>
      ))}
    </s.ServerBox>
  );
}

Server.propTypes = {
  server: PropTypes.shape({
    name: PropTypes.string,
    parties: PropTypes.arrayOf(
      PropTypes.shape({
        food: PropTypes.array,
        tables: PropTypes.arrayOf(PropTypes.object)
      })
    )
  }),
  push: PropTypes.func,
};

Server.defaultProps = {
  server: {
    name: 'RandyCarlFace',
    parties: [
      {
        food: [],
        tables: [
          {
            number: 1
          },
          {
            number: 3
          }
        ]
      },
      {
        food: [],
        tables: [
          {
            number: 2
          }
        ]
      }
    ]
  },
  push: () => {},
};