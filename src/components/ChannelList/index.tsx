import React from 'react';

import {
  List,
  ChannelContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RigthSide,
  WhiteCircle,
} from './styles';

const ChannelList: React.FC = () => {
  const ChannelItem = () => (
    <ChannelContainer>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>rocktseat_oficial</Username>
          <Info>36 novos vídeos</Info>
        </Column>
      </LeftSide>

      <RigthSide>
        <WhiteCircle />
      </RigthSide>
    </ChannelContainer>
  );

  return (
    <List>
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
      <ChannelItem />
    </List>
  );
};

export default ChannelList;
