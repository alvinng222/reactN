import React from 'react';
import { Button as ThemeButton } from '@ui-kitten/components';

export default function Button({ style, ...props }) {
  return (
    <ThemeButton activeOpacity={0.8} style={[{ borderRadius: 50 }, style]} {...props}>
      {props.children}
      {props.title}
    </ThemeButton>
  );
}

// /**
//  * @param props
//  */

// import React from 'react';
// import { StyleSheet, View, TouchableOpacity, TouchableHighlight } from 'react-native';
// import { Button as ThemeButton } from '@ui-kitten/components';
// import { Color } from '@constants';
// import { Text } from '@components';

// export default function Button({ appearance, ...props }) {
//   if (appearance === 'outline') {
//     return <OutlineButton {...props} />;
//   } else if (appearance === 'ghost') {
//     return <GhostButton {...props} />;
//   }
//   return <DefaultButton {...props} />;
// }

// const DefaultButton = ({
//   style,
//   title = null,
//   children = null,
//   textStyle,
//   onPress,
//   onTextPress,
//   appearance,
//   ...props
// }) => {
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       style={[styles.button, style, props.disabled && { backgroundColor: Color.disable }]}
//       activeOpacity={0.7}
//       {...props}>
//       {children && (
//         <Text
//           numberOfLines={1}
//           onPress={onTextPress}
//           style={[styles.title, textStyle, props.disabled && { color: Color.label }]}>
//           {children}
//         </Text>
//       )}
//       {title !== null && (
//         <Text
//           numberOfLines={1}
//           onPress={onTextPress}
//           style={[styles.title, textStyle, props.disabled && { color: Color.label }]}>
//           {title}
//         </Text>
//       )}
//     </TouchableOpacity>
//   );
// };

// const OutlineButton = ({
//   style,
//   title = null,
//   children = null,
//   textStyle,
//   onPress,
//   onTextPress,
//   appearance,
//   ...props
// }) => {
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       style={[
//         styles.button,
//         styles.outlineButton,
//         style,
//         props.disabled && { backgroundColor: Color.disable },
//       ]}
//       activeOpacity={0.7}
//       {...props}>
//       {children && (
//         <Text
//           numberOfLines={1}
//           onPress={onTextPress}
//           style={[
//             styles.title,
//             styles.outlineTitle,
//             textStyle,
//             props.disabled && { color: Color.label },
//           ]}>
//           {children}
//         </Text>
//       )}
//       {title !== null && (
//         <Text
//           numberOfLines={1}
//           onPress={onTextPress}
//           style={[
//             styles.title,
//             styles.outlineTitle,
//             textStyle,
//             props.disabled && { color: Color.label },
//           ]}>
//           {title}
//         </Text>
//       )}
//     </TouchableOpacity>
//   );
// };

// const GhostButton = ({
//   style,
//   title = null,
//   children = null,
//   textStyle,
//   onPress,
//   onTextPress,
//   appearance,
//   ...props
// }) => {
//   return (
//     <TouchableHighlight
//       onPress={onPress}
//       underlayColor={Color.primary + '11'}
//       style={[
//         styles.button,
//         styles.ghostButton,
//         style,
//         props.disabled && { backgroundColor: Color.disable },
//       ]}
//       activeOpacity={0.7}
//       {...props}>
//       <>
//         {children && (
//           <Text
//             numberOfLines={1}
//             onPress={onTextPress}
//             style={[
//               styles.title,
//               styles.ghostTitle,
//               textStyle,
//               props.disabled && { color: Color.label },
//             ]}>
//             {children}
//           </Text>
//         )}
//         {title !== null && (
//           <Text
//             numberOfLines={1}
//             onPress={onTextPress}
//             style={[
//               styles.title,
//               styles.ghostTitle,
//               textStyle,
//               props.disabled && { color: Color.label },
//             ]}>
//             {title}
//           </Text>
//         )}
//       </>
//     </TouchableHighlight>
//   );
// };
// const styles = StyleSheet.create({
//   title: {
//     fontSize: 14,
//     color: '#fff',
//   },
//   button: {
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: Color.primary,
//     borderRadius: 50,
//   },
//   outlineButton: {
//     backgroundColor: 'transparent',
//     borderWidth: 1,
//     borderColor: Color.primary,
//   },
//   outlineTitle: {
//     color: Color.primary,
//   },
//   ghostButton: {
//     backgroundColor: 'transparent',
//   },
//   ghostTitle: {
//     color: Color.primary,
//     fontWeight: 'bold',
//   },
// });
