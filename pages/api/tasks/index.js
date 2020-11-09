import { getSession } from 'next-auth/client'

import Task from '../../../models/task'
import dbConnect from '../../../utils/db-connect'

export default async function handler(req, res) {
    const session = await getSession({ req })
    if (!session) {
        res.status(401).json({ success: false })
        return
    }
    const { method } = req
    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const tasks = await Task.find({
                    user: session.userId
                }) /* find all the data in our database */
                res.status(200).json({ success: true, data: tasks })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const task = await Task.create(req.body) /* create a new model in the database */
                res.status(201).json({ success: true, data: task })
            } catch (error) {
                console.log(error)
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}