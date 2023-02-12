import React, { createContext, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  error?: boolean;
  errorInfo?: string;
}

interface ErrorBoundaryContext extends ErrorBoundaryState {
  clearError?: () => void;
}

export const ErrorContext = createContext<ErrorBoundaryContext>({});

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  prevPath: string;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { error: null, errorInfo: null };
    this.prevPath = null;
  }

  static getDerivedStateFromError(error: Error) {
    return { error: true, errorInfo: error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log(error, errorInfo);
  }

  clearError = () => {
    this.setState({ error: null, errorInfo: null });
  };

  render() {
    const { error, errorInfo } = this.state;
    const { children } = this.props;

    return (
      <ErrorContext.Provider
        value={{ error, errorInfo, clearError: this.clearError }}
      >
        {children}
      </ErrorContext.Provider>
    );
  }
}
