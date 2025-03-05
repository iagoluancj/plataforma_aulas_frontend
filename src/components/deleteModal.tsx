import React from "react";
import styled from "styled-components";
import { Button, ButtonCancel, ModalContent, ModalOverlay } from "../styles/stylesGlobal";
import { useApi } from "../hooks/useApi";
import { DeleteClassModalProps } from "../services/types";
import { toast } from "react-toastify";

// Modal para deleção das aulas
const DeleteClassModal = ({ classData, onClose, onDelete }: DeleteClassModalProps) => {
    const { remove } = useApi();

    const handleDelete = async () => {
        const success = await remove("/classes", classData.id);
        if (success) {
            toast.success("Aula deletada com sucesso.");
            onDelete(classData.id);
            onClose();
        } else {
            toast.info("Aula deletada com sucesso.");
            console.error("Erro ao deletar a aula");
        }
    };

    return (
        <ModalOverlay>
            <ModalContent>
                <h3>Você está excluindo a aula:</h3>
                <p>"{classData.title}"</p>
                <span>Realmente deseja prosseguir?</span>
                <span>
                    <ButtonCancel onClick={handleDelete}>
                        Prosseguir
                    </ButtonCancel>
                    <Button onClick={onClose}>Sair</Button>
                </span>
            </ModalContent>
        </ModalOverlay>
    );
};

export default DeleteClassModal;
