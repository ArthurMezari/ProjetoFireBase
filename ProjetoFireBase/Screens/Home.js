import { View, Text, StyleSheet, Image, ScrollView, Button, FlatList } from 'react-native';
import {useState, useEffect} from "react";
import { database } from '../FirebaseConfig';
import { collection, getDocs } from 'firebase/firestore';



export default function Home({ navigation }) {

    // const motorista = drivers[0]
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function carregarProdutos() {
            try {
                const querySnapshot = await getDocs(collection(database, 'produtos'));
                const lista = []
                querySnapshot.forEach((doc) => {
                    lista.push({id: doc.id, ...doc.data()})
                })
                setProdutos(lista)
            } catch (error) {
                console.log('Erro ao buscar no banco', error)
            }
        }
        carregarProdutos();
    })
    return (

        <View>

            <Text style={styles.txt}>Nome</Text>
            <FlatList
            data={produtos}
            renderItem={({item}) => (
                <View>
                    <Text>
                        
                    </Text>
            )}
            }
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
