import axios from "axios";

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    timeout: 10000,
    headers: {'Accept': '*/*', 'Content-Type': 'application/json' }
});

//리스트 가져오기
export const getVideosApi = (num: number) => {
    return instance({
        url: `/videos?part=snippet&chart=mostPopular&maxResults=${num}&key=${process.env.NEXT_PUBLIC_API_KEY}`,
        method: 'get',
    })
}

export const getRelatedVideosApi = (num: number) => {
    return instance({
        url: `/playlistItems?part=snippet&playlistId=PLNtacGJ85ypS21-MbOARTlL6BvOFMEDLI&maxResults=${num}&key=${process.env.NEXT_PUBLIC_API_KEY}`,
        method: 'get',
    })
}

