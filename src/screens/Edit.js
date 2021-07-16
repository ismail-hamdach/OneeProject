import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Touchable, Alert, TextInput } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const Edit = ({navigation, route}) => {
    const {item} = route.params;

    React.useLayoutEffect(() => {
        navigation.setOptions({
          title: item.compltNum,
          headerRight: (props) => (
            <TouchableOpacity style={{marginHorizontal: 10}} onPress={() => {
                navigation.navigate('EditPage', item);
            }}>
                <MaterialCommunityIcons
                        name='content-save'
                        color={'#000000'}
                        size={25}
                        style={{paddingRight: 5, paddingLeft: 5, }}
                />
            </TouchableOpacity>
          ),
        });
    }, [navigation, item]);
    return (
        <ScrollView style={styles.container} >
            
            <TouchableOpacity style={{height: 250, width: '100%'}} onPress={() => {
                Alert.alert(
                    "Modifier le photo",
                    "Choisir le source",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel"
                      },
                      { text: "OK", onPress: () => console.log("OK Pressed") }
                    ]
                  );
            }} >
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
                
            </TouchableOpacity>
            
            <View style={styles.card}>
                <Text style={styles.title}>Contrat</Text>
                <TextInput value={item.contrat}  style={styles.input} />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Install</Text>
                {/* <Text>{item.install}</Text> */}
                <TextInput value={item.install}  style={styles.input} />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Nom</Text>
                {/* <Text>{item.nom}</Text> */}
                <TextInput value={item.nom}  style={styles.input} />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Complt nº</Text>
                {/* <Text>{item.compltNum}</Text> */}
                <TextInput value={item.compltNum}  style={styles.input} />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>N° série fabricant</Text>
                {/* <Text>{item.numSerieFabricant}</Text> */}
                <TextInput value={item.numSerieFabricant}  style={styles.input} />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Article</Text>
                {/* <Text>{item.article}</Text> */}
                <TextInput value={item.article}  style={styles.input} />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Type tarif</Text>
                {/* <Text>{item.typeTarif}</Text> */}
                <TextInput value={item.typeTarif}  style={styles.input} />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>INDICATEUR SUR PLAN</Text>
                {/* <Text>{item.indicateurSurPlace}</Text> */}
                <TextInput value={item.indicateurSurPlace}  style={styles.input} />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Rue 4</Text>
                {/* <Text>{item.rue4}</Text> */}
                <TextInput value={item.rue4}  style={styles.input} />
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Rue</Text>
                {/* <Text>{item.rue}</Text> */}
                <TextInput value={item.rue}  style={styles.input} />
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
    input: {borderWidth: 1, padding: 5, borderRadius: 15, paddingHorizontal: 10,},

})

export default Edit;