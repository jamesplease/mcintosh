import { useEffect } from 'react';
import { withRouter } from 'react-router';
import usePrevious from '../hooks/use-previous';

export function ScrollToTop(props) {
  const prevProps = usePrevious(props);

  useEffect(() => {
    const prevLocation = prevProps && prevProps.location;
    if (props.location !== prevLocation) {
      window.scrollTo(0, 0);
    }
  }, []);

  return props.children;
}

export default withRouter(ScrollToTop);
