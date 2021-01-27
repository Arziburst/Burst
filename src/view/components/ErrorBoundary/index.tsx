// Core
import React, { Component} from 'react';

type State =  {
    error: Error | null;
}

export class ErrorBoundary extends Component<{}, State> {
    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    state: State = {
        error: null,
    }

    render() {
        const { error } = this.state;
        const { children } = this.props;

        return error ? (<div>Error component</div>) : children;
    }
}
