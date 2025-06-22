import { Router } from 'express';

const router = Router();

// GET /endpoint

/**
 * @swagger
 * /ree:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */

/**
 * @swagger
 * /index:
 *   get:
 *     summary: Get all users
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */



router.get('/', (req, res) => {
  res.json({ message: 'Hello from /endpoint route!' });
});

router.get('/ree', (req, res) => {
  res.json({ message: 'Hello from /endpoint route but ree!' });
});

router.get('/index', (req, res) => {
  res.json({ message: 'Hello from /index route!' });
});

export default router;
