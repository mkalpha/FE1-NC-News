import axios from 'axios'

const BASE_URL = 'https://nc-knews-andrew-workman.herokuapp.com/api/'

 export const getAllTopics = async () => {
    const { data } = await axios.get(`${BASE_URL}topics`)
                                .catch(err => err)
                                return data.topics
}

export const postNewTopic = async (topicToPost) => {
    const { responce } = await axios.post(`${BASE_URL}topics`, topicToPost)
                                    .catch(err => err)
                                    return responce
}