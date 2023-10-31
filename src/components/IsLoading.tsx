import { Container, Spinner } from "react-bootstrap";

export default function IsLoadingComponent(){



    return(<Container className="loading-container">

<Spinner animation="grow" variant="light" />

    </Container>)
}