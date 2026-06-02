import {View, Text, Button, TextInput, Alert} from "react-native";
import {doc, updateDoc} from 'firebase/firestore';
import { useState } from "react";
import {database} from '../FirebaseConfig';

export default function EditProduct({route}) {


        const {produto} = route.params;
        const [nome, setNome] = useState(produto.nome);
        const [valor, setValor] = useState(String(produto.valor));
        const [imagem, setImagem] = useState(produto.imagem);

        async function Salvar() {
            if (!nome || !valor || !imagem) {
                Alert.alert('preencha todos os campos! ')
                return;
            }
            try {
                const produtoRef = doc(database, 'produtos', produto.id)
                await updateDoc(produtoRef, {
                    nome: nome,
                    valor: parseFloat(valor),
                    imagem: imagem
                })
                Alert.alert('Editado com  sucesso! ')
            } catch (error ) {
                console.log(error)
                Alert.alert('Erro ao editar! ')
            }
        }
    return (
        <View>

            <Text>EDITAR PRODUTOS</Text>
            <TextInput
            placeholder="Nome do produto"
            placeholderTextColor={'#000'}
            value={nome}
            onChangeText={setNome}/>

            <TextInput
            placeholder="Valor"
            placeholderTextColor={'#000'}
            value={valor}
            onChangeText={setValor}
            />

            <TextInput
            placeholder="URL da imagem"
            value={imagem}
            onChangeText={setImagem}/>

            <Button title="Salvar Produto" color="#000"
            onPress={Salvar}/>
            

        </View>
    )
}