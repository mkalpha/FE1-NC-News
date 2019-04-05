import axios from 'axios'

const getAllTopics = async () => {
    const { data } = await axios.get('https://nc-knews-andrew-workman.herokuapp.com/api/topics')
                                .catch(err => err)
                                return data.topics
}

export default getAllTopics