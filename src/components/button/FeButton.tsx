'use client';

import React from 'react';
import styled from 'styled-components';
import styles from './FeButton.module.css';

export const Container = styled.div`
    padding: 10px;
`;

interface FeButtonProps {
    /**
     * Is this the principal call to action on the page?
     */
    primary?: boolean;
    /**
     * What background color to use
     */
    backgroundColor?: string;
    /**
     * How large should the button be?
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button contents
     */
    label: string;
    /**
     * Optional click handler
     */
    onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const FeButton = ({ primary = false, size = 'medium', backgroundColor, label, ...props }: FeButtonProps) => {
    const mode = primary ? styles['storybook-button--primary'] : styles['storybook-button--secondary'];

    console.log('styles : ', styles['storybook-button']);
    return (
        <Container>
            <button
                type='button'
                className={[styles['storybook-button'], styles[`storybook-button--${size}`], mode].join(' ')}
                style={{ backgroundColor }}
                {...props}
            >
                {label}
            </button>
        </Container>
    );
};

export default FeButton;
