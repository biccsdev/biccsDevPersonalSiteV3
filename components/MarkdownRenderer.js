import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownRenderer = ({ markdownContent }) => {
    const [content, setContent] = useState('');

    useEffect(() => {
        async function fetchMarkdownContent() {
            try {
                const response = await fetch(markdownContent);
                const text = await response.text();
                setContent(text);
            } catch (error) {
                console.error('Error fetching Markdown content:', error);
            }
        }

        fetchMarkdownContent();
    }, [markdownContent]);

    return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default MarkdownRenderer;
