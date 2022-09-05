import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingTop: 10,
        paddingHorizontal: 15,
      }}
      horizontal
      showsVerticalScrollIndicator={false}
    >
      <CategoryCard imgUrl={''} title={''} />
    </ScrollView>
  );
};

export default Categories;
