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
  const [idInterval, setIdInterval] = useState(undefined);
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
              uri: "https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_ets_2022_test01.mp3",
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
              clearInterval(idInterval);
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
    clearInterval(idInterval);
    const statusTime = await sound.getStatusAsync();
    sound.playFromPositionAsync(statusTime.positionMillis - 30000);
    runProgressBar();
  }

  async function plusTime() {
    clearInterval(idInterval);
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
    }, 1000);
    setIdInterval(id);
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
        <Pressable>
          <Text style={styles.speed}>1,0x</Text>
        </Pressable>
        <Text style={styles.time}>00:13:25 / {time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "maroon",
    height: "40%",
  },
  line: {
    width: "100%",
    height: 10,
    backgroundColor: "grey",
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
