import { DiaryEntry, NonSensitiveInfoDiaryEntry } from '../type';
import diaryData from './diaries.json';


const diaries : DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

//encontrar una entrada en concreto
export const findById = (id: number): DiaryEntry | undefined => {
    const entry = diaries.find((d)=> d.id === id)
    return entry 
}
//hacemos un map recorro para que solo me traiga lo que yo quiero y no todo..
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addEntry = (): undefined => undefined

// console.log(getEntriesWithoutSensitiveInfo())

// const diariesInfo = getEntriesWithoutSensitiveInfo()
// diariesInfo[0]