import { Form } from "../components/Form/Form"
import { Header } from "../components/Header/Header"
import { ToDoList } from "../components/ToDoList/ToDolist"

export const ToDolistPage = () => {
    return (
        <>
            <Header />
            <Form />
            <ToDoList />
        </>
    )
}