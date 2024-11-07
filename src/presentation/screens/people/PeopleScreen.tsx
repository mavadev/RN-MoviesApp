import {useCallback, useState} from 'react';
import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';

import {usePeople} from '../../hooks/usePeople';
import {ButtonBack} from '../../components/ui';
import {PeopleHeader, PeopleItem} from '../../components/people';

export default function PeopleScreen() {
  const [page, setPage] = useState(1);
  const {isLoading, persons, totalPages} = usePeople(page);

  const loadNextPage = useCallback(() => {
    if (!isLoading && page < totalPages!) {
      setPage(prevPage => prevPage + 1);
    }
  }, [isLoading, page, totalPages]);

  const renderFooter = () => {
    return isLoading ? <ActivityIndicator size="large" color="gray" /> : null;
  };

  return (
    <View>
      <ButtonBack position="relative" />
      <FlatList
        data={persons}
        numColumns={3}
        contentContainerStyle={styles.listStyle}
        columnWrapperStyle={styles.columnsStyle}
        keyExtractor={person => person.id.toString()}
        ListHeaderComponent={PeopleHeader}
        renderItem={({item: person}) => <PeopleItem person={person} />}
        ListFooterComponent={renderFooter}
        onEndReachedThreshold={1}
        onEndReached={loadNextPage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listStyle: {
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  columnsStyle: {
    columnGap: 10,
    marginBottom: 20,
  },
});
