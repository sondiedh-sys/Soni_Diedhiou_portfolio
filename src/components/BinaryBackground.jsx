import React, { useEffect, useRef } from 'react';
import styles from './BinaryBackground.module.css';

const BinaryBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Make canvas full screen
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Characters (0 and 1)
        const chars = '01';

        // Calculate font size and columns
        const fontSize = 14;
        let columns = canvas.width / fontSize;

        // Array of drops - one per column
        // Value represents the current y-coordinate of the drop
        const drops = [];
        for (let x = 0; x < columns; x++) {
            // Initialize with random starting positions
            drops[x] = Math.random() * canvas.height;
        }

        // Drawing the characters
        const draw = () => {
            // Semi-transparent black to create trailing effect
            ctx.fillStyle = 'rgba(34, 34, 34, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Primary accent color for the binary text (with some transparency)
            ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
            ctx.font = fontSize + 'px monospace';

            for (let i = 0; i < drops.length; i++) {
                // Random character
                const text = chars.charAt(Math.floor(Math.random() * chars.length));

                // x = i * fontSize, y = value of drops[i] * fontSize
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                // Reset drop to top randomly after it crosses the screen
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }

                // Move drop down
                drops[i]++;
            }
        };

        // Run animation
        const interval = setInterval(draw, 50);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className={styles.binaryCanvas}></canvas>;
};

export default BinaryBackground;
