import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button, Card, Container} from '../../Components';
import {datas, topButtons} from '../../util/constant';
import {styles} from './style';

const Home = () => {
  const [list, setList] = useState(datas);

  const _handleLike = index => {
    let newList = [...list];
    let like = newList[index].like;
    newList[index].like = like + 1;
    setList(newList);
  };

  const _handleDislike = index => {
    let newList = [...list];
    let like = newList[index].like;
    if (like > 0) {
      newList[index].like = like - 1;
      setList(newList);
    }
  };

  const _handleTopButtons = type => {
    let newList = [];
    if (type === 'like') {
      newList = list.map(item => ({
        ...item,
        like: item.like + 1,
      }));
    } else if (type === 'reset') {
      newList = list.map(item => ({
        ...item,
        like: 0,
      }));
    } else {
      newList = list.map(item => ({
        ...item,
        like: item.like > 0 ? item.like - 1 : 0,
      }));
    }
    setList(newList);
  };

  return (
    <Container>
      <View style={styles.row}>
        {topButtons.map((item, key) => {
          return (
            <View key={key} style={styles.topView}>
              <Button
                noBorder={item.noBorder}
                blue={item.blue}
                red={item.red}
                gapRight={key === topButtons.length - 1 ? 0 : 10}
                style={{height: 40}}
                title={item?.name}
                onPress={() => _handleTopButtons(item.id)}
              />
            </View>
          );
        })}
      </View>
      {list.map((item, key) => (
        <Card
          item={item}
          key={key}
          onPressLike={() => _handleLike(key)}
          onPressDislike={() => _handleDislike(key)}
        />
      ))}
    </Container>
  );
};

export default Home;
