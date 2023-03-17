import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        flex: 1
    },

    logo: {
        width: '100%',
        backgroundColor: '#0D0D0D',
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 70,

    },

    inputContainer: {
        flexDirection: 'row',
        width: '90%',
        alignItems: 'center',
        marginTop: -30,
    },

    input: {
        height: 52,
        backgroundColor: '#262626',
        borderRadius: 5,
        flex: 1,
        padding: 15,
        marginRight: 5,
        color: '#FFF',
        fontSize: 15
    },

    inputButton: {
        width: 52,
        height: 52,
        borderRadius: 5,
        backgroundColor: '#1E6F9F',
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        fontSize: 20,
        color: '#FFF',
    },

    menu: {
        flexDirection: 'row',
        width: '90%',
        justifyContent: 'space-between',
        marginTop: 25,
        marginBottom: 8
    },

    menuOption: {
        flexDirection: 'row',
        marginBottom: 10
    },

    created: {
        color: '#1E6F9F',
        fontWeight: 'bold',
        marginRight: 10
    },

    finished: {
        color: '#8284FA',
        fontWeight: 'bold',
        marginRight: 10
    },

    total: {
        color: '#FFF',
        height: 20,
        width: 28,
        backgroundColor: '#262626',
        borderRadius: 15,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    taskContainer: {
        width: '90%'
    },

    emptyContainer: {
        alignItems: 'center'
    },

    marginLine: {
        width: '100%',
        borderWidth: 0.6,
        borderColor: '#333333',
        margin: 10,
        flex: 1,
        marginBottom: 65
    },

    imageEmpty: {
        marginBottom: 35
    },

    firstText: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },

    text2: {
        color: '#FFF',
        fontWeight: '200',
        fontSize: 15
    },

    flatListContainer: {
        height: '70%'
    }
})

export { styles }