// ===============================
// AUTHOR     : BIKASH KUMAR SAHU
// CREATE DATE     :05/11/2019
// PURPOSE     : Dashboard
// ===============================
// Change History:
//
//==================================
import React from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import { dashboardData } from '../actions'
import DashboardCell from './DashboardCell';

class Dashboard extends React.PureComponent {
    componentDidMount() {
        this.props.dashboardData()
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.navBar}>
                    <Text style={styles.navBarTitle}>Dashboard</Text>
                </View>

                <FlatList
                    data={this.props.dashData.user}
                    renderItem={({ item }) => <DashboardCell item={item}/>}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        )
    }
}
const mapStateToProps = ({ auth }) => {
    // email:auth.state.email;
    const { loading, dashData } = auth;
    return { loading, dashData };
}

export default connect(mapStateToProps, {
    dashboardData
})(Dashboard);

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    navBar: {
        width: '100%',
        height: 50,
        backgroundColor: '#af2e2f',
        justifyContent: 'center'
    },
    navBarTitle: {
        alignSelf: 'center',
        fontWeight: '400',
        color: '#fff',
        fontSize: 17
    }
})