import {View, Text, Image, StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome6";

const Boat = ({name,description,icon_name,poster})=> {
    return (

        <View style={styles.boatContainer}>


            <Text style={{ fontSize: 25, color: '#000000', textTransform: 'uppercase', textAlign: 'center' }}>
                <Icon name ={icon_name} size={20} color="#000000"/>
                {name}
            </Text>

            <Text style={{ fontSize: 15, color: '#000000', marginBottom:30}}>
                {description}
            </Text>
            <Image source={poster} style={{height:300,width:'100%'}}/>

        </View>
    );
};

const styles = StyleSheet.create({
    boatContainer: {
        backgroundColor: '#438bcf',
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,


    }
});
export default Boat;





