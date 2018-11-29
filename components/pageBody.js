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
                <link href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.5.0/modern-normalize.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Karla" rel="stylesheet" />
                <style global jsx>{`
                    body {
                        background: blank;
                        font-family: 'Karla', sans-serif;
                    }
                    .page-body {
                        display: flex;
                        flex-direction: row;
                    }
                        .page-body__example {
                            flex: 2;
                            margin-top: 2%;
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
                                        <h2> Brief Introduction: </h2>
                                        <Intro />
                                        <h2> Example: </h2>
                                    </Fragment>
                                : null }
                                <div className="page-body__example__ad">
                                    <span className="page-body__example__ad__content"> ADS GO HERE... </span>
                                    <Example/>
                                </div>
                                <SyntaxHighlighter language='javascript' style={docco} showLineNumbers>
                                    {code}
                                </SyntaxHighlighter>
                                <h3> Outstanding points: </h3>
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
