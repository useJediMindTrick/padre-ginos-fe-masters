import { Component } from "react";
import { Link } from "@tanstack/react-router";

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught some stupid error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Uh oh!</h2>
          <p>
            The was an error with this page.
            <Link>Click here </Link> to go to home page.
          </p>
        </div>
      );
    }
    return this.props.children; // this just passes the child component if there are not errors
  }
}

export default ErrorBoundary;
