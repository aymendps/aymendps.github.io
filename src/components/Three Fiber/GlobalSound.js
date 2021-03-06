import { useLoader, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { AudioListener, AudioLoader } from "three";

/* eslint-disable */

function GlobalSound({ url, volume }) {
  const sound = useRef();
  const { camera } = useThree();
  const [listener] = useState(() => new AudioListener());
  const buffer = useLoader(AudioLoader, url);

  useEffect(() => {
    sound.current.setBuffer(buffer);
    sound.current.setLoop(true);
    sound.current.play();
    sound.current.setVolume(volume);
    camera.add(listener);
    return () => camera.remove(listener);
  }, []);

  return <audio vol ref={sound} args={[listener]} />;
}

export default GlobalSound;
