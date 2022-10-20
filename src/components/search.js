import React, { useState } from 'react';
import { Text, StyleSheet, View } from "react-native";
import { colors } from '../utils/colors';

export const search = ({ subject }) => {
  return <View style={container.styles}>subject = "search",</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    color: colors.green,
  },
});
