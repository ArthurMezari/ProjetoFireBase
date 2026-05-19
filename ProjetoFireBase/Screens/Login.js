import { StyleSheet, TextInput, View, Image, Button, Text } from 'react-native';
import {useState} from 'react';
import {firebaseConfig} from '../FirebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";



export default function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const auth = getAuth();

    const CriarConta = () => {
        createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            // Signed up 
            console.log('Conta criada! ')
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            console.log(error)
            Alert.alert(error.message)
            // ..
        });
    }

    const EntrarConta = () => {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigation.navigate('Home')
                // ...
            })
            .catch((error) => {
                console.log(error)
                Alert.alert(error.message)
            });
    }





    return (
        <View style={styles.container}>
          
            <Text style={styles.txt_login}>FAÇA SEU LOGIN</Text>

            <View style={styles.view_login}>
                <TextInput
                    placeholder='Email'
                    value={email}
                    style={styles.txt_input}
                    onChangeText={setEmail}
                />

                <TextInput
                    placeholder='Senha'
                    value={senha}
                    style={styles.txt_input}
                    onChangeText={setSenha}
                    secureTextEntry
                />

                <Button title="Entrar" color="#000"
                onPress={EntrarConta}
                />

                

                <Button title='Criar conta' color='#000'
                onPress={CriarConta}/>
         

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFA500',
    alignItems: 'center',
    justifyContent: 'center'
  },

  view_login: {
    width: '80%',
    gap: 20,
    marginTop: 20
  },

  txt_input: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 10
  },

  imagem: {
    width: 250,
    height: 250,
  },
  txt_login: {
    textAlign: 'center',
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  }
});