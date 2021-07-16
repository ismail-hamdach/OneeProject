import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Location from 'expo-location';


const Home = ({navigation}) => {

    const [mapType, setMapType] = useState(false); 
    const [isLoading, setIsLoading] = useState(false); 
    const [showUserLocation, setShowUserLocation] = useState(false);
    const [location, setLocation] = useState({
        latitude: 31.5105033120614, 
        longitude: -9.76073982024889,
      }); 
    const [pitch, setPitch] = useState(false); 

    const _getLocation = async(locationRetrieved) => {
        setIsLoading(true);
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            setIsLoading(false);
            return;
        }
        Location.getCurrentPositionAsync({}).then((location) => {
             console.log(location)
            locationRetrieved(location.coords);

            _mapView.animateCamera({
                center: {
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421, 
                
                },
                heading: location.coords.heading,
                pitch: pitch ? 90 : 0,
                zoom: pitch ? 22 : 20,
            });

            setShowUserLocation(true);
        }
            
        ).catch(() => {
            alert('Activer ou Verifier que la localisation est activée');
            setShowUserLocation(false);
        }).finally(() => {
            setPitch(!pitch);
            setIsLoading(false);
        });
       
    }

    return (
        <View style={styles.container}>
            
            <MapView 
                
                provider="google" 
                mapType={mapType ? 'hybrid' : 'standard' } 
                showsUserLocation={showUserLocation}
                showsMyLocationButton={false}
                compassEnabled = {false}
                ref={
                    (mapView) => {
                        _mapView  = mapView;
                    }
                }
                initialRegion={{
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                onLongPress={(e) => {
                    alert('I am here! : ' + e.nativeEvent.coordinate.longitude + ' ,' + e.nativeEvent.coordinate.latitude);
                    console.log(e.nativeEvent);
                    
                }}
                
                
                style={styles.map} >
               
            </MapView>

            <View style={styles.searchBox}>
                <TouchableOpacity style={styles.searchBoxButton} onPress={() => {
                    navigation.navigate('SearchPage');
                }} >
                
                    <MaterialCommunityIcons
                        name='map-marker-radius'
                        color={'#3d3d3d'}
                        size={20}
                        style={{paddingRight: 5, paddingLeft: 5}}
                    />
                    <Text>Rechercher ici</Text>
                
                </TouchableOpacity>
            </View>
            
            <View style={styles.layersBox}>
                <TouchableOpacity style={styles.layersBoxButton} onPress={() => {
                        setMapType(!mapType);
                    }} >
                
                    <MaterialCommunityIcons
                        name={mapType ? 'layers-triple-outline' : 'layers-triple'}
                        color={'#3d3d3d'}
                        size={30}
                        style={{paddingRight: 5, paddingLeft: 5}}
                    />
                    
                </TouchableOpacity>
            </View>

            <View style={styles.locationBox}>
                <TouchableOpacity style={styles.locationBoxButton} onPress={() => {
                        _getLocation(setLocation);
                    }} >
                    {isLoading?
                        <ActivityIndicator size="small" color="#3d3d3d" />
                        :
                        <MaterialIcons
                            name='my-location'
                            color={'#3d3d3d'}
                            size={30}
                            style={{paddingRight: 5, paddingLeft: 5}}
                        />

                    }
                    
                </TouchableOpacity>
            </View>
        
        </View>
    );

}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height-30,
        bottom: '1%',
    },
    searchBox: {position: 'absolute', top: 20, left: 0, right: 0, bottom: 0, justifyContent: 'flex-start', alignItems: 'center',},
    searchBoxButton: {flexDirection: 'row', backgroundColor: '#fff', width: '90%', padding: '2.5%', borderRadius: 30, borderWidth: 0.3,},
    layersBox: {position: 'absolute', right: '8%', top: '15%'},
    layersBoxButton: {flexDirection: 'row', backgroundColor: '#fff', height: 40, width: 40, borderRadius: 500, justifyContent: 'center', alignItems: 'center',  },
    locationBox: {position: 'absolute', right: '8%', bottom: '9%'},
    locationBoxButton: {flexDirection: 'row', backgroundColor: '#fff', height: 40, width: 40, borderRadius: 500, justifyContent: 'center', alignItems: 'center',  },
})

export default Home;