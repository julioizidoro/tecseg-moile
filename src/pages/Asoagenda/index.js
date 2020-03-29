import React from 'react';
import { View, FlatList, Image, Text, Button, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function Asoagenda() {
  const navigation = useNavigation();

  function navigateToDetail() {
    navigation.navigate('Asoagendadetail');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.descroption}>Agendamento de exames</Text>
    
      <FlatList 
          style={styles.agendaList}
          keyExtractor={agenda => String(agenda)}
          showsVerticalScrollIndicator={false}
          data={[1,2,3, 4 ,5]}
          renderItem={() => (
            <View  style={styles.agenda}>
              <Text style={styles.asoagendaProperty}>Colaborador</Text>
              <Text style={styles.asoagendaValue}>Andrieli A Welter</Text>
              <Text style={styles.asoagendaProperty}>Data do Exame</Text>
              <Text style={styles.asoagendaValue}>01/04/2020</Text>

              <TouchableOpacity 
                style={styles.detailsButton} 
                onPress={navigateToDetail}
              >
                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                <Feather name='arrow-right' size={16} color="#E02041" />
            </TouchableOpacity>

          </View> 
          )}
        />

      <View >
        

        
        

        
      </View>
    </View>
  );
}