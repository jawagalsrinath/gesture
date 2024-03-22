import React, { createContext, useState, useContext } from 'react';

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [selectedEmojis, setSelectedEmojis] = useState({});

  const handleSelectEmoji = (appliance, emoji) => {
    setSelectedEmojis(prevState => ({
      ...prevState,
      [appliance]: emoji
    }));
  };

  return (
    <EmojiContext.Provider value={{ selectedEmojis, handleSelectEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};

export const useEmoji = () => useContext(EmojiContext);
