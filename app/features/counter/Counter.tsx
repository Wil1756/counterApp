import React,{useState} from 'react';
import {View, Text,Button, TextInput, StyleSheet } from 'react-native'
import type { AppDispatch, RootState } from '@/app/store';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, incrementAsync, selectCount } from './counterSlice';
import styles from './styles'

export function Counter() {
    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch<AppDispatch>();
    const [incrementAmount, setIncrementAmount] = useState('10');

    return (
        
        <View style={styles.container}>
            <View style={styles.row}>
                <Button
                    title="+"
                    onPress={() => dispatch(increment())}
                    // style={styles.button}
                    accessibilityLabel="Increment value"
                />
                <Text style={styles.value}>{count}</Text>
                <Button
                    title="-"
                    onPress={() => dispatch(decrement())}
                    // style={styles.button}
                    accessibilityLabel="Decrement value"
                />
            </View>
            <View style={styles.row}>
                <TextInput
                    style={styles.textbox}
                    value={incrementAmount}
                    onChangeText={(text) => setIncrementAmount(text)}
                    keyboardType="numeric"
                    accessibilityLabel="Set increment amount"
                />
                <Button
                    title="Add Amount"
                    onPress={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
                    // style={styles.button}
                />
                <Button
                    title="Add Async"
                    onPress={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
                    // style={styles.asyncButton}
                />
            </View>
        </View>
    )
};



export default Counter;
