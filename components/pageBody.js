import { Component, Fragment } from 'react'
import Head from 'next/head'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import GithubCorner from 'react-github-corner';
import SideBar from './sidebar';

export default class extends Component {
    render() {
        let module;
        try {
            module = require(`./ads/${this.props.example}`);
        } catch(ex) {
            module = {};
        }
        let { Intro, Example, Hints, code } = module; 
        return (
            <main>
                <link
                    rel="stylesheet"
                    href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
                    integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
                    crossorigin="anonymous"
                />
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.5.0/modern-normalize.min.css"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css?family=Karla"
                    rel="stylesheet"
                />
                <style global jsx>{`
                    html {
                        display: flex;
                        justify-content: center;
                    }
                    body {
                        background: blank;
                        width: 1280px;
                        font-family: 'Karla', sans-serif;
                    }
                    .page-body {
                        display: flex;
                        flex-direction: row;
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
                `}</style>
                <GithubCorner href="https://github.com/jaanauati/react-dfp" bannerColor="#70B7FD" />
                <Head>
                    <title>React-dfp documentation: {this.props.title}</title>
                </Head>
                <header>
                    <h1> React DFP documentation: <span> {this.props.title} </span> </h1>
                </header>
                <div className="page-body">
                    <SideBar />
                    <div className="page-body__example">
                        { Example ?
                            <Fragment>
                                {  Intro ?
                                    <Fragment>
                                        <h2> <i class="fas fa-book-open"></i> Brief Introduction: </h2>
                                        <Intro />
                                        <h2> <i class="far fa-window-maximize"></i> Example: </h2>
                                    </Fragment>
                                : null }
                                <div className="page-body__example__ad">
                                    <span className="page-body__example__ad__content"> ADS GO HERE... </span>
                                    <Example/>
                                </div>
                                <h3> <i class="fas fa-file-code"></i> Code: </h3>
                                <SyntaxHighlighter language='javascript' style={docco} showLineNumbers>
                                    {code}
                                </SyntaxHighlighter>
                                <h3> <i class="far fa-sticky-note"></i> Notes: </h3>
                                <Hints/>
                            </Fragment>
                            : <Fragment>
                                <span> Work in progress... </span>
                            </Fragment>
                        }
                    </div>
                </div>
            </main>
        )
    }
}
