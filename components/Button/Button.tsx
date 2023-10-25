import React from 'react';
import {useThemeProvider} from '../../ThemeProvider';
import {Text, TouchableOpacity, View} from 'react-native';

export interface Props {
  variant?: 'primary' | 'secondary';
  label: string;
  onClick?: () => void;
}

// export const MyButton = ({text, onPress, color, textColor}: ButtonProps) => (
//   <View style={styles.buttonContainer}>
//     <TouchableOpacity
//       style={[styles.button, !!color && {backgroundColor: color}]}
//       onPress={onPress}
//       activeOpacity={0.8}>
//       <Text style={[styles.buttonText, !!textColor && {color: textColor}]}>
//         {text}
//       </Text>
//     </TouchableOpacity>
//   </View>
// );

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
// const StyledText = styled(Text);
// const StyledTouchableOpacity = styled(TouchableOpacity);
const Button = ({variant = 'primary', label, onClick}: Props) => {
  const {theme} = useThemeProvider();
  const color = themeTest[theme][variant];

  return (
    <TouchableOpacity
      className={`bg-${color}-500 text-white px-4 py-2 rounded-lg`}
      onPress={onClick}>
      <View>
        <Text className="text-red">{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
