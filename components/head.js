import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function head({ title }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
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
      </Head>
      <style jsx global>
        {`
                .show-mobile { display: none; }
                .github-corner { z-index: 9; }
                html {
                  display: flex;
                  justify-content: center;
                }
                body {
                  background: white;
                  width: 1280px;
                  font-family: 'Karla', sans-serif;
                }
                header > h1 {
                  display: inline-block;
                }
                header > .middot {
                  font-size: 1.9rem;
                }
                .page-body {
                    display: flex;
                    flex-direction: row;
                    margin-left: 0.45rem;
                    margin-right: 0.45rem;
                }
                  #sidebarMobile { display: none; }
                    #sidebarMobile > div[role="navigation"] {
                      width: 75%;
                    }
                    #sidebarMobile a[role="button"] {
                      color: #70B6FD;
                      font-size: 2.6rem;
                      margin-left: 0.2rem;
                      margin-top: 0.2rem;
                    }

                  .sidebar { display: block; }
                    .sidebar h3 {
                        margin-bottom: 0px
                    }
                    .sidebar h3:before {
                      content: '# ';
                    }
                    .sidebar ol {
                        margin-top: 0px;
                        padding-left: 0.6rem;
                    }
                      .sidebar ol > li {
                        margin-top: 0.2rem;
                        list-style: none;
                        width: 16rem;
                      }
                      .sidebar ol > li:before {
                        content: '> ';
                      }
                    .page-body__title {
                      font-size: 1.8rem;
                    }
                    .page-body__example {
                        flex: 2;
                        max-width: calc(100% - 16rem - 0.6rem);
                    }
                        .page-body__example__ad {
                            background: #f7ecf1;
                            display: flex;
                            flex-direction: column;
                            flex-wrap: nowrap;
                            overflow-x: auto;
                            -webkit-overflow-scrolling: touch;
                        }
                            .page-body__example__ad__content {
                                display: flex;
                                justify-content: center;
                            }
                        .page-body__example__code {
                          display: flex;
                          flex-wrap: nowrap;
                          overflow-x: auto;
                        }
                          .page-body__example__code > pre {
                            min-width: 100%;
                          }
                        .page-body__example > ol {
                            list-style-type: square;
                        }
                @media screen and (max-width: 1280px) {
                  body {
                    width: 100%;
                    display: flex:
                    flex-direction: column;
                    align-items: middle;
                  }
                    header {
                      text-align: center;
                    }
                  .row-mobile {
                    clear: both;
                    display: block;
                    width: 100%;
                  }
                }
                @media screen and (max-width: 768px) {
                  .hidden-mobile { display: none; }
                  .show-mobile {
                    display: block;
                  }
                  header {
                    font-size: 0.75rem;
                    margin-top: 1.3rem;
                  }
                }
                /* smaller resolutions here. */
                @media screen and (max-width: 600px) {
                  #sidebar {
                    display: none;
                  }
                  #sidebarMobile {
                    display: block;
                  }
                  .page-body {
                    flex-direction: column;
                  }
                  .page-body__example {
                      max-width: 100%;
                  }
                }
            `}
      </style>
    </div>
  );
}

head.propTypes = {
  title: PropTypes.string.isRequired,
};
