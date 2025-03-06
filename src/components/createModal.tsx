import React, { useState } from 'react';
import { useApi } from '../hooks/useApi';
import { Button, ButtonCancel, InputGroupModal, ModalContent, ModalOverlay } from '../styles/stylesGlobal';
import { toast } from 'react-toastify';

interface CreateClassModalProps {
    onClose: () => void;
    onSave: (newClass: any) => void;
    instructorId: string;
}

// Modal para criação das aulas
const CreateClassModal = ({ onClose, onSave, instructorId }: CreateClassModalProps) => {
    const { create } = useApi();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        scheduled_at: '',
        link_video: '',
        instructor_id: instructorId,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {

        if (!formData.title || !formData.description || !formData.scheduled_at) {
            toast.error("Por favor, preencha todos os campos.");
            return;
        }

        const newClass = await create('/classes', formData);

        if (JSON.stringify(newClass).includes("Enter a valid URL")) {
            toast.error("Link inválido da aula no YouTube. Crie sem ou revise seu link.");
            return;
        }
        
        if (newClass.status) {
            toast.error("Falha ao criar a aula.");

        } else {
            onSave(newClass);
            onClose();
            toast.success("Aula criada com sucesso.");
        }
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <InputGroupModal>
                    <input name="title" value={formData.title} onChange={handleChange} placeholder="Matéria" />
                    <input name="description" value={formData.description} onChange={handleChange} placeholder="Descrição" />
                    <input name="link_video" value={formData.link_video} onChange={handleChange} placeholder="URL da aula no Youtube" />
                    <input name="scheduled_at" type="datetime-local" value={formData.scheduled_at} onChange={handleChange} />
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
