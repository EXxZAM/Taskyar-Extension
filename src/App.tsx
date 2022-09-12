import styled from "styled-components";
import TodoPanel from "./components/Panel";

function App() {
    return (
        <>
            <Container>
                <TodoPanel />
            </Container>
        </>
    );
}

const Container = styled.div`
    display: flex;
    font-family: "Poppins";
    input {
        font-family: "Poppins";
    }
    button {
        font-family: "Poppins" !important;
        font-size: 12px !important;
    }
`;

export default App;
