import { ImageBackground, Text, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import React, { useEffect, useRef, useState } from 'react';
import moment from 'moment';

import styles from './styles';
import globalStyles from '../../../styles/globalStyles';

import { BackBlockTimerPng } from '../../../assets/back';

const TimerScreen = () => {
	const NumberAnim = ({
		component,
		updatePlayAnim = null,
		updateNum = '00',
		anim = 'flipInX',
		iterationCount = 1,
	}) => {
		return (
			<Animatable.View
				animation={anim}
				duration={1000}
				iterationCount={iterationCount}
				style={globalStyles.shadow}
				onAnimationEnd={() => {
					if (updatePlayAnim && iterationCount !== 'infinite') {
						updatePlayAnim(
							<Numbers
								num={updateNum}
								style={globalStyles.shadow}
							/>,
						);
					}
				}}
			>
				{component}
			</Animatable.View>
		);
	};

	const Numbers = ({ num, style = null }) => {
		return (
			<ImageBackground
				style={[styles.numberContainer, style]}
				source={BackBlockTimerPng}
				resizeMode='cover'
			>
				<Text style={styles.numberTimer}>{num}</Text>
			</ImageBackground>
		);
	};

	const [Hours, setHours] = useState(<Numbers num={'00'} />);
	const [Minutes, setMinutes] = useState(<Numbers num={'00'} />);
	const [Seconds, setSeconds] = useState('00');

	const timeRemaining = useRef({
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			const endOfDay = moment().endOf('day');
			const duration = moment.duration(endOfDay.diff(moment()));

			const timeRemainingNew = {
				hours: Math.floor(duration.asHours())
					.toString()
					.padStart(2, '0'),
				minutes: duration.minutes().toString().padStart(2, '0'),
				seconds: duration.seconds().toString().padStart(2, '0'),
			};

			if (timeRemainingNew.hours != timeRemaining.current.hours) {
				setHours(
					<NumberAnim
						component={<Numbers num={timeRemainingNew.hours} />}
						updatePlayAnim={setHours}
						updateNum={timeRemainingNew.hours}
					/>,
				);
			}

			if (timeRemainingNew.minutes != timeRemaining.current.minutes) {
				setMinutes(
					<NumberAnim
						component={<Numbers num={timeRemainingNew.minutes} />}
						updatePlayAnim={setMinutes}
						updateNum={timeRemainingNew.minutes}
					/>,
				);
			}

			setSeconds(timeRemainingNew.seconds);

			timeRemaining.current = timeRemainingNew;
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return (
		<View style={styles.timerContainer}>
			{Hours}
			<Text style={styles.pointsTimer}>:</Text>
			{Minutes}
			<Text style={styles.pointsTimer}>:</Text>
			<NumberAnim
				component={<Numbers num={Seconds} />}
				// iterationCount={'infinite'}
				// анимация начинается каждый раз заного и всего 1 раз для правильной сихронизации
			/>
		</View>
	);
};

export default TimerScreen;
