import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, SafeAreaView, FlatList, Alert, Image } from 'react-native';
import Styles from './Styles';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const List_phone = () => {
    const [data, setData] = useState([])
    const filePath = 'https://dummyjson.com/products/';
    useEffect(() => {
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok man :<')

                }
                return response.json();

            }).then((d) => {
                setData(d.products);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error)
            });
    })
    //Alert.alert(data.length.toString());
    return (
        <SafeAreaView style={Styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <ItemProps
                    item={item}
                />}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
};
const HomeScreen = ({ id, navigation }) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}

            />
        </View>
    );


}
const ProfileScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    );
  }
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}
  





const ItemProps = ({ item }) => (
    <View style={Styles.item}>
        <Text style={Styles.title}>{item.title}</Text>
        <Text style={Styles.script}>{item.description}</Text>
        <Text style={Styles.script}>{item.price}</Text>
        <Text style={Styles.script}>{item.discountPercentage}</Text>
        <Text style={Styles.script}>{item.rating}</Text>
        <Text style={Styles.script}>{item.stock}</Text>
        <Text style={Styles.script}>{item.brand}</Text>
        <Text style={Styles.script}>{item.category}</Text>
        <Image style={Styles.images} source={{ uri: item.thumbnail }} />
        <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}

            />
        {/* <images source= */}
    </View>
);
export default List_phone;



