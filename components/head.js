import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import resetStyles from 'modern-normalize/modern-normalize.css'; // eslint-disable-line
import localStyles from '../styles.css';

export default function head({ title }) {
  return (
    <div>
      <style jsx global>{localStyles}</style>
      <style jsx global>{resetStyles}</style>

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
        <title>
          React-dfp documentation: {title}
        </title>
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-1546978910599248",
              enable_page_level_ads: true
            });
          `,
        }}
        />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-45390879-2" />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-45390879-2');
          `,
        }}
        />
      </Head>
    </div>
  );
}

head.propTypes = {
  title: PropTypes.string.isRequired,
};
