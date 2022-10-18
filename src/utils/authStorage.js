import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage{
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async setToken(token) {
    await AsyncStorage.setItem(`${this.namespace}:token`, token);
  }

  async getToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}:token`);
    return token;
  }

  async removeToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;