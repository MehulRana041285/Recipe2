import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { onCheckBoxChanged } from '../../actions';


class IngredientItem extends Component {
    state = { checked: false };

    onCheckChangeListener() {
        if (this.state.checked) {
            this.props.onCheckBoxChanged(this.props.uid, this.props.itemId, 'pop');
        } else {
            this.props.onCheckBoxChanged(this.props.uid, this.props.itemId, 'push');
        }
        
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        const { textStyle, container, lineStyle, ingredientLayoutStyle } = styles;
        const { title } = this.props;
            return (
                
                <View>
                    <TouchableOpacity
                        onPress={this.onCheckChangeListener.bind(this)}
                    >
                    <View style={ingredientLayoutStyle}>
                    <CheckBox
                        checked={this.state.checked}
                        iconType='material' 
                        uncheckedIcon='radio-button-unchecked'
                        checkedIcon='check-circle'
                        checkedColor='#27ae60'
                        containerStyle={container}
                        textStyle={textStyle}
                        onPress={this.onCheckChangeListener.bind(this)}
                        fontFamily="Roboto-Light"
                    />
                    <Text style={textStyle}>{title}</Text>
                    
                    </View>
                    </TouchableOpacity>
                   
                  
                    <View style={lineStyle} />
                </View>
                    
        );
    }
    
}

const styles = {
    ingredientLayoutStyle: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center'
    },
    container: {
        backgroundColor: 'white',
        borderWidth: 0,
        flex: 0.1
    },
    lineStyle: {
        height: 1,
        width: null,
        backgroundColor: '#ddd',
        marginTop: 5,
    },
    
    textStyle: {
        fontSize: 16,
        fontFamily: 'Roboto-Light',
        flex: 0.9,
        color: '#444444'
        
    }
};

const mapStateToProps = state => {
    return {
        items: state.checkedItems.items,
    }; 
};

export default connect(mapStateToProps, { onCheckBoxChanged })(IngredientItem);

