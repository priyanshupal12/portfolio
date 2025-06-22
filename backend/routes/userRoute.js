import {Router} from 'express'
import {User} from '../models/user.model.js'

const userRouter = Router();

/**
 * @swagger
 * /submit/form:
 *   post:
 *     summary: Get all users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userName
 *             properties:
 *               userName:
 *                 type: string
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
 *                   userName:
 *                     type: string
 *                     
 *                   
 */

userRouter.post('/form', (req, res) => {
    const newUser = new User(req.body)
    console.log('data:', newUser.userName);    
    newUser.save()
    res.status(200).send(`this is the value you passed ${newUser}`)
})

export default userRouter;