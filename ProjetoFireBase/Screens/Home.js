import { View, Text, StyleSheet, Image, ScrollView, Button } from 'react-native';





export default function Home({ navigation }) {

    // const motorista = drivers[0]

    return (

        <View>

            <Text style={styles.txt}>Nome</Text>

            <Button title="Add Produto" color="#000"
                onPress={() => navigation.navigate('Add Produtos')} />
        </View>
    )


}

const styles = StyleSheet.create({
                container: {
                justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#ffffffff',
            gap: 20
    },
            txt: {
                fontSize: 20,
            textAlign: 'justify'
    },
            img:{
                width: 200,
            height: 200
    },
            card:{
                alignItems: 'center',
      
    }
})
