export type Player = {
  action: string;
  alive: boolean;
  id: string;
  playerToKill: string;
  playerToKillId: string;
  randomNumber: number;
  username: string;
  winner: boolean;
};

export type Game = {
  admin: string;
  code: string;
  gameOver: boolean;
  players: Player[];
  started: boolean;
  title: string;
  uriImage: string;
};
