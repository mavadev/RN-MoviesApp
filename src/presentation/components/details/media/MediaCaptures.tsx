import {FlatList, Image, StyleSheet} from 'react-native';
import type {MediaImage} from '../../../../core/entitites/media.entity';

interface Props {
  captures: MediaImage[];
}

export default function MovieCaptures({captures = []}: Props) {
  if (!captures.length) return <></>;

  return (
    <FlatList
      horizontal
      data={captures}
      style={{
        marginBottom: 20,
      }}
      showsHorizontalScrollIndicator={false}
      renderItem={({item: capture, index}) => (
        <Image
          source={{uri: capture.url}}
          style={{
            height: 150,
            marginRight: 10,
            marginLeft: index == 0 ? 20 : 0,
            aspectRatio: capture.asp_ratio,
          }}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({});
