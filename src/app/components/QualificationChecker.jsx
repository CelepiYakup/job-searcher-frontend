'use client';

import React, {useState} from "react";
import { checkQualifications } from "../services/api";

const QualificationChecker = ({ jobDescription, userProfile }) => {
    const [qualification, setQualification] = useState('');

    const handleCheckQualifications = async () => {
        const result = await checkQualifications(jobDescription, userProfile);
        setQualification(result.data.qualification);
    };

    return (
        <div>
            <button onClick={handleCheckQualifications}> Check Qualifications</button>
            {qualification && <pre>{qualification}</pre>}
        </div>
    );
}

export default QualificationChecker;