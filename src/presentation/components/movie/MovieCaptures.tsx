import {FlatList, Image, StyleSheet} from 'react-native';
import type {MovieImage} from '../../../core/entitites/movie.entity';

interface Props {
  captures: MovieImage[];
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
      renderItem={({item: capture, index}) => (
        <Image
          source={{uri: capture.url}}
          style={{
            height: 120,
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
