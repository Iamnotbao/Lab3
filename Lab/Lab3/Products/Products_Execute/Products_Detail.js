import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native'
import Styles from './Styles';
import { Card } from 'react-native-paper';

const ItemProps = ({ item }) => {
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
    </View>
}



const Detail_Products = () => {
    const [data, setData] = useState([])
    const filePath = 'https://dummyjson/products/2';

    useEffect(() => {
        fetch(filePath)
            .then((Response) => {
                if (!Response.ok) {
                    throw new Error('Network response was not ok ');
                }
                return Response.json();

            })
            .then((d) => {
                setData(d);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            }
            )
    })
    return (
        <SafeAreaView style={Styles.container}>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Card style={Styles.container}>
                        <ItemProps item={data} />
                    </Card>
                )}
            />
        </SafeAreaView>

    );
};
export default Detail_Products;












