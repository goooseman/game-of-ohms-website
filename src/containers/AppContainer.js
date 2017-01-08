import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-90024802-1');

const logPageView = () => {
  ReactGA.set({page: window.location.pathname});
  ReactGA.pageview(window.location.pathname);
};

class AppContainer extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routes: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  render () {
    const { history, routes, store } = this.props;

    return (
      <Provider store={store}>
        <div style={{ height: '100%', overflow: 'hidden' }}>
          <Router history={history} onUpdate={logPageView} children={routes} />
        </div>
      </Provider>
    );
  }
}

export default AppContainer;
