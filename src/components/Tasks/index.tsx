import React, { useState } from "react"
import { View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { styles } from "./styles"
import Icon from 'react-native-vector-icons/EvilIcons';

type Props = {
    task: string;
    onRemove: () => void;
    addFinished: () => void;
    removeFinished: () => void;
}

function Tasks({ task, onRemove, addFinished, removeFinished }: Props) {
    const [color, setColor] = useState('#1E6F9F')

    return (
        <View style={styles.todo}>
            <BouncyCheckbox
                size={20}
                fillColor={color}
                text={task}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontSize: 14, maxWidth: 260 }}
                onPress={(isChecked: boolean) => {
                    if (isChecked) {
                        addFinished()
                        return setColor('#8284FA')
                    }

                    if (!isChecked) {
                        removeFinished()
                        return setColor('#1E6F9F')
                    }
                }}
            />

            <Icon name="trash" size={30} onPress={onRemove} style={styles.trash} />
        </View>
    )
}

export { Tasks }