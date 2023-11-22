import React, { useState } from 'react';
import { View, Text, StatusBar, SafeAreaView, FlatList, Alert,TextInput,ScrollView,TouchableOpacity } from 'react-native';
import Styles from './Styles';



const Add_Products = () => {
const [title, setTitle]= useState('');
const [description, setDescription]= useState('');
const [price, setPrice]= useState('');
const [discountPercentage, setDiscountPercentage]= useState('');
const [rating, setRating]= useState('');
const [stock, setStock]= useState('');
const [brand, setBrand]= useState('');
const [category, setCategory]= useState('');
const [images, setImages]= useState('');
handleSubmit =()=> {
        if(){}
        else{}
    fetch('https://dummyjson.com/products/add',{
          method :'POST',
          headers :{ 'Content-Type':'application/json'},
          body: JSON.stringify({
                title:title,
                description: description,
                price: price,
                discountPercentage: discountPercentage,
                rating: rating,
                stock: stock,
                brand :brand,
                category: category,
                images:images,
          }),
    }).then((res) =>res.JSON())
      .then(console.log);
    Aler.alert("Add successfull")
};
return(
    <ScrollView showsVerticalScrollIndicator={false}>


    <SafeAreaView style={Styles.container}>
        <Text style ={Styles.title}>Title</Text>
       <TextInput
        TextAlign = "right"
        style ={Styles.input}
        placeholder="Enter title"
        value={title}
        onChangeText={title => setTitle(title)}
></TextInput>

<Text style ={Styles.title}>Description</Text>
       <TextInput
        TextAlign = "right"
        style ={Styles.input}
        placeholder="Enter description"
        value={description}
        onChangeText={description => setDescription(description)}
></TextInput>

<Text style ={Styles.title}>Price</Text>
       <TextInput
        TextAlign = "right"
        style ={Styles.input}
        placeholder="Enter title"
        value={price}
        onChangeText={price => setPrice(price)}
></TextInput>

<Text style ={Styles.title}>discountPercentage</Text>
       <TextInput
        TextAlign = "right"
        style ={Styles.input}
        placeholder="Enter title"
        value={discountPercentage}
        onChangeText={discountPercentage => setDiscountPercentage(discountPercentage)}
></TextInput>


<Text style ={Styles.title}>rating</Text>
       <TextInput
        TextAlign = "right"
        style ={Styles.input}
        placeholder="Enter title"
        value={rating}
        onChangeText={rating => setRating(rating)}
></TextInput>


<Text style ={Styles.title}>stock</Text>
       <TextInput
        TextAlign = "right"
        style ={Styles.input}
        placeholder="Enter title"
        value={stock}
        onChangeText={stock => setStock(stock)}
></TextInput>


<Text style ={Styles.title}>brand</Text>
       <TextInput
        TextAlign = "right"
        style ={Styles.input}
        placeholder="Enter title"
        value={brand}
        onChangeText={brand => setBrand(brand)}
></TextInput>

<Text style ={Styles.title}>category</Text>
       <TextInput
        TextAlign = "right"
        style ={Styles.input}
        placeholder="Enter title"
        value={category}
        onChangeText={category => setCategoryy(category)}
></TextInput>

<Text style ={Styles.title}>images</Text>
       <TextInput
        TextAlign = "right"
        style ={Styles.input}
        placeholder="Enter title"
        value={images}
        onChangeText={images => setImages(images)}
></TextInput>
 
<TouchableOpacity style={Styles.button}>
  <Text style={Styles.buttonText}>Submit</Text>
 </TouchableOpacity>


    </SafeAreaView>
    </ScrollView>
);
};
export default Add_Products