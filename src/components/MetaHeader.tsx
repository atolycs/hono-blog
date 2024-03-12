import { FC } from "hono/jsx";

const MetaHeader: FC = (props) => {
    return (
        <>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
            <title>{props.title}</title>
        </>
    )

}

export default MetaHeader;