export default function PageTitle({ as: Component = 'h1', className, children, ...rest }) {

    return (

        <Component
            className={`flex items-center justify-center text-center text-3xl ${className || ''}`}
            {...rest}
        >
            {children}
        </Component>

    );
}