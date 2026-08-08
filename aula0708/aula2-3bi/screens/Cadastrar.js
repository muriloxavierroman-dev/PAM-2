import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function Cadastro({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >

      <View style={styles.card}>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=500',
          }}
          style={styles.logo}
        />

        <Text style={styles.titulo}>
          Criar conta
        </Text>

        <Text style={styles.subtitulo}>
          Faça parte da nossa loja
        </Text>

        <Text style={styles.label}>
          Nome completo
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          placeholderTextColor="#999"
        />

        <Text style={styles.label}>
          E-mail
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>
          Senha
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <Text style={styles.label}>
          Confirmar senha
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.textoBotao}>
            CRIAR CONTA
          </Text>
        </TouchableOpacity>

        <Text style={styles.conta}>
          Já possui uma conta?
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.login}>
            Entrar
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F7F4FA',
    justifyContent: 'center',
    padding: 22,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    padding: 28,
    elevation: 8,
    shadowColor: '#5A2A82',
    shadowOpacity: 0.15,
    shadowRadius: 15,
  },

  logo: {
    width: 80,
    height: 80,
    borderRadius: 40,
    alignSelf: 'center',
    marginBottom: 12,
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5B2A86',
    textAlign: 'center',
  },

  subtitulo: {
    textAlign: 'center',
    color: '#888',
    marginTop: 5,
    marginBottom: 27,
  },

  label: {
    color: '#4A3B52',
    fontWeight: 'bold',
    marginBottom: 7,
  },

  input: {
    height: 53,
    backgroundColor: '#FAF8FC',
    borderWidth: 1,
    borderColor: '#E5D8EC',
    borderRadius: 14,
    paddingHorizontal: 16,
    fontSize: 15,
    marginBottom: 17,
  },

  botao: {
    height: 55,
    backgroundColor: '#6A3D91',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 20,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    letterSpacing: 1,
  },

  conta: {
    textAlign: 'center',
    color: '#777',
  },

  login: {
    textAlign: 'center',
    color: '#C65A91',
    fontWeight: 'bold',
    marginTop: 5,
  },
});