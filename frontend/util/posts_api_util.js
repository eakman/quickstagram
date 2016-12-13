export const allPosts = (user) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user.id}/posts`,
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

// export const getPost = (post) => {
//   return $.ajax({
//     method: 'GET',
//     url: `/api/posts/${post.id}`,
//   });
// }
//
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
