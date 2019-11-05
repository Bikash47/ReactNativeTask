// ===============================
// AUTHOR     : BIKASH KUMAR SAHU
// CREATE DATE     :05/11/2019
// PURPOSE     : Render Dashboard cell item 
// ===============================
// Change History:
//
//==================================

import React from 'react';
import { View, FlatList, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
export default class DashboardCell extends React.PureComponent {
    render() {

        const { name, email, gender, phoneNo, age } = this.props.item;
        return (
            <View style={styles.container}>
                <Image
                    style={styles.image_style}
                    source={{ uri: 'https://images.ctfassets.net/tfws0ki30xlo/12MLllfLcqGuMMY4YywYOq/2b780a173a9851b0804b2296609d97d1/build-page.jpg?w=1115&h=627&q=90&fit=thumb&f=top' }}
                />
                <View style={styles.text_container}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.sub_title}>{email}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%", height: 200, flexDirection: 'row', marginBottom: 5
    },
    image_style:
        { width: "100%", height: 200, position: 'absolute' },

    text_container: {
        flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', alignSelf: 'flex-end'
    },
    title: { color: 'white', fontSize: 20, margin: 6 },
    sub_title:{ color: 'white', margin: 6 }
})