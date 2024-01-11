export default function PageTitle({ as: Component = 'h1', className, children, ...rest }) {

    return (
        
        <Component
            className={`${className || ''}`}
            {...rest}
        >
            {children}
        </Component>

    );
}