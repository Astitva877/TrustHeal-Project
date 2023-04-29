import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

interface propTypes {
  consultationId: string;
  doctorName: string;
  consultationType: string;
  photoPath: string;
  slotDate: string;
  slotStartTime: string;
  slotEndTime: string;
  clinicName?: string;
  clinicAddress?: string;
  specialization: any;
  patientName?: string;
}

const CustomCard = (props: propTypes) => {
  let sp1 = props.specialization[0];
  let sp2 = props.specialization[1];
  return (
    <View style={styles.container}>
      <View style={styles.upperView}>
        <View style={styles.imageView}>
          <Image
            style={styles.logo}
            source={{
              uri: props.photoPath,
            }}
          />
        </View>
        <View style={styles.infoView}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000000'}}>
            Doctor Name: {props.doctorName}
          </Text>
          <Text style={{fontSize: 14, color: '#000000'}}>
            Specialization: {sp1} {sp2}
          </Text>
          <Text style={{fontSize: 14, color: '#000000'}}>
            Type: {props.consultationType}
          </Text>
          <Text style={{fontSize: 12, color: '#000'}}>
            Date: {props.slotDate} From {props.slotStartTime} to{' '}
            {props.slotEndTime}
          </Text>
          <Text style={{fontSize: 12, color: '#000'}}>
            Patient: {props.patientName}
          </Text>
          <Text style={{fontSize: 14, color: '#000000'}}>
            {props.clinicName} {props.clinicAddress}
          </Text>
        </View>
      </View>
      <View style={styles.lowerView}>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Prescription</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>History</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Invoices</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Rating</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '96%',
    height: 170,
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    marginBottom: 14,
    marginTop: 14,
    marginLeft: 5,
  },
  logo: {
    width: '94%',
    height: '100%',
    borderRadius: 8,
  },
  buttonStyle: {
    height: '76%',
    width: '30%',
    backgroundColor: '#2E9AFE',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {color: '#ffffff', fontSize: 14},
  buttonView: {
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  lowerView: {height: '30%', width: '100%'},
  upperView: {
    height: '70%',
    width: '100%',
    flexDirection: 'row',
  },
  imageView: {
    height: '100%',
    width: '25%',
    justifyContent: 'center',
  },
  infoView: {
    height: '100%',
    width: '75%',
    justifyContent: 'space-evenly',
  },
});

export default CustomCard;
