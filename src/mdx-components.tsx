import type { MDXComponents } from "mdx/types";
import { Button } from "./components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: (props) => <h1 className="text-2xl font-bold" {...props} />,
    h2: (props) => <h2 className="text-xl font-bold" {...props} />,
    h3: (props) => <h3 className="text-lg font-bold" {...props} />,
    h4: (props) => <h4 className="text-base font-bold" {...props} />,
    button: (props) => <Button>{props.children}</Button>,
    ...components,
  };
}
