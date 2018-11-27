import { Component } from 'react'
import Head from 'next/head'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import GithubCorner from 'react-github-corner';
import PageBody from '../components/pageBody';

export default class extends Component {
    static async getInitialProps({ query }) {
        return {
            title: query.title || 'Basic Example',
            example: query.example || 'basic',
        }
    }
    render() {
        return <PageBody {...this.props} />;
    }
}
