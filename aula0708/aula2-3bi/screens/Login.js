import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=500',
          }}
          style={styles.logo}
        />

        <Text style={styles.titulo}>VESTE</Text>
        <Text style={styles.subtitulo}>
          Seu estilo começa aqui
        </Text>

        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>Senha</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <TouchableOpacity>
          <Text style={styles.esqueci}>
            Esqueci minha senha
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.textoBotao}>
            ENTRAR
          </Text>
        </TouchableOpacity>

        <Text style={styles.conta}>
          Ainda não possui uma conta?
        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('Cadastro')}
        >
          <Text style={styles.cadastrar}>
            Criar uma conta
          </Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    width: 85,
    height: 85,
    borderRadius: 45,
    alignSelf: 'center',
    marginBottom: 12,
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5B2A86',
    textAlign: 'center',
    letterSpacing: 3,
  },

  subtitulo: {
    color: '#888',
    textAlign: 'center',
    marginBottom: 28,
    marginTop: 5,
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

  esqueci: {
    color: '#C65A91',
    textAlign: 'right',
    fontWeight: '600',
    marginBottom: 22,
  },

  botao: {
    height: 55,
    backgroundColor: '#6A3D91',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  conta: {
    color: '#777',
    textAlign: 'center',
    marginBottom: 5,
  },

  cadastro: {
    color: '#C65A91',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },
});