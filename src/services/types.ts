export interface Class {
    id: string;
    title: string;
    description: string;
    scheduled_at: string;
    instructor_id: string;
    instructor_name: string;
    link_video: string;
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

export interface ClassWithEnrollments {
    id: string;
    title: string;
    scheduled_at: string;
    participants_count: number;
}

export interface ClassContextType {
    classState: Class[];
    enrollments: Enrollments[];
}

export interface AuthContextType {
    auth: boolean;
    user: { id: string; email: string; profile_picture: string } | null;
    login: (token: string, user: any) => void;
    logout: () => void;
    loading: boolean;
}

export interface NavProps {
  title: string;
  isOpen: boolean;
  toggleSidebar: () => void;
}

export interface DecodedToken {
  role: string;
  exp: number;
  [key: string]: any; 
}