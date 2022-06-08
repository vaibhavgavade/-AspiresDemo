//import liraries
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';
import R from '../R';
import {Indicator} from '../components/Spiner';
import {Card} from '../components/Card';
import {ListItem, Header} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Heading} from '../components/Heading';
// create a component
const Home = props => {
  const [dataSource, setDataSource] = useState(null);
  const [pageNO, setPageNo] = useState(1); //page no.
  const [loadingMore, setLoadingMore] = useState(false); //flag for load more loader
  const [isFetching, setIsFetching] = useState(false); //pull to refresh flag
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    _getAllData();
  }, []);

  const _getAllData = async () => {
    setLoading(true);
    try {
      axios
        .get(`https://gorest.co.in/public/v1/users?page=${pageNO}`)
        .then(res => {
          const {data} = res;
          setDataSource(data);
          setLoading(false);
          setLoadingMore(false);
        })
        .catch(error => {
          console.log('--------error', error);
          setLoading(false);
        });
    } catch (error) {
      console.log('Error catch Error');
      setLoading(false);
    }
  };
  //ListView
  const ListView = Item => {
    console.log('test item------------@@', item);
    const {item} = Item;
    return (
      <Card top={10} color={'#f0f'}>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title titleStyle={{fontFamily: R.fonts.AspireBold}}>
              {`#${item.id}`}
            </ListItem.Title>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{`E- Mail ID:${item.email}`}</ListItem.Subtitle>
            <View
              style={{
                flexDirection: 'row',
              }}>
              <ListItem.Subtitle>{`Gender:${item.gender}`}</ListItem.Subtitle>
              <Text style={{paddingLeft: 20}}>{`Status: ${item.status}`}</Text>
            </View>
          </ListItem.Content>
          <Icon
            name={item.status == 'active' ? 'check-circle' : 'highlight-off'}
            size={20}
            color={item.status == 'active' ? R.colors.g : R.colors.r}
          />
        </ListItem>
      </Card>
    );
  };

  const loadMoreData = () => {
    setPageNo(pageNO + 1);
    setLoadingMore(true);
    setIsFetching(true);
    _getAllData();
    setIsFetching(false);
  };
  const renderFooter = () => {
    return (
      <View style={styles.footer}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => loadMoreData()}
          style={styles.loadMoreBtn}>
          <Text style={styles.btnText}>Load More</Text>
          {loadingMore ? (
            <ActivityIndicator color="white" style={{marginLeft: 8}} />
          ) : null}
        </TouchableOpacity>
      </View>
    );
  };
  if (loading) {
    return <Indicator />;
  } else {
    return (
      <View style={styles.container}>
        <Header
          containerStyle={{borderBottomWidth: 0, backgroundColor: R.colors.A}}
          barStyle="light-content"
          backgroundColor={R.colors.A1}
          placement="left"
          leftComponent={{
            icon: 'arrow-back-ios',
            color: '#fff',
            onPress: () => props.navigation.goBack(),
          }}
          // rightComponent={<Image source={R.images.aspireLogo} size={'small'} />}
          rightComponent={{
            icon: 'menu',
            color: '#fff',
          }}
        />
        <Heading>
          <Text>Tasks</Text>
        </Heading>
        <FlatList
          data={dataSource?.data}
          keyExtractor={(item, index) => index.toString()}
          nestedScrollEnabled={true}
          renderItem={ListView}
          ListEmptyComponent={() => (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: R.colors.r,
                  fontFamily: R.fonts.EncRegular,
                  fontSize: 15,
                }}>
                No information is available.
              </Text>
            </View>
          )}
          refreshing={isFetching}
          // onRefresh={() => onRefresh()}
          // extraData={sortDataFlag}
          onEndReachedThreshold={0.2}
          onEndReached={loadingMore}
          ListFooterComponent={renderFooter()}
          contentContainerStyle={{paddingBottom: 10}}
        />
      </View>
    );
  }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

//make this component available to the app
export default Home;
