import { View, Text, SafeAreaView, Image } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../components/Home/Header';
import Search from '../components/Home/Search';
import Body from '../components/Home/Body/Index';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Header />
      <Search />
      <Body />
    </SafeAreaView>
  );
};

export default HomeScreen;
