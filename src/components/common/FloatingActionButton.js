import React, { Component } from 'react';
import { Button } from 'react-native-elements';

class FloatingActionButton extends Component {
    render() {
        return (
            <Button
                raised
                backgroundColor='#ff0000'
                buttonStyle={styles.buttonStyle}
                icon={{ name: 'plus', color: '#ffffff', type: 'font-awesome' }}
                onPress={this.props.onPress}
            />
        );
    }
}

const styles = {
    buttonStyle: {
        height: 50,
        width: 50,
        borderRadius: 50,
        borderWidth: 50,
    }
};

export { FloatingActionButton };
