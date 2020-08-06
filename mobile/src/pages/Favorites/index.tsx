import React from 'react';
import { View } from 'react-native';

import PageHeader from '../../conponents/PageHeader';

import styles from './style';

function Favoristes(){
    return(
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos"/>
        </View>
    )
}

export default Favoristes;