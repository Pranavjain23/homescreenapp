import React from 'react';
import { SafeAreaView,ScrollView,StyleSheet, Image } from 'react-native';
import { Box, Text, theme } from '../components'
import albumCategory from '../data/albumCategory';
import topCategory from '../data/topCategory';
import bottomCategory from '../data/bottomCategory';
import extrabottomCategory from '../data/extrabottomCategory';


const Header = ({title, iconName}: {title:string, iconName?: string}) => {
    return(
      <Box>
      <Box marginHorizontal="s" height={10} flexDirection="row" alignItems="center" justifyContent="space-between">
      
      
      <Text variant="hero">{title}</Text>
      
      </Box>
      </Box>
    )
}


const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
          <Box marginVertical="l" >
          <Header title='' iconName="align-justify"></Header>
          </Box>

          <Box>
            <ScrollView>
              {albumCategory.map((item, i) => {
                return (
                  <Box key={i} marginVertical="xs">
                    <Text marginVertical="xs" variant="title1" marginHorizontal="xs" color="text">
                      {item.title}
                    </Text>
                    <Box>
                      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        {item.albums.map((aItem,i) => {
                          return (
                            <Box margin="s">
                              <Image style={styles.xyImage} source={{uri: aItem.imageUri}}/>
                              <Box width={120} marginVertical="s">
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

          <Box>
            <ScrollView>
              {topCategory.map((topitem,t) => {
                return (
                  <Box key={t}>
                    <Text marginVertical="s" variant="title1" marginHorizontal="s" color="text">
                      {topitem.title}
                    </Text>
                    <Box>
                      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                        {topitem.top.map((tItem,t) => {
                          return (
                            <Box margin="s">
                              <Image style={styles.thumbImage} source={{uri: tItem.imageUri}}/>
                              <Box width={120} marginVertical="m">
                              <Text variant="title3" marginBottom='s'>{tItem.artistsHeadline}</Text>
                              <Text variant="small1">{tItem.time}</Text>
                              <Text variant="small1">{tItem.creator}</Text>
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



          <Box>
            <ScrollView>
              {bottomCategory.map((bottomItem,b) => {
                return (
                  <Box key={b}>
                    <Text marginVertical="m" variant="title1" marginHorizontal="s" color="text">
                      {bottomItem.title}
                    </Text>
                    <Box>
                      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} scrollEnabled={false}>
                        {bottomItem.bottom.map((bItem,b) => {
                          return (
                            <Box margin="s" marginBottom='xs'>
                              <Image style={styles.abImage} source={{uri: bItem.imageUri}}/>
                              <Box width={120} marginVertical="m">
                              <Text variant="title3" marginBottom='s' textAlign='center'>{bItem.artistsHeadline}</Text>
                              <Text variant="small1" textAlign='center'>{bItem.episodes}</Text>
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



          <Box>
            <ScrollView>
              {extrabottomCategory.map((bottomItem,b) => {
                return (
                  <Box key={b}>
                    <Box>
                      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} scrollEnabled={false}>
                        {bottomItem.extrabottom.map((bItem,b) => {
                          return (
                            <Box margin="s">
                              <Image style={styles.abImage} source={{uri: bItem.imageUri}}/>
                              <Box width={120} marginVertical="m">
                              <Text variant="title3" marginBottom='s' textAlign='center'>{bItem.artistsHeadline}</Text>
                              <Text variant="small1" textAlign='center'>{bItem.episodes}</Text>
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
      height: 140,
      width: 140
    },
    abImage: {
      height: 100,
      width: 100,
    },
    xyImage: {
      height: 200,
      width: 300,
    }
  });

  
  export default Home;