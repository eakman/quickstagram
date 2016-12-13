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

// export const getPost = (post) => {
//   return $.ajax({
//     method: 'GET',
//     url: `/api/posts/${post.id}`,
//   });
// }
//
export const createPost = (post) => {
  return $.ajax({
    method: 'POST',
    url: '/api/posts',
    data: { post }
  });
};
