const baseUrl = 'http://localhost:3001';

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'application/json'
}

// Categories
export const fetchCategories = () =>
  fetch(`${baseUrl}/categories`, { headers })
    .then(res => res.json())
    .then(data => data)

export const fetchCategoryPosts = (category) =>
  fetch(`${baseUrl}${category}`, { headers })
    .then(res => res.json())
    .then(data => data)


// Posts
export const fetchAllPosts = () =>
  fetch(`${baseUrl}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

// Comments
export const fetchPostComments = (postId) =>
  fetch(`${baseUrl}/posts/${postId}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

// Vote Score
export const updateVoteScore = (type, post, option) =>
  fetch(`${baseUrl}/${type}/${post.id}`, {
    method: 'post',
    headers: {
      ...headers,
    },
    body: JSON.stringify(option)
  })
    .then(res => res.json())
    .then(data => data)

