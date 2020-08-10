import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#f0f0f7',
    },

    teacherList:{
       marginTop: -40, 
  
    },

    searchForm:{
        marginBottom: 10,
    },

    label:{
        color: '#d4c2ff',
        fontFamily: 'Poppins_400Regular',
    },

    input:{
        height: 54,
        backgroundColor: '#FFF',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginBottom: 20,
    },

    inputGroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    
    inputBlock:{
        width: '48%',
    },

    submiteButton:{
        backgroundColor: '#04d361',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
    },
    submiteButtonText:{
        color: '#fff',
        fontFamily: 'Archivo_700Bold',
        fontSize: 16,
        marginLeft: 16
    },
})

export default styles;