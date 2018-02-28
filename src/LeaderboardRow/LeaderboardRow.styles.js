const LeaderboardRow = {
  backgroundColor: 'rgb(68, 199, 245)',
  margin: '5%',
  padding: '5%',
};

const LeaderboardRowUser = {
  color: 'white',
};

const LeaderboardRowScore = {
  color: 'white',
};

const selected = {
  ...LeaderboardRowUser,
  color: 'red',
};

module.exports = {
  LeaderboardRow,
  LeaderboardRowUser,
  LeaderboardRowScore,
  selected,
};

