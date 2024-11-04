import {Image, ScrollView, Text, View} from 'react-native';

interface Props {
  genres: string[];
  description: string;
  budget: number;
}

export default function MovieDetails({genres, description, budget}: Props) {
  return (
    <>
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
      {/* Géneros de la Película */}
      <ScrollView
        horizontal
        style={{
          paddingLeft: 20,
          marginBottom: 20,
          flexDirection: 'row',
        }}>
        {genres.map((genre, index) => (
          <Text
            key={index}
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              backgroundColor: 'black',
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 7,
              color: 'white',
              marginRight: 10,
            }}>
            {genre}
          </Text>
        ))}
      </ScrollView>
    </>
  );
}
