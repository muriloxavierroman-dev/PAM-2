import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function Home({ navigation }) {

  const produtos = [
    {
      nome: 'Vestido Elegance',
      preco: 'R$ 149,90',
      imagem:
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600',
    },

    {
      nome: 'Jaqueta Premium',
      preco: 'R$ 219,90',
      imagem:
        'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600',
    },

    {
      nome: 'Blusa Casual',
      preco: 'R$ 89,90',
      imagem:
        'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600',
    },

    {
      nome: 'Look Moderno',
      preco: 'R$ 179,90',
      imagem:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600',
    },
  ];

  return (
    <View style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* Cabeçalho */}

        <View style={styles.header}>

          <View>
            <Text style={styles.logo}>
              VESTE
            </Text>

            <Text style={styles.slogan}>
              Seu estilo, sua identidade.
            </Text>
          </View>

          <TouchableOpacity style={styles.carrinho}>
            <Text style={styles.carrinhoTexto}>
              🛍️
            </Text>
          </TouchableOpacity>

        </View>

        {/* Banner */}

        <View style={styles.banner}>

          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1000',
            }}
            style={styles.bannerImagem}
          />

          <View style={styles.bannerTexto}>

            <Text style={styles.bannerTitulo}>
              NOVA COLEÇÃO
            </Text>

            <Text style={styles.bannerSubtitulo}>
              Estilo que combina com você
            </Text>

            <TouchableOpacity style={styles.bannerBotao}>
              <Text style={styles.bannerBotaoTexto}>
                VER COLEÇÃO
              </Text>
            </TouchableOpacity>

          </View>

        </View>

        {/* Categorias */}

        <Text style={styles.tituloSecao}>
          Categorias
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categorias}
        >

          <TouchableOpacity style={styles.categoriaAtiva}>
            <Text style={styles.categoriaAtivaTexto}>
              Todos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoria}>
            <Text style={styles.categoriaTexto}>
              Feminino
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoria}>
            <Text style={styles.categoriaTexto}>
              Masculino
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.categoria}>
            <Text style={styles.categoriaTexto}>
              Acessórios
            </Text>
          </TouchableOpacity>

        </ScrollView>

        {/* Produtos */}

        <View style={styles.produtoHeader}>

          <Text style={styles.tituloSecao}>
            Destaques
          </Text>

          <Text style={styles.verTodos}>
            Ver todos
          </Text>

        </View>

        <View style={styles.produtos}>

          {produtos.map((produto, index) => (

            <TouchableOpacity
              style={styles.produto}
              key={index}
            >

              <View style={styles.imagemContainer}>

                <Image
                  source={{ uri: produto.imagem }}
                  style={styles.imagemProduto}
                />

                {index === 0 && (
                  <View style={styles.novo}>
                    <Text style={styles.novoTexto}>
                      NOVO
                    </Text>
                  </View>
                )}

              </View>

              <Text style={styles.nomeProduto}>
                {produto.nome}
              </Text>

              <Text style={styles.preco}>
                {produto.preco}
              </Text>

            </TouchableOpacity>

          ))}

        </View>

      </ScrollView>

      {/* Menu inferior */}

      <View style={styles.menu}>

        <TouchableOpacity>
          <Text style={styles.menuIconeAtivo}>⌂</Text>
          <Text style={styles.menuTextoAtivo}>Início</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.menuIcone}>♡</Text>
          <Text style={styles.menuTexto}>Favoritos</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.menuIcone}>🛍</Text>
          <Text style={styles.menuTexto}>Sacola</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.menuIcone}>●</Text>
          <Text style={styles.menuTexto}>Perfil</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FAF8FC',
  },

  header: {
    backgroundColor: '#FFFFFF',
    paddingTop: 45,
    paddingHorizontal: 22,
    paddingBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logo: {
    fontSize: 26,
    fontWeight: 'bold',
    letterSpacing: 3,
    color: '#5B2A86',
  },

  slogan: {
    color: '#999',
    fontSize: 12,
    marginTop: 3,
  },

  carrinho: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#F8EDF5',
    justifyContent: 'center',
    alignItems: 'center',
  },

  carrinhoTexto: {
    fontSize: 21,
  },

  banner: {
    height: 230,
    margin: 18,
    borderRadius: 22,
    overflow: 'hidden',
  },

  bannerImagem: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  bannerTexto: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
    backgroundColor: 'rgba(40,20,50,0.35)',
  },

  bannerTitulo: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  bannerSubtitulo: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 5,
    marginBottom: 18,
  },

  bannerBotao: {
    backgroundColor: '#FFFFFF',
    alignSelf: 'flex-start',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 10,
  },

  bannerBotaoTexto: {
    color: '#5B2A86',
    fontWeight: 'bold',
    fontSize: 12,
  },

  tituloSecao: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#352A3B',
    marginLeft: 20,
    marginTop: 8,
  },

  categorias: {
    paddingLeft: 20,
    marginTop: 13,
    marginBottom: 15,
  },

  categoria: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E8DFEC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },

  categoriaTexto: {
    color: '#666',
  },

  categoriaAtiva: {
    backgroundColor: '#6A3D91',
    paddingHorizontal: 22,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 10,
  },

  categoriaAtivaTexto: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  produtoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 20,
  },

  verTodos: {
    color: '#C65A91',
    fontWeight: 'bold',
    marginTop: 8,
  },

  produtos: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 18,
    marginTop: 15,
    paddingBottom: 100,
  },

  produto: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingBottom: 13,
    marginBottom: 17,
    overflow: 'hidden',
    elevation: 3,
  },

  imagemContainer: {
    position: 'relative',
  },

  imagemProduto: {
    width: '100%',
    height: 190,
  },

  novo: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#C65A91',
    paddingHorizontal: 9,
    paddingVertical: 5,
    borderRadius: 8,
  },

  novoTexto: {
    color: '#FFFFFF',
    fontSize: 9,
    fontWeight: 'bold',
  },

  nomeProduto: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#403546',
    marginTop: 10,
    marginHorizontal: 12,
  },

  preco: {
    fontSize: 16,
    color: '#6A3D91',
    fontWeight: 'bold',
    marginTop: 5,
    marginHorizontal: 12,
  },

  menu: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 72,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEE',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  menuIcone: {
    textAlign: 'center',
    fontSize: 21,
    color: '#999',
  },

  menuIconeAtivo: {
    textAlign: 'center',
    fontSize: 21,
    color: '#6A3D91',
  },

  menuTexto: {
    fontSize: 10,
    color: '#999',
    marginTop: 3,
  },

  menuTextoAtivo: {
    fontSize: 10,
    color: '#6A3D91',
    fontWeight: 'bold',
    marginTop: 3,
  },

});