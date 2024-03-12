import { FC } from "hono/jsx";

const Basehtml: FC = async (props) => {
    return (
        <>
        <html>
            {props.children}
        </html>
        </>
    )
}

export default Basehtml;