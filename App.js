// import React, { useState } from 'react';
// import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
// import LoginPage from './LoginPage';
// import CreateTaskPage from './CreateTaskPage';

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const handleLogin = (username, password) => {
//     if (username == '123' && password == '123') {
//       setIsLoggedIn(true);
//     } else {
//       Alert.alert('Error', 'Incorrect username or password!');
//     }
//   };

//   return (
//     <ImageBackground source={require('./assets/background.jpeg')} style={styles.container}>
//       {isLoggedIn ? <CreateTaskPage /> : <LoginPage onLogin={handleLogin} />}
//     </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default App;
import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Alert } from 'react-native';
import LoginPage from './LoginPage';
import CreateTaskPage from './CreateTaskPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    if (username === '123' && password === '123') {
      setIsLoggedIn(true);
    } else {
      Alert.alert('Error', 'Incorrect username or password!');
    }
  };

  return (
    <ImageBackground source={require('./assets/background.jpeg')} style={styles.container}>
      {isLoggedIn ? <CreateTaskPage /> : <LoginPage onLogin={handleLogin} />}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
