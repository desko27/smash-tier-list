import appReducer, { initialState } from './reducer';
import { prevGame, nextGame } from './actions';
import { initialState as gameInitialState } from '../game/reducer';
import { initialState as characterInitialState } from '../character/reducer';
import { validGame } from '../game/reducer.test';
import { addGame } from '../game/actions';

const initCharacter = c => ({ ...characterInitialState, ...c });
const initGame = (game) => {
  const initializedRoster = game.roster.map(c => initCharacter(c));
  const initializedGame = { ...game, roster: initializedRoster };
  return { ...gameInitialState, ...initializedGame };
};

const validApp = {
  title: 'Some App title',
  currentGameId: 0,
  games: [
    {
      id: 11,
      name: 'Melee',
      roster: [
        { name: 'Young Link', tier: 'B', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Roy', tier: 'S', avatarUrl: 'https://via.placeholder.com/50x50' },
      ],
    },
    {
      id: 15,
      name: 'Brawl',
      roster: [
        { name: 'Sonic', tier: 'A', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Dk. Kong', tier: 'C', avatarUrl: 'https://via.placeholder.com/50x50' },
        { name: 'Marth', tier: 'A', avatarUrl: 'https://via.placeholder.com/50x50' },
      ],
    },
    {
      id: 2,
      name: 'Fake',
      roster: [
        { name: 'Sonic', tier: 'A', avatarUrl: 'https://via.placeholder.com/50x50' },
      ],
    },
  ],
};


describe('app reducer', () => {
  it('should return the initial state if no state & action are provided', () => {
    expect(appReducer()).to.deep.equal(initialState);
  });
  it('should return the same state if no action provided', () => {
    expect(appReducer('CURRENT STATE')).to.equal('CURRENT STATE');
  });

  describe('has ADD_GAME handler that', () => {
    it('adds a new game when the list is empty', () => {
      expect(
        appReducer(undefined, addGame(validGame)),
      ).to.deep.equal({
        ...initialState,
        currentGameId: 0,
        games: [initGame(validGame)],
      });
    });
    it('adds a new game when app has some games already', () => {
      expect(
        appReducer(validApp, addGame(validGame)),
      ).to.deep.equal({
        ...validApp,
        games: validApp.games.concat(initGame(validGame)),
      });
    });
  });

  describe('has PREV_GAME handler that', () => {
    it('moves currentGameId to the previous game on the array', () => {
      const theCurrentOne = validApp.games[2];
      const thePreviousOne = validApp.games[1];
      expect(
        appReducer({ ...validApp, currentGameId: theCurrentOne.id }, prevGame()),
      ).to.have.property('currentGameId').that.equals(thePreviousOne.id);
    });
    it('moves currentGameId to the last game on the array when at the beginning', () => {
      const theFirstOne = validApp.games[0];
      const theLastOne = validApp.games[validApp.games.length - 1];
      expect(
        appReducer({ ...validApp, currentGameId: theFirstOne.id }, prevGame()),
      ).to.have.property('currentGameId').that.equals(theLastOne.id);
    });
  });

  describe('has NEXT_GAME handler that', () => {
    it('moves currentGameId to the next game on the array', () => {
      const theCurrentOne = validApp.games[1];
      const theNextOne = validApp.games[2];
      expect(
        appReducer({ ...validApp, currentGameId: theCurrentOne.id }, nextGame()),
      ).to.have.property('currentGameId').that.equals(theNextOne.id);
    });
    it('moves currentGameId to the first game on the array when at the end', () => {
      const theLastOne = validApp.games[validApp.games.length - 1];
      const theFirstOne = validApp.games[0];
      expect(
        appReducer({ ...validApp, currentGameId: theLastOne.id }, nextGame()),
      ).to.have.property('currentGameId').that.equals(theFirstOne.id);
    });
  });
});
