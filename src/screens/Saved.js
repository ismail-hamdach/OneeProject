import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Saved = ({navigation}) => {
    
    // useEffect(() => {
    //     refs.current.value = props.searchContent;
    //     return () => refs.current.blur();
    // },[]);

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
          photo: null,
          compltNum: '032_009009',
          numSerieFabricant: '1312003623',
          nom: 'MUNICIPALITE ESSAOUIRA',
          install: '4004297245',
          contrat: '4584789',
          article: '1ELE4F20-60A380V_D',
          typeTarif: 'ERBTPUB',
          indicateurSurPlace: '1', 
          rue4: 'COFFRET MUNICIPALITE PLACE MY HASSAN',
          rue: 'LBT_08330-016Q _M1B8V4_TOUAHEN',



        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
          photo: null,
          compltNum: '032_009009',
          numSerieFabricant: '1312003623',
          nom: 'MUNICIPALITE ESSAOUIRA',
          install: '4004297245',
          contrat: '4584789',
          article: '1ELE4F20-60A380V_D',
          typeTarif: 'ERBTPUB',
          indicateurSurPlace: '1', 
          rue4: 'COFFRET MUNICIPALITE PLACE MY HASSAN',
          rue: 'LBT_08330-016Q _M1B8V4_TOUAHEN',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
          photo: null,
          compltNum: '032_009009',
          numSerieFabricant: '1312003623',
          nom: 'MUNICIPALITE ESSAOUIRA',
          install: '4004297245',
          contrat: '4584789',
          article: '1ELE4F20-60A380V_D',
          typeTarif: 'ERBTPUB',
          indicateurSurPlace: '1', 
          rue4: 'COFFRET MUNICIPALITE PLACE MY HASSAN',
          rue: 'LBT_08330-016Q _M1B8V4_TOUAHEN',
        },
      ];

    const Item = ({ item }) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate('DetailsPage', {item: item});
        }} style={styles.item}>
            
            <View style={{height: '60%', width: '100%'}}>
                {item.photo ? 
                <Image
                    style={{width: '100%', height: "100%", resizeMode: "cover", borderTopLeftRadius: 15, borderTopRightRadius: 15, }}
                    source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                :
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', height: "100%", backgroundColor: '#3d3d3d', borderTopLeftRadius: 15, borderTopRightRadius: 15, }} >
                    <MaterialCommunityIcons
                        name='camera'
                        color={'#fff'}
                        size={100}
                        style={{paddingRight: 5, paddingLeft: 5, }}
                    />
                </View>
            }
                
            </View>
            
            <View style={{alignSelf: 'flex-start', padding: 10, height: '40%' }}>
                <Text style={{fontSize: 22, fontWeight: 'bold'}}>{item.compltNum}</Text>
                <Text style={{fontWeight: 'bold' }}>{item.numSerieFabricant}</Text>
                <Text>{item.nom}</Text>
                <Text>{item.install}</Text>
            </View>
            
        </TouchableOpacity>
    );
      

    const renderItem = ({ item }) => (
        <Item item={item} />
    );

    return (
        <View style={styles.container}>
            <SafeAreaView style={{width: '100%', }}>
                
                <View style={styles.searchBox}>
                    <TouchableOpacity style={styles.searchBoxButton} onPress={() => {
                        navigation.navigate('SearchPage1');
                    }} >
                    
                        <MaterialIcons
                            name='search'
                            color={'#3d3d3d'}
                            size={20}
                            style={{paddingRight: 5, paddingLeft: 5}}
                        />
                        <Text>Rechercher ici</Text>
                    
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        
        </View>
    );

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    item: {
        alignSelf: 'center',
        alignItems:"center",
        backgroundColor: '#fff',
        marginVertical: 10,
        width: '90%',
        height: 300,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: '#3d3d3d',
    },
    title: {
        flex: 8,
        alignSelf: 'flex-end',
        fontSize: 20,
    },
    searchBoxButton: {alignSelf: 'center', marginVertical: 10, flexDirection: 'row', backgroundColor: '#fff', width: '92%', padding: '2.5%', borderRadius: 30, borderWidth: 0.3,},

})

export default Saved;