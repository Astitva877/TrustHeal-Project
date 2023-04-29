import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import CustomCard from '../components/CustomCard';
import {DATA} from '../sampledata/SampleData';
const DetailScreen = ({route}) => {
  const [medium, setMedium] = useState('');
  const {type} = route.params;
  const [mainData, setMainData] = useState([]);
  const [newData, setNewData] = useState([]);
  useEffect(() => {
    console.log(type);
    const temp: object[] = [];
    DATA.forEach(item => {
      if (item.consultationStatus === type || type === 'All Consultations') {
        temp.push(item);
      }
    });
    setMainData(temp);
  }, []);
  useEffect(() => {
    const temp: object[] = [];
    mainData.forEach(item => {
      if (item.consultationType === medium) {
        temp.push(item);
      }
    });
    setNewData(temp);
  }, [medium]);
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
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <Text style={styles.headingText}>{type}</Text>
      </View>
      <View style={styles.topView}>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '25%',
            height: '60%',
            borderWidth: 1,
            borderColor: medium === 'VIDEO_CALL' ? '#40FF00' : '#000000',
            backgroundColor: '#ffffff',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setMedium('VIDEO_CALL')}>
          <Text>Video Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '25%',
            height: '60%',
            borderWidth: 1,
            borderColor: medium === 'PHONE_CALL' ? '#40FF00' : '#000000',
            backgroundColor: '#ffffff',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setMedium('PHONE_CALL')}>
          <Text>Phone Call</Text>
        </TouchableOpacity>
        <TouchableOpacity
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: '25%',
            height: '60%',
            borderWidth: 1,
            borderColor: medium === 'PHYSICAL' ? '#40FF00' : '#000000',
            backgroundColor: '#ffffff',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => setMedium('PHYSICAL')}>
          <Text>Physical</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.lowerView}>
        <FlatList
          data={medium === '' ? mainData : newData}
          renderItem={renderItem}
          keyExtractor={item => item.consultationId}
        />
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperView: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  headingText: {fontSize: 22, fontWeight: 'bold', color: '#000000'},
  topView: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  lowerView: {flex: 0.8, alignItems: 'center'},
});
