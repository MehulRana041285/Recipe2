import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchContentInit, fetchContentRemote, navigateToScreen } from '../actions';

class ContentScreen extends Component {

    componentDidMount() {
        this.props.fetchContentInit();
        this.props.fetchContentRemote(this.props.item);
    }


    render() {
        console.log(this.props.page);
        return (
            <ScrollView style={styles.container}>
                <Text 
                    style={styles.contentTextStyle}
                >
                   Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </Text>
            </ScrollView>
        );
    }
}

const styles = {
    container: {
        padding: 5,
        backgroundColor: 'white',
    },
    contentTextStyle: {
        fontSize: 18,
        fontFamily: 'Roboto-Light',
        color: '#444444'
    }
};

const mapStateToProps = state => {
    return {
        content: state.home.content,
        page: state.navigation.page
    };
};

export default connect(mapStateToProps, {
    fetchContentInit,
    fetchContentRemote,
    navigateToScreen
})(ContentScreen);
