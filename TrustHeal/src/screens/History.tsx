import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
} from 'react-native';
import {SearchBar} from '@rneui/themed';
import {DATA} from '../sampledata/SampleData';
import CustomCard from '../components/CustomCard';
import {TouchableOpacity} from 'react-native';
const History = () => {
  const [search, setSearch] = useState('');
  const [suggestion, setSuggestion] = useState(DATA);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const res = DATA.filter(item =>
        item.patientName.toLowerCase().includes(search.toLowerCase()),
      );
      if (DATA.length !== res.length) {
        setSuggestion(res);
      } else {
        setSuggestion(DATA);
      }
    }, 0);
    return () => clearTimeout(timeoutId);
  }, [search]);
  const renderItem = ({item}) => (
    <CustomCard
      consultationId={item.consultationId}
      consultationType={item.consultationType}
      doctorName={item.doctorName}
      photoPath={item.photoPath}
      slotDate={item.slotDate}
      slotEndTime={item.slotEndTime}
      slotStartTime={item.slotStartTime}
      clinicName={item.clinicName}
      clinicAddress={item.clinicAddress}
      specialization={item.specialization}
      patientName={item.patientName}
    />
  );
  const sortHandle = () => {
    const sortedData = DATA.sort((a, b) => {
      const aDate = new Date(`${a.slotDate}T${a.slotStartTime}`);
      const bDate = new Date(`${b.slotDate}T${b.slotStartTime}`);
      return aDate - bDate;
    });
    setSuggestion(sortedData);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      enabled={true}>
      <View style={styles.upperView}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={setSearch}
          value={search}
          containerStyle={styles.searchView}
        />
        <TouchableOpacity style={styles.sortView} onPress={() => sortHandle()}>
          <Text style={styles.sortText}>Sort</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 0.9}}>
        <FlatList
          data={suggestion}
          renderItem={renderItem}
          keyExtractor={item => item.consultationId}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default History;

const styles = StyleSheet.create({
  container: {flex: 1},
  upperView: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  searchView: {
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    width: '80%',
  },
  sortView: {
    height: '70%',
    width: '16%',
    backgroundColor: '#0080FF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sortText: {color: '#ffffff', fontSize: 16, fontWeight: 'bold'},
});
