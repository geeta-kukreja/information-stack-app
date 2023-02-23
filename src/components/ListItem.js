import React , { Component } from 'react';
import { View , Text , TouchableWithoutFeedback , LayoutAnimation } from 'react-native';
import { CardSection } from './common';
import { selectLibrary } from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component{

    componentWillUpdate() {
        LayoutAnimation.spring(); 
    }

    renderDescription() {
        const { library , expanded } = this.props ;
        if( expanded )
        {
            return (
                <CardSection>
                    <Text>{ library.description }</Text>
                </CardSection>
            ) 
        }
    }

    render() {
        const { library } = this.props ;
        return(
            <TouchableWithoutFeedback
            onPress = { () => this.props.selectLibrary(library.id) }
            >
                <View>
                    <CardSection>
                        <Text>{ library.title }</Text>
                    </CardSection>
                    { this.renderDescription() }
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const mapStateToProps = ( state , ownProps ) => {
   const expanded = state.selectedLibraryId === ownProps.library.id;
   return { expanded };
};

export default connect(mapStateToProps , { selectLibrary } )(ListItem);