import React from 'react';
import { SafeAreaView,ScrollView,StyleSheet } from 'react-native';
import { Box, Text, theme } from '../components'
import { Feather as Icon } from '@expo/vector-icons';
import albumCategory from '../data/albumCategory';


const Header = ({title, iconName}: {title:string, iconName?: string}) => {
    return(
      <Box>
      <Box marginHorizontal="m" height={60} flexDirection="row" alignItems="center" justifyContent="space-between">
      
      
      <Text variant="hero">{title}</Text>
      {iconName ?
      <Icon name ={iconName} size={26} color={theme.colors.text}/>
        :null}
      </Box>
      </Box>
    )
}


const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
          <Box marginVertical="l" >
          <Header title='Recently Played' iconName="align-justify"></Header>
          </Box>
          <Box>
            <ScrollView>
              {albumCategory.map((item, i) => {
                return (
                  <Box key={i}>
                    <Text marginVertical="m" variant="title1" marginHorizontal="m" color="text">
                      {item.title}
                    </Text>
                    <Box>
                      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        {item.albums.map((aItem,i) => {
                          return (
                            <Box margin="s">
                              <Image style={styles.thumbImage} source={{uri: aItem.imageUri}}/>
                              <Box width={120} marginVertical="s">
                              <Text variant="body">{aItem.artistsHeadline}</Text>
                              <Text variant="small">{aItem.time}</Text>
                              <Text variant="small">{aItem.creator}</Text>
                              </Box>
                            </Box>
                          )
                        })}
                        </ScrollView>
                    </Box>
                  </Box>
                )
              })}
            </ScrollView>
          </Box>
          </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary, 
    },
    thumbImage: {
      height: 120,
      width: 120
    }
  });

  
  export default Home;