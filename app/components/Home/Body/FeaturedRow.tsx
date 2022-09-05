import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import { ArrowRightIcon } from 'react-native-heroicons/outline';
import ResturantCard from './ResturantCard';

interface FeaturedRow {
  title: string;
  description: string;
  id?: number;
  featuredCategory?: string;
}

const FeaturedRow = ({ title, description, featuredCategory }: FeaturedRow) => {
  return (
    <View>
      <View className="mt-4 flex-row justify-between px-4 items-center">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-400 px-4">{description}</Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="pt-4"
      ></ScrollView>
      <ResturantCard
        id={0}
        imgUrl={''}
        title={''}
        rating={0}
        genre={''}
        address={''}
        short_description={''}
        dishes={[]}
        long={0}
        lat={0}
      />
    </View>
  );
};

export default FeaturedRow;
