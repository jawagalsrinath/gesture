import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useEmoji } from './EmojiContext';

const EmojiListPage = ({ navigation, route }) => {
  const { appliance } = route.params;
  const { selectedEmojis, handleSelectEmoji } = useEmoji();
  const emojis = ['😀', '😎', '🤖', '👍', '❤️'];

  const handleSetEmoji = (selectedEmoji) => {
    handleSelectEmoji(appliance, selectedEmoji);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Emoji for {appliance}</Text>
      {emojis.map((emoji, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleSetEmoji(emoji)}
          style={[
            styles.emojiButton,
            selectedEmojis[appliance] === emoji && styles.selectedEmojiButton,
          ]}
        >
          <Text style={[styles.emoji, selectedEmojis[appliance] === emoji && styles.selectedEmoji]}>
            {emoji}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emojiButton: {
    padding: 20,
    marginVertical: 5,
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
  },
  selectedEmojiButton: {
    backgroundColor: '#E16721',
  },
  emoji: {
    fontSize: 24,
  },
  selectedEmoji: {
    color: '#fff',
  },
});

export default EmojiListPage;
