import Award from '../../../models/award'
import dbConnect from '../../../utils/db-connect'

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const awards = await Award.find({}) /* find all the data in our database */
                res.status(200).json({ success: true, data: awards })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const award = await Award.create(req.body) /* create a new model in the database */
                res.status(201).json({ success: true, data: award })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
