import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
 
export default function App() {
  return (
    <ScrollView style={styles.container}>
 
      <Text style={styles.titulo}>
        Victory Store
      </Text>
 
      <Text style={styles.subtitulo}>
        Moda Masculina e Feminina
      </Text>
 
      <View style={styles.card}>
        <Image
          source={{uri:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"}}
          style={styles.imagem}
        />
 
        <Text style={styles.nome}>
          Camiseta Oversized
        </Text>
 
        <Text style={styles.preco}>
          R$ 79,90
        </Text>
 
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>
            Comprar
          </Text>
        </TouchableOpacity>
      </View>
 
      <View style={styles.card}>
        <Image
          source={{uri:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246"}}
          style={styles.imagem}
        />
 
        <Text style={styles.nome}>
          Moletom Premium
        </Text>
 
        <Text style={styles.preco}>
          R$ 149,90
        </Text>
 
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>
            Comprar
          </Text>
        </TouchableOpacity>
      </View>
 
      <View style={styles.card}>
        <Image
          source={{uri:"https://images.unsplash.com/photo-1542291026-7eec264c27ff"}}
          style={styles.imagem}
        />
 
        <Text style={styles.nome}>
          Tênis Casual
        </Text>
 
        <Text style={styles.preco}>
          R$ 229,90
        </Text>
 
        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textoBotao}>
            Comprar
          </Text>
        </TouchableOpacity>
      </View>
 
    </ScrollView>
  );
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f5f5f5",
    padding:20
  },
 
  titulo:{
    fontSize:32,
    textAlign:"center",
    fontWeight:"bold",
    color:"#6A0DAD",
    marginTop:20
  },
 
  subtitulo:{
    textAlign:"center",
    marginBottom:25,
    color:"#666",
    fontSize:18
  },
 
  card:{
    backgroundColor:"#fff",
    borderRadius:15,
    padding:15,
    marginBottom:20,
    shadowColor:"#000",
    shadowOpacity:0.2,
    shadowRadius:6,
    elevation:5
  },
 
  imagem:{
    width:"100%",
    height:220,
    borderRadius:10
  },
 
  nome:{
    fontSize:22,
    fontWeight:"bold",
    marginTop:10
  },
 
  preco:{
    color:"#6A0DAD",
    fontSize:20,
    marginVertical:10,
    fontWeight:"bold"
  },
 
  botao:{
    backgroundColor:"#6A0DAD",
    padding:15,
    borderRadius:10,
    alignItems:"center"
  },
 
  textoBotao:{
    color:"#fff",
    fontSize:18,
    fontWeight:"bold"
  }
});
 