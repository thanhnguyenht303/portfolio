import { RefObject, useEffect } from 'react';

export function useCloseModal(ref: RefObject<HTMLElement>, isOpen: boolean, onClose: () => void) {
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node) && isOpen) {
                onClose();
            }
        }

        function handleKeyDown(event: { key: string; }) {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose, ref]); 
}
