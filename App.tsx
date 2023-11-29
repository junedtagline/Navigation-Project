import * as React from 'react';
import {View, Text, Button, Alert, Image, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HeaderBackButton, HeaderTitle} from 'react-navigation-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {ScrollView} from 'react-native-gesture-handler';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Button
        title="2nd Screen"
        onPress={() => {
          navigation.navigate('secndScreen', {
            itemId: 1,
            otherParam: 'First Page',
          });
        }}></Button>
    </View>
  );
}
function SecondScreen({route, navigation}) {
  const {itemId} = route.params;
  const {otherParam} = route.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text>itemId:{JSON.stringify(itemId)}</Text>
      <Text>otherParam:{JSON.stringify(otherParam)}</Text>
      <Button
        title="3rd Screen"
        onPress={() =>
          navigation.navigate('thirdScreen', {
            itemId1: Math.floor(10000 + Math.random() * 10),
            otherParam: 'Second Page',
          })
        }></Button>
    </View>
  );
}
function Third_Screen({route, navigation}) {
  const {itemId1} = route.params;
  const {otherParam} = route.params;
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Text>itemId1:{JSON.stringify(itemId1)}</Text>
      <Text>otherParam:{JSON.stringify(otherParam)}</Text>
      <Button
        title="4th Screen"
        onPress={() => navigation.navigate('Screen')}></Button>
    </View>
  );
}
function LogoTitle() {
  return (
    <Image
      style={{width: 50, height: 50}}
      source={{uri: 'https://reactnative.dev/img/logo-og.png'}}
    />
  );
}
function Screen({navigation}) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount(c => c + 1)} title="Update count" />
      ),
    });
  }, [navigation, setCount]);
  return (
    <View>
      <Text
        style={{
          fontFamily: 'times new roman',
          fontWeight: '600',
          textAlign: 'center',
          margin: 40,
          fontSize: 20,
        }}>
        Count: {count}
      </Text>
      <Button
        title="Tab Screen"
        onPress={() => navigation.navigate('TabScreen')}></Button>
    </View>
  );
}
function BottumTabScreen() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'blue',
        tabBarStyle: {
          backgroundColor: 'navajowhite',
          height: 80,
          padding: 4,
          margin: -13,
        },
        headerStyle: {backgroundColor: 'burlywood', height: 80},
        tabBarLabelStyle: {
          fontFamily: 'Times new Roman',
          fontWeight: 'bold',
          color: 'red',
          fontSize: 18,
        },
      }}>
      <Tab.Screen
        name="menu"
        component={BottumTabScreen1}
        options={{
          tabBarLabelStyle: {
            fontFamily: 'Times new Roman',
            fontWeight: 'bold',
            fontSize: 13,
            color: 'black',
          },
          tabBarLabel: 'Menu',
          tabBarIcon: ({color, size}) => (
            <Entypo name="menu" size={36} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Top Tab"
        component={BottumTabScreen2}
        options={{
          tabBarLabelStyle: {
            fontFamily: 'Times new Roman',
            fontWeight: 'bold',
            fontSize: 13,
            color: 'black',
          },
          tabBarLabel: 'Top Tab',
          tabBarIcon: ({color, size}) => (
            <Entypo name="home" size={36} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Drawers"
        component={BottumTabScreen3}
        options={{
          tabBarLabelStyle: {
            fontFamily: 'Times new Roman',
            fontWeight: 'bold',
            fontSize: 13,
            color: 'black',
          },
          tabBarLabel: 'Drawers',
          tabBarIcon: ({color, size}) => (
            <Entypo name="add-user" size={36} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Cancel"
        component={HomeScreen}
        options={{
          tabBarLabelStyle: {
            fontFamily: 'Times new Roman',
            fontWeight: 'bold',
            color: 'black',
            fontSize: 15,
          },
          tabBarLabel: 'Close',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cancel" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function Feed() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Feed Screen</Text>
    </View>
  );
}
function Notifications() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Profile Screen</Text>
    </View>
  );
}
function BottumTabScreen1() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backfaceVisibility: 'visible',
      }}>
      <Image
        source={{uri: 'https://reactnative.dev/img/logo-og.png'}}
        style={{height: 200, width: 200}}
      />
    </View>
  );
}
function BottumTabScreen2() {
  return (
    <NavigationContainer independent={true}>
      <TopTab.Navigator
        initialRouteName="Tab1"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarLabelStyle: {fontSize: 12, textTransform: 'lowercase'},
          tabBarStyle: {backgroundColor: 'cornsilk', height: 40},
        }}>
        <TopTab.Screen
          name="TopTab1"
          component={Tab1}
          options={{tabBarLabel: '52562'}}
        />
        <TopTab.Screen
          name="TopTab2"
          component={Tab2}
          options={{tabBarLabel: 'Tab2'}}
        />
      </TopTab.Navigator>
    </NavigationContainer>
  );
}
function BottumTabScreen3() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Feed"
        screenOptions={{drawerStyle: {backgroundColor: 'linen', width: 200}}}>
        <Drawer.Screen
          name="Feed"
          component={Feed}
          options={{drawerLabel: 'Home'}}
        />
        <Drawer.Screen
          name="Notifications"
          component={Notifications}
          options={{drawerLabel: 'Updates'}}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{drawerLabel: 'Profile'}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
function BottumTabScreen4() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Close Tab</Text>
    </View>
  );
}
function Tab1() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}>
      <Text>Tab1</Text>
    </View>
  );
}
function Tab2() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Tab2</Text>
    </View>
  );
}
const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{
            title: 'Home',
            headerStyle: {backgroundColor: 'burlywood'},
          }}></Stack.Screen>
        <Stack.Screen
          name="secndScreen"
          component={SecondScreen}
          options={{
            title: '2nd Screen',
            headerStyle: {backgroundColor: 'burlywood'},
            headerRight: () => (
              <Text
                style={{
                  fontFamily: 'times new roman',
                  fontWeight: 'bold',
                  fontSize: 10,
                }}>
                <Button
                  onPress={() => Alert.alert('Button Pressed')}
                  title="Test Button"
                  color={'white'}
                />
              </Text>
            ),
          }}
        />
        <Stack.Screen
          name="thirdScreen"
          component={Third_Screen}
          options={{
            title: '3rd Screen',
            headerStyle: {backgroundColor: 'burlywood'},
            headerRight: () => (
              <Text
                style={{
                  fontFamily: 'times new roman',
                  fontWeight: 'bold',
                  fontSize: 10,
                }}></Text>
            ),
          }}
        />
        <Stack.Screen
          name="Screen"
          component={Screen}
          options={({navigation, route}) => ({
            HeaderTitle: props => <LogoTitle {...props} />,
            headerStyle: {backgroundColor: 'burlywood'},
            headerRight: () => <Button title="Update Button" color={'white'} />,
          })}
        />
        <Stack.Screen
          name="TabScreen"
          component={BottumTabScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
