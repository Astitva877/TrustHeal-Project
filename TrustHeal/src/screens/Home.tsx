import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
const Home = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Upcoming', value: 'UPCOMING'},
    {label: 'Prescription Pending', value: 'PRESCRIPTION_PENDING'},
    {label: 'Completed', value: 'COMPLETED'},
    {label: 'Canceled', value: 'CANCELED'},
    {label: 'All Consultations', value: 'All Consultations'},
  ]);
  const handleNavigation = () => {
    navigation.navigate('DetailScreen', {
      type: value,
    });
  };
  return (
    <View style={styles.mainView}>
      <Text style={styles.labelText}>Consultation Type</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={() => handleNavigation()}
        placeholder="Select Consultation Status"
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainView: {flex: 1, alignItems: 'center'},
  labelText: {color: '#000000', fontSize: 18, fontWeight: 'bold'},
});
