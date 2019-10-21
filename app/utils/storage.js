import AsyncStorage from '@react-native-community/async-storage';

const getItem = async (key) => AsyncStorage.getItem(key);
const setItem = async (key, item) => {
  await AsyncStorage.setItem(key, item);
};

export default { getItem, setItem };
