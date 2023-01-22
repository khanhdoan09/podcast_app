import { View, Text, Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { useState, useEffect } from "react";

function Play({ time, linkAudio }) {
  const [audioStatus, setAudioStatus] = useState(false);
  const [sound, setSound] = useState();
  const [isLoadAudio, setIsLoadAudio] = useState(false);
  const [positionTargetInProgressBar, setPositionTargetInProgressBar] =
    useState(0);
  const [idIntervalProgressBar, setIntervalProgressBar] = useState(undefined);
  const [currentTimePlay, setCurrentTimePlay] = useState(undefined);
  const [currentSpeed, setCurrentSpeed] = useState(1);
  const [readyToLoadAudio, setReadyToLoadAudio] = useState(false);

  useEffect(() => {
    (async () => {
      // run on background
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });
      setSound(new Audio.Sound());
      setReadyToLoadAudio(true);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if (audioStatus && readyToLoadAudio) {
          if (!isLoadAudio) {
            setIsLoadAudio(true);
            await sound.loadAsync({
              uri: linkAudio,
            });
            await sound.playAsync();
          } else {
            sound.setStatusAsync({ shouldPlay: true });
          }
          runProgressBar();
        } else {
          if (readyToLoadAudio) {
            const status = await sound?.getStatusAsync();
            if (status.isLoaded) {
              clearInterval(idIntervalProgressBar);
              await sound.pauseAsync();
            }
          }
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [audioStatus]);

  async function reduceTime() {
    clearInterval(idIntervalProgressBar);
    const statusTime = await sound.getStatusAsync();
    sound.playFromPositionAsync(statusTime.positionMillis - 30000);
    runProgressBar();
  }

  async function plusTime() {
    clearInterval(idIntervalProgressBar);
    const statusTime = await sound.getStatusAsync();
    sound.playFromPositionAsync(statusTime.positionMillis + 30000);
    runProgressBar();
  }

  function runProgressBar() {
    const id = setInterval(async () => {
      const statusTime = await sound.getStatusAsync();
      const currentTime =
        (statusTime.positionMillis / statusTime.durationMillis) * 100;
      setPositionTargetInProgressBar(currentTime);
      setCurrentTimePlay(convertMsToTime(statusTime.positionMillis));
    }, 1000);
    setIntervalProgressBar(id);
  }

  function padTo2Digits(num) {
    return num.toString().padStart(2, "0");
  }

  function convertMsToTime(milliseconds) {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;
    hours = hours % 24;

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
      seconds
    )}`;
  }

  async function speedUp() {  
    switch (currentSpeed) {
      case 1:
        setCurrentSpeed(1.5);
        sound.setRateAsync(1.5, true);
        break;
      case 1.5:
        setCurrentSpeed(2);
        sound.setRateAsync(2, true);
        break;  
      case 2:
        setCurrentSpeed(0.5);
        sound.setRateAsync(0.5, true);
        break;
      case 0.5:
        setCurrentSpeed(1);
        sound.setRateAsync(1, true);
        break;     
      default:
        setCurrentSpeed(1);
        sound.setRateAsync(1, true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <View
          style={[
            styles.line_active,
            { width: positionTargetInProgressBar + 10 + "%" },
          ]}
        >
          <View style={styles.milestone}></View>
        </View>
      </View>
      <View style={styles.container_button}>
        <Pressable onPress={reduceTime}>
          <MaterialCommunityIcons name="rewind-30" size={40} color="white" />
        </Pressable>
        <Pressable
          style={styles.button_play}
          onPress={() => setAudioStatus(!audioStatus)}
        >
          {audioStatus ? (
            <FontAwesome5 name="pause-circle" size={70} color="white" />
          ) : (
            <AntDesign name="playcircleo" size={70} color="white" />
          )}
        </Pressable>
        <Pressable onPress={plusTime}>
          <MaterialCommunityIcons
            name="fast-forward-30"
            size={40}
            color="white"
          />
        </Pressable>
      </View>
      <View style={styles.container_time}>
        <Pressable onPress={speedUp}>
          <Text style={styles.speed}>{currentSpeed}x</Text>
        </Pressable>
        <Text style={styles.time}>
          {currentTimePlay || "00:00:00"} / {time}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(128, 128, 128)",
    height: "40%",
  },
  line: {
    width: "100%",
    height: 10,
    backgroundColor: "rgb(230, 230, 230)",
  },
  line_active: {
    height: 10,
    backgroundColor: "white",
    elevation: 5,
    padding: 0,
    margin: 0,
    position: "relative",
  },
  milestone: {
    height: 40,
    width: 40,
    right: "0%",
    borderRadius: 100,
    backgroundColor: "white",
    position: "absolute",
    top: "-120%",
    elevation: 5,
    padding: 0,
    margin: 0,
  },
  container_button: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
  button_play: {
    marginHorizontal: 85,
  },
  container_time: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
  },
  speed: {
    color: "white",
    fontSize: 20,
  },
  time: {
    color: "white",
    fontSize: 20,
    marginHorizontal: 50,
  },
});
export default Play;
