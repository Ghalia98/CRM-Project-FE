import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import {connect} from "react-redux";
import {Button, TextInput} from "@react-native-material/core";
import * as actions from '../actions';

const styles = StyleSheet.create({
    form: {
        flex: 1,
        paddingTop: 50,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'space-between',
    },
    fieldStyles: {
        height: 70,
        color: '#f47100',
    },
    addButton: {
        marginTop: 20,
    }
})
class AddPerson extends Component {
    onAddPress () {
        const {firstName, lastName, phone, email, company, project, notes} = this.props;
        this.props.createNewContact({firstName, lastName, phone, email, company, project, notes});
        this.props.navigation.navigate('People');
    }
    render () {
        return (
            <ScrollView showsVeriticalScrollIndicator={false}>
                <View style={styles.form}>
                    <Text>Add a new contact</Text>
                    <TextInput
                        label={'First name...'}
                        styles={styles.fieldStyles}
                        value={this.props.firstName}
                        onChangeText={value => this.props.formUpdate({prop: 'firstName', value})}
                    />
                    <TextInput
                        label={'Last name...'}
                        styles={styles.fieldStyles}
                        value={this.props.lastName}
                        onChangeText={value => this.props.formUpdate({prop: 'lastName', value})}
                    />
                    <TextInput
                        label={'Phone number...'}
                        styles={styles.fieldStyles}
                        value={this.props.phone}
                        onChangeText={value => this.props.formUpdate({prop: 'phone', value})}
                    />
                    <TextInput
                        label={'Email...'}
                        styles={styles.fieldStyles}
                        value={this.props.email}
                        onChangeText={value => this.props.formUpdate({prop: 'email', value})}
                    />
                    <TextInput
                        label={'Company...'}
                        styles={styles.fieldStyles}
                        value={this.props.company}
                        onChangeText={value => this.props.formUpdate({prop: 'company', value})}
                    />
                    <TextInput
                        label={'Project...'}
                        styles={styles.fieldStyles}
                        value={this.props.project}
                        onChangeText={value => this.props.formUpdate({prop: 'project', value})}
                    />
                    <TextInput
                        label={'Notes...'}
                        styles={styles.fieldStyles}
                        value={this.props.notes}
                        onChangeText={value => this.props.formUpdate({prop: 'notes', value})}
                    />
                    <View style={styles.addButton}>
                        <Button title='Add' color='#4db6ac' onPress={this.onAddPress.bind(this)}/>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    const {firstName, lastName, phone, email, company, project, notes} = state;
    return {
        firstName, lastName, phone, email, company, project, notes
    };
}
export default connect(mapStateToProps, actions)(AddPerson);
