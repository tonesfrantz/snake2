import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from '../styles/colors';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
interface HeaderProp {
    reloadGame: () => void;
    pauseGame: () => void;
    children: JSX.Element;
    isPaused: Boolean;
}

export default function Header({
    children,
    reloadGame,
    pauseGame,
    isPaused,
}: HeaderProp): JSX.Element {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={reloadGame}>
                <Ionicons
                    name='reload-circle'
                    size={35}
                    color={Colors.primary}
                />
            </TouchableOpacity>

            <TouchableOpacity onPress={pauseGame}>
                <FontAwesome
                    name={isPaused ? 'play-circle' : 'pause-circle'}
                    size={35}
                    color={Colors.primary}
                />
            </TouchableOpacity>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0.05,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: Colors.primary,
        borderWidth: 12,
        borderTopEndRadius: 30,
        borderBottomRightRadius: 30,
        borderBottomWidth: 0,
        padding: 15,
        backgroundColor: Colors.background,
    },
});
