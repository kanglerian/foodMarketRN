import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Select, TextInput } from '../../components'
import React from 'react'

const SignUpAddress = ({ navigation }) => {
    return (
        <View style={styles.page}>
            <Header title="Address" subTitle="Make sure it’s valid" onBack={() => {}} />
            <View style={styles.container}>
                <TextInput label="Phone No." placeholder="Type your phone number.." />
                <Gap height={16} />
                <TextInput label="Address" placeholder="Type your address.." />
                <Gap height={16} />
                <TextInput label="House No." placeholder="Type your house number.." />
                <Gap height={16} />
                <Select label="City" />
                <Gap height={24} />
                <Button text="Continue" onPres={() => navigation.replace('SuccessSignUp')} />
            </View>
        </View>
    )
}

export default SignUpAddress

const styles = StyleSheet.create({
    scroll: {
        flex: 1
    },
    page: {
        flex: 1,
    },
    container: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 26,
        marginTop: 24,
        flex: 1,
    },
})