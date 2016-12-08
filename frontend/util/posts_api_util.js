export const allPosts = (user) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user.id}/posts`,
  });
}


// export const getPost = (post) => {
//   return $.ajax({
//     method: 'GET',
//     url: `/api/posts/${post.id}`,
//   });
// }
//
// export const createPost = (post) => {
//   return $.ajax({
//     method: 'POST',
//     url: '/api/posts',
//     data: { post }
//   });
// }
