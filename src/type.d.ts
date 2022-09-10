//creamos nuestros propios tipos
// export type Weather = 'sunny'| 'rainy' | 'cloudy' | 'windy' | 'stormy';
// export type Visibility = 'great' | 'good' | 'ok' | 'poor';


//es un objeto la cual va a recibir, esta pensada en extends(extenderse)
export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string
}

// export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility' >

export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>;

export type NewDiaryEntry = Omit<DiaryEntry,'id'>;