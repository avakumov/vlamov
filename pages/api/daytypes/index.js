import TypeDay from '../../../models/type-day'
import dbConnect from '../../../utils/db-connect'

export default async function handler(req, res) {
    const { method } = req

    await dbConnect()

    switch (method) {
        case 'GET':
            try {
                const typesDays = await TypeDay.find({}) /* find all the data in our database */
                res.status(200).json({ success: true, data: typesDays })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        case 'POST':
            try {
                const typesDay = await TypeDay.create(
                    req.body
                ) /* create a new model in the database */
                res.status(201).json({ success: true, data: typesDay })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break
        default:
            res.status(400).json({ success: false })
            break
    }
}
