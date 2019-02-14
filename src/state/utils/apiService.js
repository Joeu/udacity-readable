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