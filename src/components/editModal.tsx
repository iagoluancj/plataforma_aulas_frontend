import React, { useState } from 'react';
import styled from 'styled-components';
import { useApi } from '../hooks/useApi';
import { Button, ButtonCancel, InputGroupModal, ModalContent, ModalOverlay } from '../styles/stylesGlobal';
import { EditClassModalProps } from '../services/types';
import { toast } from 'react-toastify';

// Modal para edição das aulas
const EditClassModal = ({ classData, onClose, onSave }: EditClassModalProps) => {
    const { update } = useApi();

    const [formData, setFormData] = useState({
        id: classData.id,
        title: classData.title,
        description: classData.description,
        scheduled_at: classData.scheduled_at,
        link_video: classData.link_video,
        instructor_id: classData.instructor_id,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        const sanitizedFormData = {
            ...formData,
            id: formData.id.replace(/-/g, ""),
        };

        const updatedClass = await update("/classes", sanitizedFormData.id, sanitizedFormData);

        if (updatedClass) {
            toast.info("Aula alterada com sucesso.");
            onSave(updatedClass);
            onClose();
        } else {
            toast.error("Falha ao editar a aula.");
        }
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <InputGroupModal>
                    <input name="title" value={formData.title} onChange={handleChange} placeholder="Matéria" />
                    <input name="description" value={formData.description} onChange={handleChange} placeholder="Descrição" />
                    <input name="link_video" value={formData.link_video} onChange={handleChange} placeholder="URL da aula no Youtube" />
                    <input name="scheduled_at" type="date" value={formData.scheduled_at} onChange={handleChange} />
                </InputGroupModal>
                <span>
                    <Button onClick={handleSubmit}>Salvar</Button>
                    <ButtonCancel onClick={onClose} style={{ backgroundColor: 'dc3545' }}>Cancelar</ButtonCancel>
                </span>
            </ModalContent>
        </ModalOverlay>
    );
};

export default EditClassModal;
