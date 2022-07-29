import { View, Text } from 'react-native';
import { SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';

const Search = () => {
  return (
    <View className="flex-row items-center space-x-2 pb-2 mx-4">
      <View className="flex-row items-center space-x-2 flex-1 bg-gray-200 p-3  ">
        <SearchIcon color="gray" size={20} />
        <TextInput
          className=""
          keyboardType="default"
          placeholder="Resturant and cuiesens"
        />
      </View>
      <AdjustmentsIcon color="#00ccbb" />
    </View>
  );
};

export default Search;
