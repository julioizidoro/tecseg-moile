import React, { useState, useEffect } from 'react';
import { View, FlatList, Image, Text, Button, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Moment from 'react-moment';

import api from '../../services/api'
import logoImg from '../../assets/logo.png';

import styles from './styles';


export default function Asoagenda() {
  const [agendas, setAgendas] = useState([]);
  const navigation = useNavigation();
  const [total, setTotal] = useState(0);
  
  function navigateToDetail(agenda) {
    navigation.navigate('Asoagendadetail', { agenda });
  }

  async function loadAgendas() {
      const response = await api.get('asoagenda')
      setAgendas([...agendas, ...response.data]);
  }

  useEffect(() => {
    loadAgendas();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
      </View>

      <Text style={styles.title}>Bem vindo!</Text>
      <Text style={styles.descroption}>Agendamento de exames</Text>
    
      <FlatList 
          style={styles.agendaList}
          keyExtractor={agenda => String(agenda.idasoagenda)}
          showsVerticalScrollIndicator={false}
        
          data={agendas}
          renderItem={( { item: agenda} ) => (
            <View  style={styles.agenda}>
              <Text style={styles.asoagendaProperty}>Colaborador</Text>
              <Text style={styles.asoagendaValue}>{agenda.funcionario.nome}</Text>
              <Text style={styles.asoagendaProperty}>Data do Exame</Text>
              
              <Text style={styles.asoagendaValue}>{Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(new Date(agenda.dataexame))}</Text>

              <TouchableOpacity 
                style={styles.detailsButton} 
                onPress={() => navigateToDetail(agenda)}
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