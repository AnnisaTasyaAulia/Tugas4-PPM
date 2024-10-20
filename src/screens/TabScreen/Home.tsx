/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {View, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import petshopp from '../../assets/petshopp.jpeg';
import plus from '../../assets/plus.png';
import star from '../../assets/star.png';
import cat from '../../assets/cat_cute.jpeg';
import { NavigationProp, useNavigation } from '@react-navigation/native';



const products = [
  {id: '1', name: 'Wet Food', description: 'For Cat', Image: require('../../assets/wet_food.jpeg'), price: '$8.00', rating: 5},
  {id: '2', name: 'Dry Food Jinx', description: 'For Dog', Image: require('../../assets/dry_food.jpeg'), price: '$6.50', rating: 4.8},
  {id: '3', name: 'Snack', description: 'For Cat', Image: require('../../assets/snack.jpeg'), price: '$3.00', rating: 4.5},
  {id: '4', name: 'Shampoo', description: 'For Dog', Image: require('../../assets/shampoo.jpeg'), price: '$5.40', rating: 4.9},
];

type RootStackParamList = {
  Home: undefined;
  DetailExample: { message: string };
  Profile: undefined;
};

type DetailExampleProps = NavigationProp<RootStackParamList, 'DetailExample'>;

const petshop = () => {

  const navigation = useNavigation<DetailExampleProps>();

    const handleProductPress = (product: any) => {
        navigation.navigate('DetailExample', {
            message: 'Product Details',
            name: product.name,
            description: product.description,
            image: product.image,
            price: product.price,
            rating: product.rating,
        });
    };

  return(
    <View style={{backgroundColor: '#f4f4f4'}}>
      <ScrollView>
        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 63, marginLeft: 30 , marginRight: 30}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.Lokasi}>
              Location
            </Text>
            <Text style={{width:143, height:18, fontFamily:'sora', fontWeight:'600', fontSize:14, lineHeight:17.64, color: '#8B5A2B'}}>
              Sukabumi, Indonesia.
            </Text>
          </View>
          <View>
            <Image source={cat} style={styles.Avatar} />
          </View>
        </View>

        <View style={{marginTop: 20, justifyContent: 'center', alignItems:'center' }}>
          <TextInput placeholder="Search Product"
          style={styles.search} />
        </View>

        <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 20}}>
          <Image source={petshopp} style={{width: 380, height: 150, borderRadius: 14}}/>
        </View>


        <ScrollView horizontal={true} style={styles.ScrollView}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Wet Fod Royal Canin</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncase}>
              <Text style={styles.buttonTextcase}>Dry Food Jinx</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncase}>
              <Text style={styles.buttonTextcase}>Snack</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttoncase}>
              <Text style={styles.buttonTextcase}>Shampoo</Text>
            </TouchableOpacity>

          </View>
          </ScrollView>
          <View style={styles.cardWrapper}>
                    {products.map(product => (
                        <TouchableOpacity key={product.id} style={styles.cardContainer} onPress={() => handleProductPress(product)}>
                            <Image source={product.Image} style={styles.cardImage} />
                            <Image source={require('../../assets/star.png')} style={styles.iconStar} />
                            <Text style={styles.rating}>{product.rating}</Text>
                            <Text style={styles.cardTitle}>{product.name}</Text>
                            <Text style={styles.cardDescription}>{product.description}</Text>
                            <Text style={styles.cardPrice}>{product.price}</Text>
                            <Image source={require('../../assets/plus.png')} style={styles.ikonplus} />
                        </TouchableOpacity>
                    ))}
                </View>
        </ScrollView>
      </View>
   );
};


export default petshop;

const styles = StyleSheet.create({
  Avatar: {
    width: 44,
    height: 44,
    borderRadius: 10,
  },

  Lokasi: {
    width: 60,
    height: 15,
    color: '#8B5A2B',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 16.12,
    letterSpacing: 1,
    fontFamily: 'sora',
  },

  search: {
    paddingLeft: 20,
    borderRadius: 16,
    width: 380,
    height: 52,
    borderWidth: 2,
    borderColor: '#C67C4E',
    backgroundColor: '#C67C4E',
  },

  ScrollView: {
    marginTop: 20,
    marginLeft: 25,
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  button: {
    backgroundColor: '#C67C4E',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 11,
  },

  buttoncase: {
    backgroundColor: '#C49A6A',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 11,
  },

  buttonText: {
    fontWeight: '600',
    fontFamily: 'sora',
    fontSize: 14,
    color: '#8B5A2B',
  },

  buttonTextcase: {
    fontWeight: '600',
    fontFamily: 'sora',
    fontSize: 14,
    color: '#D2B48C',
  },

  cardWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    margin: 10,
    marginTop: 70,
  },

  cardContainer: {
    backgroundColor: '#f0d9c0',
    borderRadius: 12,
    padding: 4,
    marginTop:-50,
    marginBottom:70,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  cardTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#4B3C30',
    marginTop:10,
    marginLeft:5,
  },

  cardImage: {
    width: '100%',
    height: 130,
    borderRadius:10,
  },

  cardDescription: {
    marginTop: 1,
    fontSize: 14,
    marginLeft:7,
    color: '#4B3C30',
  },

  cardPrice: {
    marginTop: 15,
    fontSize: 20,
    marginLeft:10,
    fontWeight: 'bold',
    color:'#4B3C30',
  },

  ikonplus: {
    marginHorizontal: 110,
    marginTop: -30,
    width: 35,
    height: 35,
  },

  iconStar: {
    position:'absolute',
    width: 20,
    height:20,
    marginLeft:9,
    marginTop:5,
  },

  rating: {
    position: 'absolute',
    color: '#4B3C30',
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 35,
  },

});
