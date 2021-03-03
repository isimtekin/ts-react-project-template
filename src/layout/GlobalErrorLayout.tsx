export interface GlobalErrorLayoutProps {
    children: JSX.Element;
}

const GlobalErrorLayout = ({ children }: GlobalErrorLayoutProps) => {
    return (
        <div>
            <div>GlobalErrorLayout Layout</div>
            <div>{children}</div>
        </div>
    );
};

export default GlobalErrorLayout;
