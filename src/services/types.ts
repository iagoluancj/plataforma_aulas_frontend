export interface Class {
    id: string;
    title: string;
    description: string;
    scheduled_at: string;
    instructor_id: string;
    instructor_name: string;
}

export interface EditClassModalProps {
    classData: Class;
    onClose: () => void;
    onSave: (updatedClass: any) => void;
}

export interface DeleteClassModalProps {
    classData: Class;
    onClose: () => void;
    onDelete: (success: any) => void;
}

export interface Enrollments {
    id: string;
    student_id: string;
    classes: string;
    enrolled_at: string;
}