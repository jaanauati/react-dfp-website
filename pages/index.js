import { Component } from 'react'
import Head from 'next/head'

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
                    <h1> React DFP </h1>
                </header>
                <p>
                    This is a just placeholder page.
                </p>
            </main>
        )
    }
}
