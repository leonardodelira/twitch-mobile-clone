import React from 'react';
import {FlatList, View} from 'react-native';

import CategoryList from '../../components/CategoryList';
import ChannelList from '../../components/ChannelList';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import StreamList from '../../components/StreamList';
import Title from '../../components/Title';

import {Wrapper, Container, Main} from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Following: React.FC = () => {
  const {data, indices} = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading />,
      },

      {
        key: 'FOLLOWED_CATEGORIES',
        render: () => <Title>Followed Categories</Title>,
        isTitle: true,
      },
      {key: 'C1', render: () => <CategoryList />},

      {
        key: 'LIVE_CHANNELS',
        render: () => <Title>Live Channels</Title>,
        isTitle: true,
      },
      {key: 'C2', render: () => <StreamList />},

      {
        key: 'CONTINUE_WATCHING',
        render: () => <Title>Continue Watching</Title>,
        isTitle: true,
      },
      {key: 'C3', render: () => <StreamList />},

      {
        key: 'OFFILINE_CHANNELS',
        render: () => <Title>Offiline Channels</Title>,
        isTitle: true,
      },
      {key: 'C4', render: () => <ChannelList />},
    ];

    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />
        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({item}) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indices}
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Following;
