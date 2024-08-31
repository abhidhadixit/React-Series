import React from 'react';
import { UserContext, ChannelContext } from '../App';

function ComponentE() {
  return (
    <div>
      <UserContext.Consumer>
        {user => {
          return (
            <ChannelContext.Consumer>
              {channel => {
                return (
                  <div>
                    UserContext value: {user} <br />
                    ChannelContext value: {channel}
                  </div>
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentE;
