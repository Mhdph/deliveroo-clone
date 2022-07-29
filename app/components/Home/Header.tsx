import { View, Text, Image } from 'react-native';
import React from 'react';
import { ChevronDownIcon, UserIcon } from 'react-native-heroicons/outline';

const Header = () => {
  return (
    <View className="flex-row mt-2 pb-3 items-center mx-4 space-x-2">
      <Image
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        source={{ uri: 'https://link.papareact.com/wru' }}
      />
      <View className="flex-1">
        <Text className="font-bold text-xs">Deliver Now!</Text>
        <Text className="font-bold text-xl">
          Current Loction
          <ChevronDownIcon size={20} color="#00ccbb" />
        </Text>
      </View>
      <UserIcon size={35} color="#00ccbb" />
    </View>
  );
};

export default Header;
