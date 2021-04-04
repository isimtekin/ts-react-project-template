import ReactDOM from 'react-dom';
import { DefaultTheme, StyledComponent } from 'styled-components';
import { useCompMount } from '.';
import { nanoid } from 'nanoid';
import { useState } from 'react';

export const useGetClassName = (
    Tag: StyledComponent<'div', DefaultTheme, {}, never>
) => {
    const [className, setClassName] = useState('');
    useCompMount(() => {
        const vid = nanoid();
        const id = `styled-component-${vid}`;
        if (!document.getElementById(id)) {
            const node = document.createElement('div');
            node.id = id;
            document.body.appendChild(node);
            ReactDOM.render(<Tag id="child" />, node);
            setTimeout(() => {
                const node1 = document.querySelector(`#${id} > #child`);
                setClassName(node1?.className || '');
                document.body.removeChild(node);
            });
        }
    });

    return className;
};
