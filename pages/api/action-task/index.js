import ActionTask from '../../../models/action-task'
import dbConnect from '../../../utils/db-connect'

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const actionTasks = await ActionTask.find(
                    {}
                ) /* find all the data in our database */
                res.status(200).json({ success: true, data: actionTasks })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const actionTask = await ActionTask.create(
                    req.body
                ) /* create a new model in the database */
                res.status(201).json({ success: true, data: actionTask })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
