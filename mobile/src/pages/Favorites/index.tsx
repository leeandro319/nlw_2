import React,{useState, useEffect} from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStoreage from '@react-native-community/async-storage';
import {useFocusEffect} from '@react-navigation/native'


import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './style';

function Favoristes(){
    const [favorites, setFavorites] = useState([]);

    function loadFavorites(){
        AsyncStoreage.getItem('favorites').then(response=>{
            if(response){
                const favoritedTeachers = JSON.parse(response);
                setFavorites(favoritedTeachers);
            }
        });
    }

    useFocusEffect(()=>{
        loadFavorites();
    })

    return(
        <View style={styles.container}>
            <PageHeader title="Meus Proffys Favoritos"/>
            <ScrollView style={styles.teacherList}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}>
                {favorites.map((teacher:Teacher) => {
                    return <TeacherItem key={teacher.id}
                                        teacher={teacher}
                                        favorited
                    />
                })}

            </ScrollView>
        </View>
    )
}

export default Favoristes;