import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function head({ title }) {
  return (
    <div>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.5.0/modern-normalize.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
          integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Karla"
          rel="stylesheet"
        />
        <title>
          {' '}
React-dfp documentation:
          {title}
          {' '}
        </title>
        <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        <script>
          {`
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: "ca-pub-5265355416640560",
              enable_page_level_ads: true
            });
          `}
        </script>
      </Head>
      <style jsx global>
        {`
                html {
                  display: flex;
                  justify-content: center;
                }
                body {
                  background: url(/img/white-waves.png);
                  width: 1280px;
                  font-family: 'Karla', sans-serif;
                }
                .page-body {
                    display: flex;
                    flex-direction: row;
                }
                    #sidebar h3 {
                        margin-bottom: 0px
                    }
                    #sidebar h3:before {
                      /* content: '🔶 '; */
                      content: '# ';
                    }
                    #sidebar ol {
                        margin-top: 0px;
                        padding-left: 0.6rem;
                    }
                      #sidebar ol > li {
                        margin-top: 0.2rem;
                        list-style: none;
                      }
                      #sidebar ol > li:before {
                        /* content: '▶️ ' */
                        content: '> ';
                      }
                    .page-body__example {
                        flex: 2;
                        margin-left: 1rem;
                    }
                        .page-body__example__ad {
                            background: #f7ecf1;
                        }
                            .page-body__example__ad__content {
                                display: flex;
                                justify-content: center;
                            }
                        .page-body__example > ol {
                            list-style-type: square;
                        }
            `}
      </style>
    </div>
  );
}

head.propTypes = {
  title: PropTypes.string.isRequired,
};
