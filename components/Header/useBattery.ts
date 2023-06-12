// @ts-nocheck
"use-client";
import { useEffect, useState } from 'react';

export function useBattery() {
  const [state, setState] = useState({
    supported: true,
    loading: true,
    level: 0,
    charging: null,
  });

  useEffect(() => {
    if (!navigator.getBattery) {
      setState((state) => ({
        ...state,
        supported: false,
        loading: false
      }));
      return;
    }

    let battery = null;

    const handleChange = (b) => {
      setState({
        supported: true,
        loading: false,
        level: battery.level || 0,
        charging: battery.charging || false,
      });
    };

    navigator.getBattery().then((b) => {
      battery = b
      handleChange();

      b.addEventListener("levelchange", () => {
        handleChange(b)
      });
      b.addEventListener("chargingchange", () => {
        handleChange(b)
      });
    });

    return () => {
      if (battery) {
        battery.removeEventListener("levelchange", handleChange);
        battery.removeEventListener("chargingchange", handleChange);
      }
    };
  }, []);

  return state;
}