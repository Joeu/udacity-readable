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

export const addComment = (comment) =>
  fetch(`${baseUrl}/comments`, {
    method: 'post',
    headers: {
      ...headers,
    },
    body: JSON.stringify(comment)
  })
    .then(res => res.json())
    .then(data => data)

export const editComment = (comment) =>
  fetch(`${baseUrl}/comments/${comment.id}`, {
    method: 'put',
    headers: {
      ...headers,
    },
    body: JSON.stringify({
      timestamp: Date.now(),
      body: comment.body
    })
  })
    .then(res => res.json())
    .then(data => data)

export const deleteComment = (commentId) =>
  fetch(`${baseUrl}/comments/${commentId}`, {
    method: 'delete',
    headers: {
      ...headers,
    }
  })
    .then(res => res.json())
    .then(data => data)

export const addPost = (post) =>
  fetch(`${baseUrl}/posts`, {
    method: 'post',
    headers: {
      ...headers,
    },
    body: JSON.stringify(post)
  })
    .then(res => res.json())
    .then(data => data)

export const editPost = (post, title) =>
  fetch(`${baseUrl}/posts/${post.id}`, {
    method: 'put',
    headers: {
      ...headers,
    },
    body: JSON.stringify({
      title: title,
      body: post.body
    })
  })
    .then(res => res.json())
    .then(data => data)

export const deletePost = (postId) =>
  fetch(`${baseUrl}/posts/${postId}`, {
    method: 'delete',
    headers: {
      ...headers,
    }
  })
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

