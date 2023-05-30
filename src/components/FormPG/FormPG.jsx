import React, { useState } from 'react';
import FormHeader from '../FormHeader/FormHeader';
import CenteredTabs from '../Tabs/Tabs';
import QuestionForm from '../QuestionForm/QuestionForm';

const FormPG = () => {
    const [editingMode, setEditingMode] = useState(true);

    const handleChangeEditingMode = () => {
        setEditingMode((state) => !state)
    }
    return (
        <>
            <FormHeader editingMode={editingMode} changeEditingMode={handleChangeEditingMode} />
            <CenteredTabs />
            <QuestionForm editingMode={editingMode} changeEditingMode={handleChangeEditingMode} />
        </>
    )
}


export default FormPG