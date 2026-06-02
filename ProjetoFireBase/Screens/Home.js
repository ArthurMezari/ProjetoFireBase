import { View, Text, StyleSheet, Button, FlatList} from 'react-native';
import { useState, useEffect } from 'react';
import { collection, getDocs, doc, deleteDoc } from 'firebase/firestore';

import { database } from '../FirebaseConfig';
import CardProduct from '../Components/Card';

export default function Home({ navigation }) {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        async function carregarProduto() {
            try {

                const querySnapshot = await getDocs(collection(database, 'produtos'));
                const lista = [];
                querySnapshot.forEach((doc) => {
                    lista.push({ id: doc.id, ...doc.data() });
                });
                setProdutos(lista);
            } catch (error) {
                console.log("Erro ao buscar produtos: ", error);
            }
        }

        carregarProduto();
    }, []);

    async function ExcluirProdutos (id){
        
            try {
                await deleteDoc(doc(database, 'produtos', id));
                setProdutos(prev => prev.filter(p => p.id !== id));
            } catch (error) {
                Alert.alert('erro, não foi possível deletar o produto! ')
            }
        
    }

    function EditarProdutos(produto) {
        navigation.navigate('EditProduct', {produto})
    }
    return (
        <View style={styles.container}>
            <Text style={styles.txt}>Produtos</Text>
            <View style={styles.card}>
                <FlatList
                    data={produtos}
                    renderItem={({ item }) => (
                        <CardProduct
                            nome={item.nome}                                                        
                            valor={item.valor}
                            imagem={item.imagem}
                            Excluir={() => ExcluirProdutos(item.id)}
                            Editar={() => EditarProdutos(item)}
                        />
                    )}
                    keyExtractor={item => item.id}
                />
            </View>

            <Button
                title="Add Produto"
                color="#1900ff"
                onPress={() => navigation.navigate('AddProduto')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        gap: 20,
        paddingTop: 40
    },
    txt: {
        fontSize: 20,
        textAlign: 'justify'
    },
    card: {
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '100%'
    }
});
