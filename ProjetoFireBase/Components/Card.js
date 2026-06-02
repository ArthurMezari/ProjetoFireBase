import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { Card } from 'react-native-paper';
import { ScrollView } from 'react-native-web';


export default function CardProduct({nome, valor, imagem, Excluir, Editar}) {


  return (
    <View>

      <ScrollView>
      
        <Card>

          <Card.Cover source={{ uri: imagem}}/>
          <Card.Content>

          
            <Text>{nome}</Text>
            <Text>R$ {valor}</Text>                                                                                                                      

          </Card.Content>
          <View style={styles.botoes}>
              <Button title='Excluir' onPress={Excluir}/>
              <Button title='Editar' onPress={Editar}/>
          </View>
        </Card>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  botoes:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingVertical: 10
  }
})

