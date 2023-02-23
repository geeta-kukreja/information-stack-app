import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.viewStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    viewStyle: {
        borderWidth: 2,
        borderRadius: 5,
        borderColor: '#000',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    }
};

export { Card };
