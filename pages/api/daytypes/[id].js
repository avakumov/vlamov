import TypeDay from '../../../models/type-day'
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
                const typeDay = await TypeDay.findById(id)
                if (!typeDay) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: typeDay })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'PUT' /* Edit a model by its ID */:
            try {
                const typeDay = await TypeDay.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })
                if (!typeDay) {
                    return res.status(400).json({ success: false })
                }
                res.status(200).json({ success: true, data: typeDay })
            } catch (error) {
                res.status(400).json({ success: false })
            }
            break

        case 'DELETE' /* Delete a model by its ID */:
            try {
                const deletedTypeDay = await TypeDay.deleteOne({ _id: id })
                if (!deletedTypeDay) {
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
