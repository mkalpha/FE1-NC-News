import axios from 'axios'

const BASE_URL = 'https://nc-knews-andrew-workman.herokuapp.com/api'

 export const getAllTopics = async () => {
    const { data } = await axios.get(`${BASE_URL}/topics`)
                                .catch(err => err)
                                return data.topics
}

export const postNewTopic = async (topicToPost) => {
    const { responce } = await axios.post(`${BASE_URL}/topics`, topicToPost)
                                    .catch(err => err)
                                    return responce
}

export const fetchArticles = async (topic, sortby) => {
   if (topic === 'all') topic = null
   const { data: { articles } } = await axios.get(`${BASE_URL}/articles`, {
    params: {
      sortby,
      topic,
    },
  })
   .catch(err => err)
    return  articles
}

export const postComment = async (commentToPost, article_id) => {
    const responce = await axios.post(`${BASE_URL}/articles/${article_id}/comments`, commentToPost)
                                .catch(err => err)
                                return responce
}

export const updateArticleVotes = async (patchBody) => {
    console.log(patchBody)
}
