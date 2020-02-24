module.exports = {
  slug: 'ssb',
  route: '64',
  name: 'Super Smash Bros.',
  shortName: '64',
  console: 'Nintendo 64',
  description: `
    <p>
      This is the latest and most widely-accepted tier list for
      <a href="https://www.ssbwiki.com/Super_Smash_Bros.">Super Smash Bros.</a>
      from Nintendo 64, produced by the Smash 64 community and last updated
      on May 12, 2015.
    </p>
    <p>
      To learn more about how these tier lists are made check out the "Tier list" article
      on <a href="https://www.ssbwiki.com/tier_list">the Smash Wiki</a>.
    </p>
  `,
  tiers: [
    { name: 'S', color: '#d0021b' },
    { name: 'A', color: '#f8e71c' },
    { name: 'B', color: '#7ed321' },
    { name: 'C', color: '#4a90e2' }
  ],
  roster: [
    {
      slug: 'pikachu',
      name: 'Pikachu',
      color: '#f7c143',
      tier: 'S'
    },
    {
      slug: 'kirby',
      name: 'Kirby',
      color: '#f2c1c4',
      tier: 'S'
    },
    {
      slug: 'captain-falcon',
      name: 'Captain Falcon',
      color: '#8d8bdc',
      tier: 'A'
    },
    {
      slug: 'fox',
      name: 'Fox',
      color: '#266bc2',
      tier: 'A'
    },
    {
      slug: 'yoshi',
      name: 'Yoshi',
      color: '#83cd65',
      tier: 'A'
    },
    {
      slug: 'jigglypuff',
      name: 'Jigglypuff',
      color: '#e18ae5',
      tier: 'B'
    },
    {
      slug: 'mario',
      name: 'Mario',
      color: '#d04c4a',
      tier: 'B'
    },
    {
      slug: 'samus',
      name: 'Samus',
      color: '#353f56',
      tier: 'C'
    },
    {
      slug: 'donkey-kong',
      name: 'Donkey Kong',
      color: '#fada4a',
      tier: 'C'
    },
    {
      slug: 'ness',
      name: 'Ness',
      color: '#de423d',
      tier: 'C'
    },
    {
      slug: 'link',
      name: 'Link',
      color: '#c2cf72',
      tier: 'C'
    },
    {
      slug: 'luigi',
      name: 'Luigi',
      color: '#5ea444',
      tier: 'C'
    }
  ]
}
