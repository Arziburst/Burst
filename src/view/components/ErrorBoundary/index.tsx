// Core
import React, { Component, FC } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';

// Types
type State =  {
    error: Error | null;
}

type PropChildren ={
    children: React.ReactNode;
}

type PropTypes = {
    navigation: NavigateFunction
} & PropChildren;
class ErrorBoundaryClass extends Component<PropTypes, State> {
    static getDerivedStateFromError(error: Error) {
        return { error };
    }

    state: State = {
        error: null,
    };

    render() {
        const { error } = this.state;
        const { children, navigation } = this.props;

        return error ? (
            <section>
                <div>Error component</div>
                <button onClick = { () => navigation(-1) }>Go Back</button>
            </section>
        ) : children;
    }
}

export const ErrorBoundary: FC<PropChildren> = ({ children }) => {
    const navigation = useNavigate();

    return (
        <ErrorBoundaryClass
            children = { children }
            navigation = { navigation }
        />
    );
};
