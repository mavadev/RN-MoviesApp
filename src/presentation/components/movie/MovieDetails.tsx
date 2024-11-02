import {Image, Text, View} from 'react-native';
import {Formatter} from '../../../config/helpers/formatter';

interface Props {
  title: string;
  poster: string;
  genres: string[];
  description: string;
  budget: number;
}

export default function MovieDetails({title, poster, genres, description, budget}: Props) {
  return (
    <View>
      {/* Poster */}
      <Image
        source={{uri: poster}}
        style={{
          aspectRatio: 11 / 17,
          height: 240,
          left: 30,
          top: -120,
          position: 'absolute',
          borderRadius: 5,
        }}
      />
      <Text
        style={{
          color: 'white',
          position: 'absolute',
          top: -60,
          right: 20,
          width: 200,
          aspectRatio: 16 / 9,
          fontSize: 20,
          backgroundColor: 'red',
        }}>
        Logo Película
      </Text>
      {/* Géneros de la Película */}
      <View
        style={{
          height: 110,
          marginLeft: 'auto',
        }}>
        <View style={{flexDirection: 'row', gap: 5}}>
          {genres.map((genre, index) => (
            <Text
              key={index}
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                backgroundColor: 'black',
                paddingVertical: 6,
                paddingHorizontal: 12,
                borderRadius: 10,
                color: 'white',
              }}>
              {genre}
            </Text>
          ))}
        </View>
      </View>
      {/* Descripción */}
      <View style={{padding: 20}}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
            fontWeight: 'bold',
          }}>
          Descripción
        </Text>
        <Text style={{fontSize: 16, lineHeight: 26}}>{description}</Text>
      </View>
      {/* Presupuesto
      <View style={{padding: 20}}>
        <Text
          style={{
            fontSize: 20,
            marginBottom: 10,
            fontWeight: 'bold',
          }}>
          Presupuesto
        </Text>
        <Text>{Formatter.currency(budget)}</Text>
      </View> */}
    </View>
  );
}
