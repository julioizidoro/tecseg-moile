import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import styles from './styles';
import logoImg from '../../assets/logo.png';

export default function Asoagendadetail() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />

        <TouchableOpacity onPress={() => {}}>
          
          <Feather name="arrow-left" size={28} color="#E82041" />
        </TouchableOpacity>
      </View>

      <View style={styles.agenda}>
          <Text style={[styles.asoagendaProperty, { marginTop: 0 }]}>Colaborador</Text>
          <Text style={styles.asoagendaValue}>Andrieli A Welter</Text>
          <Text style={styles.asoagendaProperty}>Data do Exame</Text>
          <Text style={styles.asoagendaValue}>01/04/2020</Text>

      </View>

      <View style={styles.contactBox}>
        <Text style={styles.contactTitle}>Contato</Text>
        <Text style={styles.contactDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionText}>E-mail</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}