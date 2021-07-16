import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const Details = ({navigation, route}) => {
    const {item} = route.params;

    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: item.compltNum,
          headerRight: (props) => (
            <TouchableOpacity style={{marginHorizontal: 10}} onPress={() => {
                navigation.navigate('EditPage', {item: item});
            }}>
                <MaterialCommunityIcons
                        name='square-edit-outline'
                        color={'#000000'}
                        size={25}
                        style={{paddingRight: 5, paddingLeft: 5, }}
                />
            </TouchableOpacity>
          ),
        });
    }, [navigation, item]);

    return (
        <ScrollView style={styles.container}>
            
            <View style={{height: 250, width: '100%'}}>
                {item.photo ? 
                <Image
                    style={{width: '100%', height: "100%", resizeMode: "cover", borderRadius: 15 }}
                    source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
                :
                <View style={{width: '100%', justifyContent: 'center', alignItems: 'center', height: "100%", backgroundColor: '#3d3d3d', borderRadius: 15 }} >
                    <MaterialCommunityIcons
                        name='camera'
                        color={'#fff'}
                        size={100}
                        style={{paddingRight: 5, paddingLeft: 5, }}
                    />
                </View>
            }
                
            </View>
            
            <View style={styles.card}>
                <Text style={styles.title}>Contrat</Text>
                <Text>{item.contrat}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Install</Text>
                <Text>{item.install}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Nom</Text>
                <Text>{item.nom}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Complt nº</Text>
                <Text>{item.compltNum}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>N° série fabricant</Text>
                <Text>{item.numSerieFabricant}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Article</Text>
                <Text>{item.article}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Type tarif</Text>
                <Text>{item.typeTarif}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>INDICATEUR SUR PLAN</Text>
                <Text>{item.indicateurSurPlace}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Rue 4</Text>
                <Text>{item.rue4}</Text>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Rue</Text>
                <Text>{item.rue}</Text>
            </View>

        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        // justifyContent: 'center',
        padding: 10,
        // paddingHorizontal: 10,
        // alignItems: 'center',
        // height: '90%',
        marginBottom: 5,
    },
    card: {backgroundColor: '#fff', padding: 15, marginVertical: 10, borderRadius: 15, width: '100%'},
    title: {fontWeight: 'bold', fontSize: 20, marginBottom: 5},

})

export default Details;