import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    return (
        <View style={styles.containerStyle}>
            <Text style={styles.textStyle}> {props.headerName} </Text>
        </View>
    );
};

const styles = {
    containerStyle: {
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f6f6f6',
        elevation: 4,
        shadowColor: '#000',
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 3 }
    },
    textStyle: {
        paddingTop: 15,
        fontSize: 18
    }
};

export { Header };
