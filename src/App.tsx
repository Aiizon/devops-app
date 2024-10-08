import './styles/main.css'
import React, {useState} from "react";

export interface Task {
    title: string;
    dueDate: string;
}

export const TASKS_STORAGE_KEY = 'tasks';

function App() {
    const [title, setTitle] = useState<string>('');
    const [dueDate, setDueDate] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!title || !dueDate) {
            setMessage('Veuillez remplir tous les champs.');
            setTimeout(() => {
                setMessage('');
            }, 10000);
            return;
        }

        const existingTasks: Array<Task> = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY) as string) || [];

        const newTask: Task = {
            title: title,
            dueDate: dueDate
        };

        localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify([...existingTasks, newTask]));
        setMessage('Tâche créée avec succès.');

        setTitle('');
        setDueDate('');

        // setTimeout(() => {
        //     setMessage('');
        // }, 10000);
    }

    return (
        <>

        </>
    );
}

export default App
