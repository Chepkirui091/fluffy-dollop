import {Text, View} from "react-native";
import {useState} from "react";
import TabButton from "../../components/Button/tab-button";


const Wallet = () => {

    const [selectedTab, setSelectedTab] = useState("Tab1");

    const buttons= [{title: 'tab 1'}, {title: 'tab 2'}];

    return (
        <>
            <View>
                <TabButton buttons={buttons} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            </View>
        </>
    )
}

export default Wallet