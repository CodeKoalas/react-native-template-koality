function getUrl() {
  const random = Math.floor(Math.random() * (20000 - 1)) + 1;
  return `http://loremflickr.com/320/240/koala?random=${random}`;
}

export default {
  login: () =>
    Promise.resolve({
      username: 'Jimmy23',
      firstName: 'Jim',
      lastName: 'John',
      avatar: 'http://loremflickr.com/320/240/boy',
    }),
  getPhotos: () =>
    Promise.resolve([
      {
        key: 1,
        photo: getUrl(),
      },
      {
        key: 2,
        photo: getUrl(),
      },
      {
        key: 3,
        photo: getUrl(),
      },
      {
        key: 4,
        photo: getUrl(),
      },
      {
        key: 5,
        photo: getUrl(),
      },
      {
        key: 6,
        photo: getUrl(),
      },
      {
        key: 7,
        photo: getUrl(),
      },
      {
        key: 8,
        photo: getUrl(),
      },
      {
        key: 9,
        photo: getUrl(),
      },
    ]),
};
