import React from 'react';
import { View } from 'react-native';
import PageHeader from '../../conponents/PageHeader';

import styles from './style'

function TeacherList(){
    return(
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis"/>
        </View>
    )
}

export default TeacherList;