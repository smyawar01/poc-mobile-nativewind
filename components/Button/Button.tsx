import React from 'react';
import {useThemeProvider} from '../../ThemeProvider';
import {Text, TouchableOpacity, View} from 'react-native';

export interface Props {
  variant?: 'primary' | 'secondary';
  label: string;
  onClick?: () => void;
}
const themeTest = {
  village: {
    primary: 'green',
    secondary: 'purple',
  },
  summit: {
    primary: 'red',
    secondary: 'blue',
  },
};
const Button = ({variant = 'primary', label, onClick}: Props) => {
  const {theme} = useThemeProvider();
  const color = themeTest[theme][variant];

  return (
    <TouchableOpacity
      className={`bg-${color}-500 text-white px-4 py-2 rounded-lg`}
      onPress={onClick}>
      <View className="bg-black">
        <Text className="text-red-500">{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
