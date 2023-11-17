const AddSource = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const source = form.source.value;
        const email = form.email.value;

        e.target.reset();
    }

    return (
        <>
            <p>Is ExtraExtra missing your favorite news source? Let us know what you'd like to see added.</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="source">
                    Source
                </label>
                <input type="url" name="source" id="" placeholder="(ex: http://www.wsj.com/)" />
                <label htmlFor="email">
                    Your E-mail (we'll notify you when it's added)
                </label>
                <input type="email" name="email" id="" placeholder="(ex: name@example.com)" />
                <button type="submit" >
                    Submit
                </button>
            </form>
        </>
    );
};

export default AddSource;