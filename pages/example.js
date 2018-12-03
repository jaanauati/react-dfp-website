import { Component, Fragment } from 'react'
import { withRouter } from 'next/router'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import PageBody from '../components/pageBody';

class ExamplePage extends Component {
    constructor(props) {
        super(props);
        const { router: {query: routerQuery = {}}, query = {} } = props;
        this.state = {
            title: routerQuery.title || query.title || 'Basic Example', 
            example: routerQuery.example || query.example || 'basic',
        };
    }

    static async getInitialProps({ router, query }) {
        return {
            title: router.query.title || query.title || 'Basic Example',
            example: router.query.example || query.example || 'basic',
        }
    }

    static getDerivedStateFromProps(props, state) {
        const {
            title,
            example
        } = props.router.query;
        if (title && example) {
            return {title, example};
        }
        return null;
    }

    render() {
        let module;
        try {
            console.log(`loading module: ../components/ads/${this.state.example}`);
            module = require(`../components/ads/${this.state.example}`);
        } catch(ex) {
            module = {};
        }
        let { Intro, Example, Hints, code } = module; 
        return (
            <PageBody {...this.props} {...this.state}>
                { Example ?
                    <Fragment>
                        {  Intro ?
                            <Fragment>
                                <h2> <i className="fas fa-book-open"></i> Brief Introduction: </h2>
                                <Intro />
                                <h2> <i className="far fa-window-maximize"></i> Example: </h2>
                            </Fragment>
                        : null }
                        <div className="page-body__example__ad">
                            <span className="page-body__example__ad__content"> ADS GO HERE... </span>
                            <Example/>
                        </div>
                        <h3> <i className="fas fa-file-code"></i> Code: </h3>
                        <SyntaxHighlighter language='javascript' style={docco} showLineNumbers>
                            {code}
                        </SyntaxHighlighter>
                        <h3> <i className="far fa-sticky-note"></i> Notes: </h3>
                        <Hints/>
                    </Fragment>
                    : <Fragment>
                        <span> Work in progress... </span>
                    </Fragment>
                }
            </PageBody>
        );
    }
}

export default withRouter(props => <ExamplePage {...props} />);
