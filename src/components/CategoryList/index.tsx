import React from 'react';
import data from './data';

import {
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  RedCircle,
  Info,
  List,
} from './styles';

interface ItemProps {
  item: typeof data[0];
}

const CategoryList: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({item}) => {
    return (
      <CategoryContainer>
        <CategoryImage source={item.source} />
        <CategoryName numberOfLines={1}>{item.name}</CategoryName>
        <CategoryStatus>
          <RedCircle />
          <Info>52.9k</Info>
        </CategoryStatus>
      </CategoryContainer>
    );
  };

  return (
    <List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))}
    </List>
  );
};

export default CategoryList;
