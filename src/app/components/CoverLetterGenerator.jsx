'use client';

import React, {useState} from 'react';
import { generateCoverLetter } from '../services/api';

const CoverLetterGenerator = ({ jobDescription, userProfile }) => {

    const [coverLetter, setCoverLetter] = useState('');

    const handleGenerateCoverLetter = async () => {
        const result = await generateCoverLetter(jobDescription, userProfile);
        setCoverLetter(result.data.coverLetter);
    };

    return (
        <div>
            <button onClick={handleGenerateCoverLetter}> Generate Cover Letter</button>
            {coverLetter && <pre>{coverLetter}</pre>}
        </div>
    );

}

export default CoverLetterGenerator;