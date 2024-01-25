// useLectures.js

import { useState, useEffect } from "react";

export const useLectures = () => {
  const lecturesKey = "lectures";
  const [allLectures, setAllLectures] = useState<any[]>([]);

  useEffect(() => {
    // Fetch lectures from local storage on component mount
    const lectures =
      typeof window !== "undefined"
        ? JSON.parse(localStorage.getItem(lecturesKey) || "[]")
        : [];

    setAllLectures(lectures);
  }, []);

  const updateLectures = (updatedLectures: any) => {
    // Update local storage with the modified array
    localStorage.setItem(lecturesKey, JSON.stringify(updatedLectures));

    // Update state to trigger re-render
    setAllLectures([...updatedLectures]); // Spread the array to create a new reference
  };

  return { allLectures, updateLectures };
};
