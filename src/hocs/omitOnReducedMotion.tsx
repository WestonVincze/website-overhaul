import { useAppState } from "@providers/AppStateProvider";

/**
 * Accessibility HOC that will not render (omit) the passed Component if the user prefers reduced motion
 * @returns `null` if the user prefers reduced motion
 */
export const omitOnReducedMotion = <P extends object>(
  Component: React.ComponentType<P>,
) => {
  const OmitOnReducedMotion = (props: P) => {
    const { reducedMotion } = useAppState();

    if (reducedMotion) {
      return null;
    }

    return <Component {...props} />;
  };

  OmitOnReducedMotion.displayName = `OmitOnReducedMotion(${
    Component.displayName || Component.name || "Component"
  }' )`;

  return OmitOnReducedMotion;
};
