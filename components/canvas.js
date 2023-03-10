// components/Canvas.js

import { useRef, useEffect } from 'react';

export default function Canvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // draw the game board and the snake using the canvas API
        // draw the game board
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = '#fff';
        ctx.strokeRect(0, 0, canvas.width, canvas.height);

        // draw the snake
        let snake = [
            { x: 200, y: 200 },
            { x: 190, y: 200 },
            { x: 180, y: 200 },
            { x: 170, y: 200 },
            { x: 160, y: 200 }
        ];

        function drawSnakePart(snakePart) {
            ctx.fillStyle = '#fff';
            ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
            ctx.strokeStyle = '#000';
            ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
        }

        for (let i = 0; i < snake.length; i++) {
            drawSnakePart(snake[i]);
        }

        return () => {
            // clean up any event listeners or other resources
        };
    }, []);

    return <canvas ref={canvasRef} />;
}
