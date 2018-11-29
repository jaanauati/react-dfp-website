import { Component, Fragment } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import GithubCorner from 'react-github-corner';
import SideBar from './sidebar';
import Head from './head';

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
                <Head {...this.props} />
                <GithubCorner href="https://github.com/jaanauati/react-dfp" bannerColor="#70B7FD" />
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
