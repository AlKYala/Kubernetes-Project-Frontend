export function Header() {

    const backendUrl = process.env.REACT_APP_BACKEND_URL;

    console.log(backendUrl);

    return (
        <>
        <p>
            this is the backend Url: {backendUrl}
        </p>
        </>
    );
}