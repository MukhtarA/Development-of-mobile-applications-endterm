import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        borderColor: '#838282',
        borderWidth: 2,
        marginVertical: 5
    },
    innerContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 20,
    },
    leftSide: {
        margin: 10,
    },
    rightSide: {
        fontSize: 18,
        lineHeight: 26,
    },
    busBrand: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    registrationNumber: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666666'
    },
    places: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666666'
    },
    destination: {
        fontSize: 20,
        color: '#727272',
    },
    sent: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#5a5a5a',
        textAlign: 'center',
    },
    sentText: {
        color: '#727272',
        paddingVertical: 3,
    },
    return: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#5a5a5a',
        textAlign: 'center',
    },
    returnText: {
        color: '#727272',
        paddingVertical: 3,
    },
    deleteButton: {
        backgroundColor: '#f6c0c0',
        textAlign: 'center',
        borderBottomEndRadius: 18,
        borderBottomStartRadius: 18,
    }
});

export default styles;
