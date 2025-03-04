import React, { useState } from 'react';
import { useApi } from '../hooks/useApi';
import { Button, ButtonCancel, InputGroupModal, ModalContent, ModalOverlay } from '../styles/stylesGlobal';

interface CreateClassModalProps {
    onClose: () => void;
    onSave: (newClass: any) => void;
    instructorId: string;
}

const CreateClassModal = ({ onClose, onSave, instructorId }: CreateClassModalProps) => {
    const { create } = useApi();

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        scheduled_at: '',
        instructor_id: instructorId, 
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const newClass = await create('/classes', formData);
        if (newClass) {
            onSave(newClass);
            onClose();
        }
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <InputGroupModal>
                    <input name="title" value={formData.title} onChange={handleChange} placeholder="Matéria" />
                    <input name="description" value={formData.description} onChange={handleChange} placeholder="Descrição" />
                    <input name="scheduled_at" type="date" value={formData.scheduled_at} onChange={handleChange} />
                </InputGroupModal>
                <span>
                    <Button onClick={handleSubmit}>Criar</Button>
                    <ButtonCancel onClick={onClose} style={{ backgroundColor: 'dc3545' }}>Cancelar</ButtonCancel>
                </span>
            </ModalContent>
        </ModalOverlay>
    );
};

export default CreateClassModal;
