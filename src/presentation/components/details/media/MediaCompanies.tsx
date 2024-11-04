import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Company} from '../../../../core/entitites/media.entity';

interface Props {
  companies: Company[];
}

const CompanyImage = ({first, company}: {first: boolean; company: Company}) => (
  <Image
    width={120}
    source={{uri: company.logo!}}
    style={{
      ...styles.company,
      marginLeft: first ? 20 : 10,
    }}
  />
);

export default function MediaCompanies({companies}: Props) {
  if (!companies.length) return <></>;

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <View style={styles.titleLine} />
        <Text style={styles.titleText}>Productora{companies.length > 1 ? 's' : ''}</Text>
      </View>
      <View style={styles.containerList}>
        <FlatList
          horizontal
          data={companies}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          renderItem={({item: company, index}) =>
            company.logo ? <CompanyImage first={index == 0} company={company} /> : <></>
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    rowGap: 20,
    marginTop: 10,
    marginBottom: 20,
    borderBottomWidth: 5,
    borderColor: '#141414',
  },
  containerTitle: {
    position: 'relative',
    alignItems: 'center',
  },
  titleLine: {
    position: 'absolute',
    inset: 0,
    top: '50%',
    borderTopWidth: 5,
    borderColor: '#141414',
  },
  titleText: {
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: 'bold',
    color: '#141414',
    textAlign: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    textTransform: 'uppercase',
  },
  containerList: {
    marginBottom: 20,
    alignItems: 'center',
  },
  company: {
    height: 100,
    maxWidth: 120,
    objectFit: 'contain',
    marginHorizontal: 10,
  },
});
