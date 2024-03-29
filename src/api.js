import axios from 'axios';

const BASE_URL = 'https://ncknews-production.up.railway.app/api'

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
   if (topic === 'all' || topic === 0) topic = null
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

export const fetchSingleArticle = async (article_id) => {
  const response = await axios.get(`${BASE_URL}/articles/${article_id}`)
                              .catch(err => {
                                throw err.response.data.status
                              })
                              return response
}

export const removeArticle = async (article_id) => {
  const remove = await axios.delete(`${BASE_URL}/articles/${article_id}`)
                            .catch(err => err)
                            return remove
}

export const removeComment = async (comment_id) => {
  const remove = await axios.delete(`${BASE_URL}/comments/${comment_id}`)
                            .catch(err => err)
                            return remove
}

export const postArticle = async (articleToPost) => {
  const newArticle = await axios.post(`${BASE_URL}/articles`, articleToPost)
                            .catch(err => err)
                            return newArticle
}
