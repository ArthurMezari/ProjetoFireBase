import {View, Text, Button, TextInput} from "react-native";
import {database} from "../FirebaseConfig";
import {useState} from "react";

import { addDoc, collection } from "firebase/firestore";

export default function AddProduto() {
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [imagem, setImagem] = useState('');

    const CadastrarProdutos = async () => {
        try {
            await addDoc(collection(database, 'produtos'), {
                nome,
                valor: parseFloat(valor),
                imagem 
            }
        )

            alert('Produto cadastrado com sucesso! ')

        } catch (error) {
            console.log('Erro ao cadastrar', error)
        }
    }

    return (
        <View>

            <Text>ADICIONAR PRODUTOS</Text>
            <TextInput
            placeholder="Nome"
            placeholderTextColor={'#000'}
            value={nome}
            onChangeText={setNome}
            styles={styles.txtInput}
            />

            <TextInput
            placeholder="Valor"
            placeholderTextColor={'#000'}
            onChangeText={setValor}
            />

            <TextInput
            placeholder="URL da imagem"
            value={imagem}
            onChangeText={setImagem}
            />

            <Button title="Adicionar" color="#000" 
            onPress={CadastrarProdutos}/>

        </View>
    )
}