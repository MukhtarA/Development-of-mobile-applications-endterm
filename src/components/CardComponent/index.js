import React, {useState, useCallback} from 'react';
import {View, Text, Image, Button, Pressable} from 'react-native';
import styles from './styles.js';
import {useNavigation} from '@react-navigation/native';

const Card = (props) => {
    const post = props.post;
    let [pressed, setPressed] = useState(false);

    const [isToggled, setIsToggled] = useState(false);

    const toggle = useCallback(
        () => setIsToggled(!isToggled),
        [isToggled, setIsToggled],
    );
    return (
        <View style={[styles.container, { display : isToggled ? 'none' : '' }]}>
        <View style={styles.innerContainer}>
            {/* Right side */}
            <View style={styles.rightSide}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Novosibirsk_KrasnyProspekt_bus_07-2016.jpg',
                    }}
                />

                <Text style={styles.busBrand}>Yourtang</Text>

                <Text style={styles.registrationNumber}>lol</Text>

                <Text style={styles.places}>32 места</Text>
            </View>

            {/* Left side */}
            <View style={styles.leftSide}>
                <Text style={styles.destination}>
                    Алматы - Астана
                </Text>

                <Text style={styles.sent}>
                    Отправление
                </Text>
                <Text style={styles.sentText}>
                    Дата - 06.02.2090 THU
                </Text>

                <Text style={styles.sentText}>
                    Время - 19:30
                </Text>
                <Text style={styles.return}>
                    Прибытие
                </Text>
                <Text style={styles.returnText}>
                    Дата - 07.02.2090 FRI
                </Text>

                <Text style={styles.returnText}>
                    Время - 18:36
                </Text>
            </View>
        </View>
            <View style={styles.deleteButton}>
                    <Button onPress={toggle} title={'Удалить рейс<'} color={'#000000'}/>
            </View>
        </View>

    );
};

export default Card;
