import { useLocalStorage } from 'usehooks-ts';

// Custom hook to manage notes
function useNotes() {
    const [notes, setNotes] = useLocalStorage<string>('userNotes', '');

    const updateNotes = (newNotes: string) => {
        setNotes(newNotes);
    };

    const clearNotes = () => {
        setNotes('');
    };

    return { notes, updateNotes, clearNotes };
}

export default useNotes;