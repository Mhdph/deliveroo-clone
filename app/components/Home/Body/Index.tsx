import React from 'react';
import { ScrollView, Text } from 'react-native';
import Categories from './Categories';
import FeaturedRow from './FeaturedRow';

const Body = () => {
  return (
    <ScrollView
      className="bg-gray-100"
      contentContainerStyle={{
        paddingBottom: 100,
      }}
    >
      <Categories />
      <FeaturedRow title={''} description={''} featuredCategory={''} />
    </ScrollView>
  );
};

export default Body;
