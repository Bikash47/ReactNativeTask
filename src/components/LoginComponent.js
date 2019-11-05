// ===============================
// AUTHOR     : BIKASH KUMAR SAHU
// CREATE DATE     :05/11/2019
// PURPOSE     : Login
// ===============================
// Change History:
//
//==================================

import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { emailChanged, passwordChange, onLogin } from '../actions'
import { connect } from 'react-redux';
import { validateUserNameAndPassword } from '../business/LoginBusiness';


class ReduxSample extends Component {

    
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPaswordChange(text) {
        this.props.passwordChange(text);
    }

    onLoginPress() {
        const { email, password } = this.props;
        let isValidate = validateUserNameAndPassword(email, password);
        isValidate == true ? this.props.onLogin(email, password) : Alert.alert("", isValidate);

    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.dialogContainer}>
                    <Text
                        style={{
                            color: "#000",
                            fontWeight: "bold",
                            fontSize: 20,
                            marginTop: 20
                        }}
                    >
                        Log In
          </Text>

                    <View
                        style={{
                            marginTop: 30,
                            width: "100%",
                            alignItem: "center",
                            justifyContent: "center"
                        }}
                    >
                        <Text style={styles.loginFieldtitle}>User Name</Text>
                        <TextInput
                            value={this.props.email}
                            onChangeText={uEmail => this.onEmailChange(uEmail)}
                            placeholder={"Username"}
                            style={styles.input}
                        />
                        <Text style={styles.loginFieldtitle}>Password</Text>
                        <TextInput
                            value={this.props.password}
                            onChangeText={uPassword => this.onPaswordChange(uPassword)}
                            placeholder={"Password"}
                            secureTextEntry={true}
                            style={styles.input}
                        />

                        {this.props.loading ? (
                            <ActivityIndicator size="large" color="#a82b2d" />
                        ) : (
                                <TouchableOpacity
                                    style={styles.loginButton}
                                    onPress={() => this.onLoginPress()} //Actions.TrainingTrackingForm()
                                >
                                    <Text
                                        style={{
                                            color: "#fff",
                                            textAlign: "center",
                                            fontSize: 15,
                                            fontWeight: "bold"
                                        }}
                                    >
                                        Log In
                </Text>
                                </TouchableOpacity>
                            )}

                    </View>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({ auth }) => {
    // email:auth.state.email;
    const { email, password, loading } = auth;
    return { email, password, loading };
}

export default connect(mapStateToProps, {
    emailChanged,
    passwordChange,
    onLogin,
})(ReduxSample);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#af2e2f"
    },
    input: {
        width: "100%",
        height: 44,
        padding: 10,
        borderWidth: 0.5,
        borderColor: "#ccc",
        borderRadius: 5,
        marginBottom: 10,
        marginTop: 6
    },
    dialogContainer: {
        backgroundColor: "#fff",
        width: "95%",
        height: 350,
        elevation: 10,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10
    },
    loginFieldtitle: { color: "#686868", fontWeight: "bold", fontSize: 13 },
    loginButton: {
        backgroundColor: "#ac4051",
        width: "100%",
        height: 40,
        marginTop: 5,
        borderWidth: 0.5,
        borderColor: "#ac4051",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    }
});