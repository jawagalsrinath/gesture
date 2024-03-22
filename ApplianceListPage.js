import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useEmoji } from './EmojiContext'; // Import useEmoji hook

const ApplianceListPage = ({ navigation }) => {
  const { selectedEmojis } = useEmoji(); // Access selectedEmojis from context
  const appliances = ['Fridge', 'AC', 'Fan', 'TV', 'Light', 'Washing Machine'];

  const handleApplianceSelection = (appliance) => {
    navigation.navigate('EmojiList', { appliance });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Appliance</Text>
      {appliances.map((appliance, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleApplianceSelection(appliance)}
          style={styles.applianceButton}
        >
          <Text style={{ textAlign: 'center' }}>{appliance}</Text>
          {/* Check if an emoji is selected for the current appliance */}
          {selectedEmojis[appliance] && (
            <Text style={{ textAlign: 'center', marginTop: 5 }}>Selected Emoji: {selectedEmojis[appliance]}</Text>
          )}
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
  applianceButton: {
    width: '90%',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#E0E0E0',
    borderRadius: 5,
  },
});

export default ApplianceListPage;
