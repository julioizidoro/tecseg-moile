import React from 'react';
import { View, TouchableOpacity, Image, Text, Linking, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer';

 
import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Asoagendadetail() {
  const navigation = useNavigation();
  const route = useRoute();
  const agenda = route.params.agenda; 

  const message = `Ola segue informação sobre o agendamento de seu exame dia ${Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(new Date(agenda.dataexame))} as ${agenda.hora} horas na clinica Salutar.`
  function navigateBack() {
    navigation.goBack();
  }



  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=5548996743884&text=${message}`)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={navigateBack}>
          
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.agenda}>
          <Text style={[styles.asoagendaProperty, { marginTop: 0 }]}>Colaborador</Text>
          <Text style={styles.asoagendaValue}>{agenda.funcionario.nome}</Text>
          <Text style={styles.asoagendaProperty}>Data do Exame</Text>
          <Text style={styles.asoagendaValue}>{Intl.DateTimeFormat('pt-BR', {timeZone: 'UTC'}).format(new Date(agenda.dataexame))}</Text>

      </View>

      <View style={styles.contactBox}>
        <Text style={styles.contactTitle}>Contato</Text>
        <Text style={styles.contactDescription}>Entre em contato:</Text>
        <TextInput>Fone</TextInput>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendEmail}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}