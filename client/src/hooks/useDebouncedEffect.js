/**
 * Hook taken from SO
 * https://stackoverflow.com/questions/54666401/how-to-use-throttle-or-debounce-with-react-hook
 */
import { useEffect } from 'react';

const useDebouncedEffect = (effect, deps, delay) => {
	useEffect(() => {
		const handler = setTimeout(() => effect(), delay);
		return () => clearTimeout(handler);
	}, [...(deps || []), delay]);
};

export default useDebouncedEffect;
