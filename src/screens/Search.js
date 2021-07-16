import React, { useEffect, useRef, useState } from 'react'
import { SafeAreaView, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Search = ({navigation}) => {
    const [searchContent, setSearchContent] = useState(null);
    const refs = useRef(null);

    useEffect(() => {
        refs.current.focus();
        return () => refs.current.blur();
    },[]);

    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];

    const Item = ({ title }) => (
        <TouchableOpacity onPress={() => {
            navigation.navigate('SavedPage2', {searchContent: title});
        }} style={styles.item}>
            <MaterialCommunityIcons
                name='history'
                color={'#000000'}
                size={20}
                style={{paddingRight: 5, paddingLeft: 5, flex: 1}}
            />
            <Text style={styles.title}>{title}</Text>
            <View style={{alignItems: 'flex-end', width: '50%', flex: 1}}>
                <MaterialCommunityIcons 
                    name='arrow-top-left'
                    color={'#000000'}
                    size={20}
                    style={{paddingRight: 5, paddingLeft: 5,}}
                />
            </View>
        </TouchableOpacity>
    );
      

    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return (
        <View style={styles.container}>
            
            <View style={styles.searchBox}>
            
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons
                        name='arrow-left'
                        color={'#000000'}
                        size={20}
                        style={{paddingRight: 5, paddingLeft: 5}}
                    />
                </TouchableOpacity>
                <TextInput 
                    clearButtonMode= 'while-editing'
                    maxLength= {255}
                    numberOfLines= {1}
                    onSubmitEditing={() => {
                            if(searchContent) 
                            navigation.navigate('SavedPage2', {searchContent: searchContent});
                            else 
                            navigation.popToTop();
                        }
                    } 
                    onChangeText={(val) => {
                        if(val.length == 0)
                        setSearchContent(null)
                        else
                        setSearchContent(val)
                    }} 
                    returnKeyType='search' 
                    ref={refs} 
                    placeholder='Rechercher ici' 
                    style={{width: '82%'}} 
                />
                
                {searchContent && 
                    <TouchableOpacity onPress={() => {refs.current.clear(); setSearchContent(null);}}>
                        <MaterialIcons
                            name='clear'
                            color={'#000000'}
                            size={20}
                            
                        />
                    </TouchableOpacity>
                }
            
            </View>
            
            <SafeAreaView style={{width: '100%'}}>
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
    searchBox: {alignItems: 'center' ,flexDirection: 'row', backgroundColor: '#fff', width: '95%', padding: '2%', borderRadius: 30, borderWidth: 0.3, marginTop: 15, marginBottom: 15 },
    item: {
        alignSelf: 'center',
        alignItems:"center",
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: 5,
        marginVertical: 5,
        width: '93%',
        borderRadius: 5,
        // marginHorizontal: 16,
    },
    title: {
        flex: 8,
        alignSelf: 'flex-end',
        fontSize: 20,
    },
})

export default Search;