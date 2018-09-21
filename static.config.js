/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import util from 'util';
import ImageminPlugin from 'imagemin-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

export default {
  getSiteData: () => ({
    siteTitle: 'Smash Tier List',
    metaDescription: 'Check out which is the Tier position of your favourite Super Smash Bros'
      + ' character. A tier list is a list that ranks all characters in a game based on the'
      + ' strength of their fighting abilities as well as their potential to win matches'
      + ' under tournament conditions.',
  }),
  siteRoot: 'https://smash-tier-list.com',
  getRoutes: () => ([
    { path: '/' },
    { path: '/64' },
    { path: '/melee' },
    { path: '/brawl' },
    { path: '/ssb4' },
  ]),
  webpack: [
    (config, { defaultLoaders, stage }) => {
      config.plugins = [
        ...config.plugins,

        // compress all images
        // make sure that this is after any plugins that add images
        new ImageminPlugin({
          disable: stage === 'dev',
          pngquant: {
            quality: '95-100',
          },
        }),

        // get gzipped files
        new CompressionPlugin({
          asset: '[path].gz[query]',
          algorithm: 'gzip',
          test: /\.js$|\.css$|\.html$/,
          threshold: 10240,
          minRatio: 0.8,
        }),
      ];

      // https://iamakulov.com/notes/optimize-images-webpack/
      const newRules = [
        {
          test: /\.(jpe?g|png|gif)$/,
          loader: 'url-loader',
          options: {
            // images larger than 10 KB won't be inlined
            limit: 10 * 1024,
          },
        },
        {
          test: /\.svg$/,
          loader: 'svg-url-loader',
          options: {
            // svgs larger than 100 KB won't be inlined
            limit: 100 * 1024,
            // remove quotes around the encoded url, they're rarely useful
            noquotes: true,
          },
        },
        {
          test: /\.(jpg|png|gif|svg)$/,
          loader: 'image-webpack-loader',
          // apply loader before url-loader/svg-url-loader and not duplicate it in rules with them
          enforce: 'pre',
        },
      ];

      const rules = config.module.rules[0].oneOf;
      config.module.rules[0].oneOf = [
        ...newRules,
        ...rules,
      ];

      return config;
    },
    (config) => {
      // comment out to see the full webpack config at build time
      // console.log(util.inspect(config.module.rules[0].oneOf, false, null, true));
    },
  ],
  renderToHtml: (render, Comp, meta) => {
    const sheet = new ServerStyleSheet();

    // the styles are collected from each page component
    const html = render(sheet.collectStyles(<Comp />));

    // the collected page styles are stored in `meta`
    meta.styleTags = sheet.getStyleElement(); // eslint-disable-line

    // return the html string for the page
    return html;
  },
  // eslint-disable-next-line
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8" />

          <title>{siteData.siteTitle}</title>
          <meta name="description" content={siteData.metaDescription} />

          <meta property="og:title" content={siteData.siteTitle} />
          <meta property="og:description" content={siteData.metaDescription} />

          <meta name="viewport" content="width=device-width, initial-scale=0.9, user-scalable=no" />
          <meta name="theme-color" content="#000000" />
          {renderMeta.styleTags}
          <noscript>
            <style type="text/css">
              {'img.loading { opacity: 1 !important; }'}
            </style>
          </noscript>
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
        </Head>
        <Body>{children}</Body>
      </Html>
    );
  },
};
