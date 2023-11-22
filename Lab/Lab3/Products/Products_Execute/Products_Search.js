import React, { useState } from 'react';
import Styles from './Styles';
import { View, TextInput, Text, ScrollView, SafeAreaView, TouchableOpacity, FlatList, Button } from 'react-native'
import { Card } from 'react-native-paper';
const ItemProps = ({ item}) => (
    <View style={Styles.item}>
        <Text style={Styles.title}>{item.title}</Text>
        <Text style={Styles.script}>{item.description}</Text>
        <Text style={Styles.script}>{item.price}</Text>
        <Text style={Styles.script}>{item.discountPercentage}</Text>
        <Text style={Styles.script}>{item.rating}</Text>
        <Text style={Styles.script}>{item.stock}</Text>
        <Text style={Styles.script}>{item.brand}</Text>
        <Text style={Styles.script}>{item.category}</Text>
        <Text style={Styles.script}>{item.thumbnail}</Text>

        {/* <images source= */}
    </View>
);

const Search_function = () => {
    const [data, setData] = useState([])
    const [value, setValue] = useState([])
    let filePath = 'https://dummyjson.com/products';
    const searchProducts = () => {
        if (value != '')
            filePath = 'https://dummyjson.com/products/search?q=' + value
        fetch(filePath)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ');
                }
                return response.json();
            }).then((d) => {
                setData(d.products)
            }).catch((error) => {
                console.error('Error fetching data:', error);
            });
    };
    
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <SafeAreaView style={Styles.container}>
                <TextInput
                    textAlign="right"
                    style={Styles.input}
                    placeholder="Enter Products"
                    value={value}
                    onChangeText={value => setValue(value)}
                ></TextInput>
                <TouchableOpacity style={Styles.button}>
                    <Button style={Styles.buttonText}
                        title="Search"
                        onPress={searchProducts} />
                    <FlatList
                        data={data}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Card style={Styles.container}>
                                <ItemProps
                                 item={data}
                                    />
                            </Card>
                        )}
                    />
                </TouchableOpacity>
            </SafeAreaView>
        </ScrollView>
    );
};
export default Search_function;
