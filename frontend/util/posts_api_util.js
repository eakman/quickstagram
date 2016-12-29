export const allPosts = (user, page) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user.id}/posts`,
    data: { page }
  });
};

export const getPostsByTag = (hash_tag) => {
  return $.ajax({
    method: 'GET',
    url: `/api/posts/posts_by_tag?query=${hash_tag}`
  });
};

export const morePosts = (user, page) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user.id}/posts`,
    data: { page }
  });
};

export const likePost = (post_id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/posts/${post_id}/toggle_like`
  });
};

export const createComment = (post_id, comment) => {
  return $.ajax({
    method: 'POST',
    url: `/api/posts/${post_id}/create_comment`,
    data: { comment }
  });
};

export const userPosts = (user_id) => {
  return $.ajax({
      method: 'GET',
      url: `/api/users/${user_id}/get_user_posts`
  });
};


export const createPost = (formData) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    dataType: "json",
    contentType: false,
    processData: false,
    data: formData,
  });
};
