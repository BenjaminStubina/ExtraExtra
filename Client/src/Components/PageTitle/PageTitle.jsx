export default function PageTitle({ className, children, ...rest }) {

    return (

        <h1
            className={`flex items-center justify-center text-center text-3xl ${className || ''}`}
            {...rest}
        >
            {children}
        </h1>

    );
}