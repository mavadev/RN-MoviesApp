import {ScrollView, Text, View} from 'react-native';
import {HiddenText} from '../../details';

interface Props {
  genres: string[];
  description: string;
}

export default function MovieDetails({genres, description}: Props) {
  return (
    <>
      {/* Descripción */}
      {description && (
        <View style={{padding: 20}}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 10,
              fontWeight: 'bold',
            }}>
            Descripción
          </Text>
          <HiddenText text={description} />
        </View>
      )}
      {/* Géneros de la Película */}
      <View style={{alignItems: 'center'}}>
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
      </View>
    </>
  );
}
