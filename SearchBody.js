import React from 'react';
import {ScrollView, Text, View, ImageBackground, Dimensions} from 'react-native';
import {Container, Content, ListItem, List} from 'native-base';


var height = Dimensions.get('window').height;
var width =Dimensions.get ('window').width;


class SearchBody extends React.Component{
  render (){

    var pokemon= this.props.data;
    if(!pokemon){
      return <View />
    }
    return (
      <ImageBackground
        style={styles.img2}
        source={{uri:"http://pokemongolive.com/img/posts/raids_loading.png"}}
      >
      <ScrollView style={{flex:1}}>
      <Container>
      <Content>
        <Text style={styles.header}> #{pokemon.id} - {pokemon.name.toUpperCase()}</Text>
            <View style={styles.page1}>
            <ImageBackground source={{uri: pokemon.sprites.front_default}}
            style={styles.img} />
            </View>
            <View style={styles.info}>
                <ListItem itemDivider>
                    <Text style={{fontWeight: 'bold'}}>
                      Size
                    </Text>
                </ListItem>
                <ListItem>
                    <Text>
                      Weight - {pokemon.weight}kg
                    </Text>
                </ListItem>
                <ListItem>
                    <Text>
                    Height - {pokemon.height} cm
                    </Text>
                </ListItem>
                <ListItem itemDivider>
                    <Text style={{fontWeight: 'bold'}}>
                    Abilities
                    </Text>
                </ListItem>
                <List
                  dataArray ={pokemon.abilities}
                  renderRow= {(item) =>
                    <ListItem>
                        <Text> {item.ability.name}</Text>
                        </ListItem>
                  }
                >
                </List>
             </View>
               </Content>
                  </Container>
                    </ScrollView>
                      </ImageBackground>

    )
  }
}

const styles={
  img2:{
    flex:1,
    resizeMode: 'cover',
    height: height,
    width: width,
  },
header:{
  fontSize:30,
  color: 'red',
  textAlign:'center',
},
page1:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
},
img:{
    height: 300,
    width: 300,
    justifyContent: 'center',
},
info:{
  flex:1,
  backgroundColor: 'white',
  opacity: 0.8,
  }
}

  export default SearchBody;
