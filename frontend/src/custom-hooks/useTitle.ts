import { useEffect, useState } from "react";

/**
 * This is a custom hook used to dynamically set the title of a page
 */
const useTitle = (initialTitle?: string) => {
    const [title, setTitle] = useState<string>(initialTitle || "EzTix");

    useEffect(() => {
        document.title = title;
    }, [title]);

    return [setTitle] as const;
};

export { useTitle };
