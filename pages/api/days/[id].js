import Day from '../../../models/day'
import dbConnect from '../../../utils/db-connect'

export default async function handler(req, res) {
    const {
        query: { id },
        method
    } = req

    await dbConnect()

    switch (method) {
        case 'GET' /* Get a model by its ID */:
            try {
                const day = await Day.findById(id)
                if (!day) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: day })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT' /* Edit a model by its ID */:
            try {
                const day = await Day.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })
                if (!day) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: day })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedDay = await Day.deleteOne({ _id: id })
                if (!deletedDay) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: {} })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        default:
            res.status(400).json({ success: false })
            break
    }
}
