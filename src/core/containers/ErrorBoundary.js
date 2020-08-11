import React from 'react';
import styled from "styled-components";
import {FormattedMessage} from "react-intl";

const ErrorBoundaryWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorBoundaryWrapper>
                    <h1><FormattedMessage id="document.construction" defaultMessages="Website is under construction"/></h1>
                </ErrorBoundaryWrapper>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
