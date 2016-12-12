export const updateUser = (user_id, formData) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${user_id}`,
    dataType: "json",
    contentType: false,
    processData: false,
    data: formData,
  });
};

export const getUser = (user_id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${user_id}`
  });
};
