import { DiaryEntry } from '../type';
import diaryData from './diaries.json';


const diaries : Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = () => diaryData;

export const addEntry = () => null;

