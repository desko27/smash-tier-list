module.exports = {
  slug: 'ssbm',
  route: 'melee',
  name: 'Super Smash Bros. Melee',
  shortName: 'Melee',
  console: 'Game Cube',
  description: `
    <p>
      This is the latest and most widely-accepted tier list for
      <a href="https://www.ssbwiki.com/Super_Smash_Bros._Melee">Super Smash Bros. Melee</a>
      from Nintendo GameCube, produced by the Smash 64 community and last updated
      on December 10th, 2015.
    </p>
    <p>
      To learn more about how these tier lists are made check out the "Tier list" article
      on <a href="https://www.ssbwiki.com/tier_list">the Smash Wiki</a>.
    </p>
  `,
  tiers: [
    { name: 'SS', color: '#d0021b' },
    { name: 'S', color: '#f5a623' },
    { name: 'A', color: '#f8e71c' },
    { name: 'B', color: '#b8e986' },
    { name: 'C', color: '#7ed321' },
    { name: 'D', color: '#50e3c2' },
    { name: 'E', color: '#4a90e2' },
    { name: 'F', color: '#bd10e0' },
    { name: 'G', color: '#9013fe' }
  ],
  roster: [
    {
      slug: 'fox',
      name: 'Fox',
      color: '#266bc2',
      tier: 'SS'
    },
    {
      slug: 'falco',
      name: 'Falco',
      color: '#69b1df',
      tier: 'S'
    },
    {
      slug: 'marth',
      name: 'Marth',
      color: '#5ba8c8',
      tier: 'S'
    },
    {
      slug: 'sheik',
      name: 'Sheik',
      color: '#746fd0',
      tier: 'S'
    },
    {
      slug: 'jigglypuff',
      name: 'Jigglypuff',
      color: '#e18ae5',
      tier: 'A'
    },
    {
      slug: 'peach',
      name: 'Peach',
      color: '#f5c9f0',
      tier: 'A'
    },
    {
      slug: 'ice-climbers',
      name: 'Ice Climbers',
      color: '#f1f0e4',
      tier: 'B'
    },
    {
      slug: 'captain-falcon',
      name: 'Captain Falcon',
      color: '#8d8bdc',
      tier: 'B'
    },
    {
      slug: 'pikachu',
      name: 'Pikachu',
      color: '#f7c143',
      tier: 'C'
    },
    {
      slug: 'samus',
      name: 'Samus',
      color: '#353f56',
      tier: 'C'
    },
    {
      slug: 'dr-mario',
      name: 'Dr. Mario',
      color: '#e86c6d',
      tier: 'D'
    },
    {
      slug: 'yoshi',
      name: 'Yoshi',
      color: '#83cd65',
      tier: 'D'
    },
    {
      slug: 'luigi',
      name: 'Luigi',
      color: '#5ea444',
      tier: 'D'
    },
    {
      slug: 'ganondorf',
      name: 'Ganondorf',
      color: '#7d7a97',
      tier: 'E'
    },
    {
      slug: 'mario',
      name: 'Mario',
      color: '#d04c4a',
      tier: 'E'
    },
    {
      slug: 'young-link',
      name: 'Young Link',
      color: '#80b659',
      tier: 'E'
    },
    {
      slug: 'donkey-kong',
      name: 'Donkey Kong',
      color: '#fada4a',
      tier: 'E'
    },
    {
      slug: 'link',
      name: 'Link',
      color: '#c2cf72',
      tier: 'E'
    },
    {
      slug: 'mr-game-watch',
      name: 'Mr. Game & Watch',
      color: '#a6a392',
      tier: 'F'
    },
    {
      slug: 'roy',
      name: 'Roy',
      color: '#74b65b',
      tier: 'F'
    },
    {
      slug: 'mewtwo',
      name: 'Mewtwo',
      color: '#7859bd',
      tier: 'F'
    },
    {
      slug: 'zelda',
      name: 'Zelda',
      color: '#a278b6',
      tier: 'F'
    },
    {
      slug: 'ness',
      name: 'Ness',
      color: '#de423d',
      tier: 'F'
    },
    {
      slug: 'pichu',
      name: 'Pichu',
      color: '#fcf28f',
      tier: 'G'
    },
    {
      slug: 'bowser',
      name: 'Bowser',
      color: '#44745e',
      tier: 'G'
    },
    {
      slug: 'kirby',
      name: 'Kirby',
      color: '#f2c1c4',
      tier: 'G'
    }
  ]
}
