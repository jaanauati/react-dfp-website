import { Component } from 'react'
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
            module = require(`./ads/basic`);
        }
        let { Example, Hints, code } = module; 
        return (
            <main>
                <style global jsx>{`
                    body {
                        background: blank;
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
                                content: 'ADS GOES HERE...';
                            }
                                .page-body__example__ad__content {
                                    display: flex;
                                    justify-content: center;
                                }
                `}</style>
                <GithubCorner href="https://github.com/username/repo" bannerColor="#70B7FD" />
                <Head>
                    <title>React-dfp documentation: {this.props.title}</title>
                </Head>
                <header>
                    <h1> React DFP Examples: <span> {this.props.title} </span> </h1>
                </header>
                <div className="page-body">
                    <SideBar />
                    <div className="page-body__example">
                        <div className="page-body__example__ad">
                            <span className="page-body__example__ad__content"> ADS GO HERE... </span>
                            <Example/>
                        </div>
                        <SyntaxHighlighter language='javascript' style={docco} showLineNumbers>
                            {code}
                        </SyntaxHighlighter>
                        <h3> Outstanding points: </h3>
                        <Hints/>
                    </div>
                </div>
            </main>
        )
    }
}
