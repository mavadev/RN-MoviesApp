import {useCallback, useState} from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  text: string;
  lines?: number;
}

export default function HiddenText({text, lines = 5}: Props) {
  const [hiddenText, setHiddenText] = useState(false);
  const toggleDescription = useCallback(() => setHiddenText(prev => !prev), []);

  return (
    <Pressable onPress={toggleDescription}>
      <Text style={styles.text} numberOfLines={hiddenText ? undefined : lines}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 26,
  },
});
