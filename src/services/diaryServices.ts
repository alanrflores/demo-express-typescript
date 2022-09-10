import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../type';
import diaryData from './diaries.json';



const diaries : DiaryEntry[] = diaryData as DiaryEntry[];

export const getEntries = (): DiaryEntry[] => diaries;

//hacemos un map recorro para que solo me traiga lo que yo quiero y no todo..
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        };
    });
};


//encontrar una entrada en concreto
export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find((d)=> d.id === id);
    if(entry){
        const { comment, ...restOfDiary } = entry;
        console.log(comment);
        return restOfDiary;
    }
    return undefined;
};

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry =>  {
  const newDiary = {
      id: Math.max(...diaries.map(d => d.id)) + 1,
      ...newDiaryEntry
  };
 diaries.push(newDiary);
 return newDiary;

};

// console.log(getEntriesWithoutSensitiveInfo())

// const diariesInfo = getEntriesWithoutSensitiveInfo()
// diariesInfo[0]