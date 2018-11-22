import { Component } from 'react'
import Head from 'next/head'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import basicExample from '!raw-loader!../ads/basic.js'
import BasicExample from '../ads/basic';


export default class extends Component {
    static async getInitialProps({ query }) {
        return { title: query.title || 'React-dfp documentation' }
    }
    render() {
        return (
            <main>
                <Head>
                    <title>{this.props.title}</title>
                </Head>
                <header>
                    <h1> Basic Example: </h1>
                </header>
                <BasicExample />
                <SyntaxHighlighter language='javascript' style={docco} showLineNumbers>
                    {basicExample}
                </SyntaxHighlighter>
                <h3> Outstanding points: </h3>
                <ol>
                    <li> Lines 8-15: configure default / global properties using the &lt;DFPSlotProvider&gt;.</li>
                    <li> Line 17: define an ad-slot using the &lt;AdSlot&gt; component.</li>
                    <li> Line 20: define another ad-slot using the &lt;AdSlot&gt; component.</li>
                </ol>
            </main>
        )
    }
}
